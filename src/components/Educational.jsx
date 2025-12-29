import React, { useState } from 'react';
import './Educational.css';

const Educational = () => {
    const [activeMyth, setActiveMyth] = useState(null);

    const toggleMyth = (index) => {
        setActiveMyth(activeMyth === index ? null : index);
    };

    const myths = [
        {
            question: "Myth 1: \"Generic medicines take longer to work.\"",
            answer: "Fact: False. Regulatory standards require generics to dissolve and be absorbed into the body at the same rate as the branded version."
        },
        {
            question: "Myth 2: \"They use lower quality ingredients.\"",
            answer: "Fact: False. The active ingredients must be identical. While \"inactive\" ingredients (fillers, colors) might differ, they must be proven safe and not affect how the drug works."
        },
        {
            question: "Myth 3: \"They are not safe.\"",
            answer: "Fact: False. Generic manufacturing facilities must meet the exact same FDA standards of cleanliness and quality control as branded facilities."
        }
    ];

    return (
        <div className="educational-container">
            <header className="edu-header">
                <h1 className="edu-title">Understanding Generics</h1>
                <p className="edu-subtitle">Same Cure, Different Price. Here is the science behind the savings.</p>
            </header>

            <section className="edu-section">
                <h2 className="section-title">What exactly is a Generic Medicine?</h2>
                <div className="section-content">
                    <p>
                        A generic medicine is a medication created to be the same as an already marketed brand-name drug in dosage form, safety, strength, route of administration, quality, performance characteristics, and intended use.
                    </p>
                    <p>
                        Think of it like buying sugar. Whether you buy it in a fancy branded box or a plain packet, the sweetness (the chemical sucrose) is exactly the same. Medicine works the same way.
                    </p>
                </div>
            </section>

            <section className="edu-section">
                <h2 className="section-title">The Science of "Bioequivalence"</h2>
                <div className="section-content">
                    <p>
                        The FDA and regulatory bodies require generic medicines to be 'Bioequivalent' to the brand name. This means:
                    </p>
                    <ul className="edu-list">
                        <li><strong>Same Active Ingredient:</strong> The chemical that cures you (the Salt) is identical.</li>
                        <li><strong>Same Strength:</strong> If the brand is 500mg, the generic must be 500mg.</li>
                        <li><strong>Same Absorption:</strong> It must enter your bloodstream at the same speed.</li>
                    </ul>

                    <div className="bioequivalence-graph">
                        <h3>Bioequivalence Curve</h3>
                        <svg viewBox="0 0 400 200" className="graph-svg">
                            {/* Axes */}
                            <line x1="40" y1="180" x2="380" y2="180" stroke="#cbd5e1" strokeWidth="2" />
                            <line x1="40" y1="180" x2="40" y2="20" stroke="#cbd5e1" strokeWidth="2" />
                            <text x="340" y="195" fill="#94a3b8" fontSize="12">Time</text>
                            <text x="10" y="30" fill="#94a3b8" fontSize="12" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>Concentration</text>

                            {/* Brand Curve (Blue) */}
                            <path d="M40,180 Q100,20 200,80 T380,170" fill="none" stroke="#3b82f6" strokeWidth="3" />

                            {/* Generic Curve (Teal - Dashed/Overlapping) */}
                            <path d="M40,180 Q105,25 205,85 T380,170" fill="none" stroke="#2dd4bf" strokeWidth="3" strokeDasharray="5,5" />

                            {/* Legend */}
                            <rect x="280" y="20" width="10" height="10" fill="#3b82f6" />
                            <text x="300" y="30" fill="#cbd5e1" fontSize="12">Brand Name</text>
                            <rect x="280" y="40" width="10" height="10" fill="#2dd4bf" />
                            <text x="300" y="50" fill="#cbd5e1" fontSize="12">Generic</text>
                        </svg>
                        <p className="graph-caption">The graph shows two curves (Brand vs Generic) overlapping almost perfectly, proving they act the same way in the body.</p>
                    </div>
                </div>
            </section>

            <section className="edu-section">
                <h2 className="section-title">If it’s the same, why is it cheaper?</h2>
                <div className="section-content">
                    <p>It isn't because the quality is lower. It's because of the Research & Development (R&D) cycle:</p>
                    <div className="comparison-cards">
                        <div className="card brand-card">
                            <h3>Branded Drugs</h3>
                            <p>The original company spends billions inventing the drug, testing it, and marketing it. They charge a premium to recover these costs during their patent period.</p>
                        </div>
                        <div className="card generic-card">
                            <h3>Generic Drugs</h3>
                            <p>Once the patent expires, other companies can make the same drug using the existing formula. They don't have to pay for invention or massive marketing campaigns, so they pass those savings on to you.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="edu-section">
                <h2 className="section-title">Myth Busters</h2>
                <div className="accordion">
                    {myths.map((myth, index) => (
                        <div key={index} className={`accordion-item ${activeMyth === index ? 'active' : ''}`}>
                            <button className="accordion-header" onClick={() => toggleMyth(index)}>
                                {myth.question}
                                <span className="accordion-icon">{activeMyth === index ? '−' : '+'}</span>
                            </button>
                            <div className="accordion-content">
                                <p>{myth.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="edu-section glossary-section">
                <h2 className="section-title">Glossary</h2>
                <div className="glossary-grid">
                    <div className="glossary-item">
                        <strong>Salt / API:</strong> The "Active Pharmaceutical Ingredient." The chemical that actually treats your condition (e.g., Paracetamol).
                    </div>
                    <div className="glossary-item">
                        <strong>Brand Name:</strong> The marketing name given by the company (e.g., Crocin, Calpol).
                    </div>
                    <div className="glossary-item">
                        <strong>FDA:</strong> Food and Drug Administration (The agency that checks safety).
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Educational;
