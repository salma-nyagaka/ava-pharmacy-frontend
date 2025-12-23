import React from 'react';
import { Package, Users, Shield, Heart, Pill, Sparkles, Baby, Leaf } from 'lucide-react';
import '../styles/About.css';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const whyChooseUs = [
    {
      id: 1,
      icon: <Package size={32} />,
      title: 'Thoughtfully curated beauty and wellness products'
    },
    {
      id: 2,
      icon: <Users size={32} />,
      title: 'Knowledgeable and friendly staff'
    },
    {
      id: 3,
      icon: <Shield size={32} />,
      title: 'Safe, authentic, and trusted brands'
    },
    {
      id: 4,
      icon: <Heart size={32} />,
      title: 'A customer-first experience in every visit'
    }
  ];

  const categories = [
    {
      id: 1,
      icon: <Pill size={28} />,
      title: 'Health & Wellness',
      items: [
        'Immune boosters & daily vitamins',
        'Natural supplements & herbal remedies',
        'Stress relief & relaxation products',
        "Women's and men's wellness essentials"
      ]
    },
    {
      id: 2,
      icon: <Sparkles size={28} />,
      title: 'Beauty & Skincare',
      items: [
        'Dermatologist-recommended skincare',
        'Organic beauty solutions',
        'Body care & personal hygiene',
        'Hair care for all types and textures'
      ]
    },
    {
      id: 3,
      icon: <Baby size={28} />,
      title: 'Mother & Baby Care',
      items: [
        'Safe baby skincare & bath products',
        'Maternity wellness items',
        'Diapers, wipes & baby feeding accessories'
      ]
    },
    {
      id: 4,
      icon: <Leaf size={28} />,
      title: 'Self-Care & Lifestyle',
      items: [
        'Aromatherapy & essential oils',
        'Wellness teas & detox blends',
        'Fitness and body toning accessories',
        'Sustainable personal care tools'
      ]
    }
  ];

  return (
    <div className="about-page">
      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="who-we-are-content">
            <div className="who-we-are-image">
              <img src={require('../assets/about-hero.jpg')} alt="AVA Pharmacy Team" />
            </div>
            <div className="who-we-are-text">
              <h1>Who We Are</h1>
              <p>
                At AVA Pharmacy, we believe that true wellness is a balance of health, beauty, and
                peace of mind. That's why we've created a curated space where you can explore high-
                quality products, receive trusted advice, and invest in your personal care with
                confidence. From skincare and supplements to baby care and lifestyle wellness
                products, our mission is to empower you to feel your best — naturally, affordably, and
                stylishly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose AVA Pharmacy?</h2>
          <div className="why-choose-grid">
            {whyChooseUs.map(item => (
              <div key={item.id} className="why-choose-card">
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essentials Section */}
      <section className="essentials-section">
        <div className="essentials-overlay">
          <div className="container">
            <h2>Reliable & High-Quality<br />Essentials And Indulgences</h2>
            <div className="essentials-grid">
              {categories.map(category => (
                <div key={category.id} className="essentials-card">
                  <div className="essentials-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <h2>Ready to Start Your Wellness Journey?</h2>
            <p>Explore our products and discover the AVA Pharmacy difference.</p>
            <button className="btn btn-primary btn-lg" onClick={() => onNavigate('products')}>
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
