import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="about-header">
                <h1 className="about-title">Empowering Patients with Knowledge</h1>
                <p className="about-subtitle">We believe affordable healthcare is a right, not a privilege.</p>
            </header>

            <section className="about-section">
                <h2 className="section-title">Our Mission</h2>
                <div className="section-content">
                    <p>
                        In today's healthcare landscape, the price difference between a branded medicine and its generic equivalent can be staggering—sometimes up to 80%. Yet, the biological mechanism of action remains exactly the same.
                    </p>
                    <p>
                        AltRx was born out of a simple question: <strong>Why should patients pay more for the packaging than the cure?</strong>
                    </p>
                    <p>
                        Our mission is to bridge the information gap in the pharmaceutical market. By decoding complex chemical names into simple, searchable alternatives, we empower you to make financially smart decisions without compromising on your health.
                    </p>
                </div>
            </section>

            <section className="about-section">
                <h2 className="section-title">Data You Can Trust</h2>
                <div className="section-content">
                    <p>We prioritize accuracy and safety above all else. AltRx operates on a hybrid data model:</p>
                    <ul className="data-list">
                        <li>
                            <strong>Pricing & Availability:</strong> Sourced from our proprietary database of Indian pharmaceutical market standards.
                        </li>
                        <li>
                            <strong>Clinical Safety:</strong> Powered by the OpenFDA API, ensuring that every drug description, warning, and usage guideline comes directly from official regulatory bodies.
                        </li>
                    </ul>
                    <p className="disclaimer-text">We do not offer medical advice. We offer data transparency.</p>
                </div>
            </section>

            <section className="about-section">
                <h2 className="section-title">Behind the Code</h2>
                <div className="section-content">
                    <p>
                        AltRx is a project developed by <strong>[Your Name]</strong>, a final-year Computer Science student passionate about the intersection of technology and social impact.
                    </p>
                    <p>
                        Built using React.js and modern data visualization tools, this platform represents a commitment to using code to solve real-world problems.
                    </p>
                    <div className="developer-info">
                        <p><strong>Role:</strong> Full Stack Developer</p>
                        <p><strong>Tech Stack:</strong> React, Node.js, OpenFDA, Antigravity</p>
                        <p><strong>Goal:</strong> To create digital tools that improve daily life.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
