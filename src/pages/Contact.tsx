import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import '../styles/Contact.css';

interface ContactProps {
  onNavigate: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRobotChecked) {
      alert('Please verify that you are not a robot.');
      return;
    }
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', mobile: '', message: '' });
    setIsRobotChecked(false);
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Left Side - Contact Info */}
            <div className="contact-info">
              <h1>We Ensure You Will Always Get The Best Result</h1>
              <p className="contact-subtitle">Have a question? We're here to help.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Office Address</h4>
                    <p>Karen/The hub, Karen, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Call Us</h4>
                    <p>+254 (0) 715 737 330</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Office Time</h4>
                    <p>Mon-Sun 09am-5pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-container">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="full-width"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <div className="recaptcha-container">
                  <div className="recaptcha-box">
                    <input
                      type="checkbox"
                      id="recaptcha"
                      checked={isRobotChecked}
                      onChange={(e) => setIsRobotChecked(e.target.checked)}
                    />
                    <label htmlFor="recaptcha">I'm not a robot</label>
                  </div>
                  <div className="recaptcha-branding">
                    <span className="recaptcha-text">reCAPTCHA</span>
                    <span className="recaptcha-links">Privacy - Terms</span>
                  </div>
                </div>
                <button type="submit" className="btn btn-submit">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
