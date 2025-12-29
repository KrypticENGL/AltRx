import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import DrugInfo from './components/DrugInfo';
import AboutUs from './components/AboutUs';
import Disclaimer from './components/Disclaimer';
import Educational from './components/Educational';
import Contact from './components/Contact';
import HomeContent from './components/HomeContent';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [drugData, setDrugData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDrugData = async (query) => {
    setLoading(true);
    setError(null);
    setDrugData(null);
    // Ensure we are on the home page when searching
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }

    try {
      const response = await fetch(
        `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${query}"+OR+openfda.generic_name:"${query}"&limit=1`
      );

      if (!response.ok) {
        throw new Error('Drug not found or API error');
      }

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setDrugData(data.results[0]);
      } else {
        setError('No results found for this drug.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />;
      case 'disclaimer':
        return <Disclaimer />;
      case 'educational':
        return <Educational />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <SearchBar onSearch={fetchDrugData} />
            {loading && <div className="loading-spinner">Loading...</div>}
            {error && <div className="error-message">{error}</div>}
            {drugData ? (
              <DrugInfo data={drugData} />
            ) : (
              !loading && <HomeContent onSearch={fetchDrugData} onNavigate={setCurrentPage} />
            )}
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <Navbar onNavigate={setCurrentPage} />

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
