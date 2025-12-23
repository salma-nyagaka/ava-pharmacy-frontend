import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <h4>About AVA Pharmacy</h4>
          <p>Your trusted partner for healthcare, wellness, and medical consultations. Delivering quality medicines and services with care.</p>
          <div className="social-links">
            <a href="#facebook" title="Facebook"><Facebook size={20} /></a>
            <a href="#instagram" title="Instagram"><Instagram size={20} /></a>
            <a href="#twitter" title="Twitter"><Twitter size={20} /></a>
            <a href="#whatsapp" title="WhatsApp"><MessageCircle size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#prescriptions">Upload Prescription</a></li>
            <li><a href="#doctors">Doctor Consultation</a></li>
            <li><a href="#lab">Lab Tests</a></li>
            <li><a href="#track">Track Order</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#telemedicine">Telemedicine</a></li>
            <li><a href="#pediatric">Pediatric Services</a></li>
            <li><a href="#laboratory">Laboratory Services</a></li>
            <li><a href="#delivery">Fast Delivery</a></li>
            <li><a href="#support">Customer Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={18} />
              <div>
                <p>+254 712 345 678</p>
                <p>+254 722 123 456</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <p><a href="mailto:info@avapharmacy.co.ke">info@avapharmacy.co.ke</a></p>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <p>123 Health Street, Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe for health tips and exclusive offers</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container flex-between">
          <p>&copy; 2025 AVA Pharmacy Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#compliance">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
