import { useState, useEffect } from 'react';
import './DrugInfo.css';

import { mockDrugDatabase } from '../data/mockDrugDatabase';

function DrugInfo({ data }) {
    const [alternatives, setAlternatives] = useState([]);
    const [loadingAlternatives, setLoadingAlternatives] = useState(false);

    if (!data) return null;

    const { openfda, active_ingredient, inactive_ingredient } = data;
    const brandName = openfda?.brand_name ? openfda.brand_name[0] : 'Unknown Brand';
    const genericName = openfda?.generic_name ? openfda.generic_name[0] : null;

    useEffect(() => {
        const fetchAlternatives = async () => {
            // Use substance_name for better matching, fallback to generic_name
            const searchTerm = openfda?.substance_name ? openfda.substance_name[0] : genericName;

            if (!searchTerm) {
                setAlternatives([]);
                return;
            }

            setLoadingAlternatives(true);

            // Check mock database first
            // Try to match with substance name or generic name (lowercase)
            const searchKey = searchTerm.toLowerCase();
            // Also try generic name if substance name didn't match or wasn't available
            const genericKey = genericName ? genericName.toLowerCase() : '';

            let mockData = mockDrugDatabase[searchKey];
            if (!mockData && genericKey && genericKey !== searchKey) {
                mockData = mockDrugDatabase[genericKey];
            }

            if (mockData) {
                // Use mock data if available
                // Filter out current brand if it happens to be in the list (case insensitive)
                const currentBrandLower = brandName.toLowerCase();
                const filteredMock = mockData.filter(item =>
                    item.brand.toLowerCase() !== currentBrandLower
                );

                setAlternatives(filteredMock);
                setLoadingAlternatives(false);
                return;
            }

            // Fallback to API if not in mock database
            try {
                // Search for other drugs with the same substance
                const response = await fetch(
                    `https://api.fda.gov/drug/label.json?search=openfda.substance_name:"${searchTerm}"&limit=10`
                );
                const result = await response.json();

                if (result.results) {
                    const currentBrandLower = brandName.toLowerCase();

                    // Filter out the current drug and map to useful structure
                    const alts = result.results
                        .filter(item => {
                            if (!item.openfda?.brand_name) return false;
                            const itemBrand = item.openfda.brand_name[0];
                            // Exclude if brand names are too similar (e.g. Advil vs Advil PM)
                            return !itemBrand.toLowerCase().includes(currentBrandLower) &&
                                !currentBrandLower.includes(itemBrand.toLowerCase());
                        })
                        .slice(0, 5) // Limit to 5 after filtering
                        .map(item => ({
                            brand: item.openfda.brand_name[0],
                            manufacturer: item.openfda.manufacturer_name ? item.openfda.manufacturer_name[0] : 'Unknown',
                            // Mock price generation: Random price between $10 and $50
                            price: (Math.random() * (50 - 10) + 10).toFixed(2)
                        }));
                    setAlternatives(alts);
                } else {
                    setAlternatives([]);
                }
            } catch (error) {
                console.error("Error fetching alternatives:", error);
                setAlternatives([]);
            } finally {
                setLoadingAlternatives(false);
            }
        };

        fetchAlternatives();
    }, [genericName, brandName, openfda]);

    return (
        <div className="drug-info-card">
            <h2 className="drug-title">{brandName}</h2>
            <p className="drug-subtitle">{genericName || 'Unknown Generic Name'}</p>

            <div className="drug-info-content">
                <div className="drug-details-column">
                    <div className="drug-section">
                        <h3>Active Ingredients</h3>
                        <div className="ingredient-content">
                            {active_ingredient ? (
                                active_ingredient.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))
                            ) : (
                                <p className="no-data">No active ingredient information available.</p>
                            )}
                        </div>
                    </div>

                    <div className="drug-section">
                        <h3>Inactive Ingredients</h3>
                        <div className="ingredient-content">
                            {inactive_ingredient ? (
                                inactive_ingredient.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))
                            ) : (
                                <p className="no-data">No inactive ingredient information available.</p>
                            )}
                        </div>
                    </div>
                </div>

                {genericName && (
                    <div className="drug-comparison-column">
                        <div className="drug-section">
                            <h3>Compare Brands (Same Composition)</h3>
                            {loadingAlternatives ? (
                                <p>Loading alternatives...</p>
                            ) : alternatives.length > 0 ? (
                                <table className="comparison-table">
                                    <thead>
                                        <tr>
                                            <th>Brand</th>
                                            <th>Medicine Name</th>
                                            <th>Manufacturer</th>
                                            <th>Est. Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {alternatives.map((alt, index) => (
                                            <tr key={index}>
                                                <td>{alt.brand}</td>
                                                <td>{alt.genericName || genericName || 'N/A'}</td>
                                                <td>{alt.manufacturer}</td>
                                                <td className="price-cell">${alt.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p className="no-data">No other brands found for comparison.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DrugInfo;
