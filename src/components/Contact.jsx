import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: 'General Inquiry',
            message: ''
        });
    };

    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-subtitle">Have questions, feedback, or found a bug? We'd love to hear from you.</p>
            </header>

            <div className="contact-content-wrapper">
                <section className="contact-form-section">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Report a Price Discrepancy">Report a Price Discrepancy</option>
                                <option value="Report a Bug/Technical Issue">Report a Bug/Technical Issue</option>
                                <option value="Feedback/Suggestion">Feedback/Suggestion</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>

                <aside className="contact-sidebar">
                    <div className="sidebar-card contact-info">
                        <h3>Direct Contact</h3>
                        <p><strong>Email:</strong> support@altrx.com</p>
                        <p><strong>Location:</strong> Patna, India</p>
                    </div>

                    <div className="sidebar-card faq-snippet">
                        <h3>Before you ask...</h3>
                        <div className="faq-item">
                            <h4>Q: Can you prescribe me medicine?</h4>
                            <p>A: No. AltRx is an informational tool only. We cannot provide medical advice or prescriptions.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Q: Why is a specific brand not listed?</h4>
                            <p>A: Our database is constantly growing. If you don't see a brand, please use the form above to suggest it!</p>
                        </div>
                        <div className="faq-item">
                            <h4>Q: Is the pricing real-time?</h4>
                            <p>A: Prices are based on standard MRP and may vary slightly by pharmacy location.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Contact;
