import React from 'react';
import './HomeContent.css';

const HomeContent = ({ onSearch, onNavigate }) => {
    const trendingSearches = [
        "Pan 40", "Crocin", "Augmentin", "Shelcal 500", "Dolo 650", "Azithromycin"
    ];

    return (
        <div className="home-content-container">
            {/* 1. The "Trust Row" */}
            <section className="trust-row">
                <div className="trust-item">
                    <div className="trust-icon">💸</div>
                    <h3>Save up to 85%</h3>
                    <p>Compare prices instantly and stop overpaying.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon">🛡️</div>
                    <h3>100% Safe & Verified</h3>
                    <p>Clinical data sourced directly from OpenFDA.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon">💊</div>
                    <h3>10,000+ Medicines</h3>
                    <p>Comprehensive database of Indian brands.</p>
                </div>
            </section>

            {/* 2. "Trending Searches" */}
            <section className="trending-section">
                <h3>Popular Searches:</h3>
                <div className="trending-chips">
                    {trendingSearches.map((term, index) => (
                        <button
                            key={index}
                            className="chip"
                            onClick={() => onSearch(term)}
                        >
                            {term}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. "How AltRx Works" */}
            <section className="how-it-works">
                <h2>Smart Savings in 3 Steps</h2>
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Search</h3>
                        <p>Enter the brand name prescribed by your doctor.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Match</h3>
                        <p>We identify the active "Salt" (Chemical Ingredient).</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Switch</h3>
                        <p>We show you cheaper brands with the exact same salt.</p>
                    </div>
                </div>
            </section>

            {/* 4. Educational Hook */}
            <section className="edu-hook-banner">
                <div className="edu-hook-content">
                    <h2>Is Cheaper Medicine Safe?</h2>
                    <p>Yes. Generic medicines have the exact same active ingredients and effectiveness as expensive brands. The only difference is the marketing budget.</p>
                    <button
                        className="edu-button"
                        onClick={() => onNavigate('educational')}
                    >
                        Learn the Science →
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomeContent;
