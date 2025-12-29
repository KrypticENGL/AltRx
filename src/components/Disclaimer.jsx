import React from 'react';
import './Disclaimer.css';

const Disclaimer = () => {
    return (
        <div className="disclaimer-container">
            <div className="disclaimer-card">
                <h1 className="disclaimer-title">Disclaimer</h1>
                <div className="disclaimer-content">
                    <p>
                        The information provided by <strong>AltRx</strong> is for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                    <p className="important-note">
                        Always consult your physician before changing your medication regimen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
