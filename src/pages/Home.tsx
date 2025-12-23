import React, { useState, useEffect } from 'react';
import { Users, Pill, Stethoscope, Beaker, ChevronLeft, ChevronRight, Truck, Shield, Clock, Globe, Headphones, CreditCard, Package } from 'lucide-react';
import '../styles/Home.css';

// Promotional banner data
const promoBanner = {
  title: 'FREE',
  highlight: 'DELIVERY',
  subtitle: 'For orders above',
  amount: 'Ksh 2,500',
  note: '*',
  link: 'products'
};

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Full-width promotional banner slides
  const heroSlides = [
    {
      id: 1,
      bannerImage: require('../assets/banners/banner1.jpg'),
      alt: 'Festive Deals - Uncover Skincare - Up to 15% Off',
      link: 'products'
    },
    {
      id: 2,
      bannerImage: require('../assets/banners/banner2.jpg'),
      alt: 'Festive Deals - Eucerin - 10% Off',
      link: 'products'
    },
    {
      id: 3,
      bannerImage: require('../assets/banners/banner3.jpg'),
      alt: 'Festive Deals - Clear Skin - 10% Off',
      link: 'products'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const services = [
    {
      id: 1,
      icon: <Stethoscope size={28} />,
      title: 'Doctor Consultation',
      description: 'Chat with licensed doctors anytime, anywhere. Get medical advice and e-prescriptions.',
      action: 'Consult Now'
    },
    {
      id: 2,
      icon: <Pill size={28} />,
      title: 'Prescription Upload',
      description: 'Upload your prescription and get it reviewed by our pharmacists instantly.',
      action: 'Upload Now'
    },
    {
      id: 3,
      icon: <Users size={28} />,
      title: 'Pediatric Services',
      description: 'Specialized care and consultations for children with our certified pediatricians.',
      action: 'Book Appointment'
    },
    {
      id: 4,
      icon: <Beaker size={28} />,
      title: 'Lab Tests',
      description: 'Order lab tests and get results delivered securely to your account.',
      action: 'Order Test'
    },
  ];

  const brands = [
    { id: 1, name: 'CeraVe', image: require('../assets/brands/cerave.jpg') },
    { id: 2, name: 'Eucerin', image: require('../assets/brands/eucerin.jpg') },
    { id: 3, name: 'Natures Aid', image: require('../assets/brands/natures-aid.jpg') },
    { id: 4, name: 'Microlife', image: require('../assets/brands/microlife.jpg') },
    { id: 5, name: 'La Roche Posay', image: require('../assets/brands/la-roche-posay.jpg') },
    { id: 6, name: 'Jamieson', image: require('../assets/brands/jamieson.jpg') }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Vitamin C 1000mg',
      desc: '30 tablets • Immune support',
      price: 'KES 850',
      originalPrice: 'KES 1,200',
      rating: 5,
      reviews: 128,
      image: require('../assets/products/vitamin-c.jpg')
    },
    {
      id: 2,
      name: 'Omega-3 Fish Oil Capsules',
      desc: '60 softgels • Heart health',
      price: 'KES 1,250',
      originalPrice: 'KES 1,800',
      rating: 5,
      reviews: 203,
      image: require('../assets/products/omega-3.jpg')
    },
    {
      id: 3,
      name: 'Multivitamin Complex',
      desc: '90 tablets • Daily wellness',
      price: 'KES 1,100',
      originalPrice: 'KES 1,400',
      rating: 5,
      reviews: 234,
      image: require('../assets/products/multivitamin.jpg')
    },
    {
      id: 4,
      name: 'Probiotic Supplement',
      desc: '30 capsules • Digestive health',
      price: 'KES 1,200',
      originalPrice: 'KES 1,500',
      rating: 5,
      reviews: 142,
      image: require('../assets/products/probiotic.jpg')
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'Great service! I was able to get my prescription delivered in just 2 hours. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Kipchoge',
      text: 'The doctor consultation feature is amazing. Very convenient and the doctors are professional.',
      rating: 5
    },
    {
      id: 3,
      name: 'Grace Mwangi',
      text: 'Fast delivery, quality products, and excellent customer service. AVA Pharmacy is my go-to!',
      rating: 5
    },
  ];

  return (
    <div className="home">
      {/* Hero Section - Full Width Banner Carousel */}
      <section className="hero-banner-section">
        <div className="hero-banner-carousel">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-banner-slide ${index === currentSlide ? 'active' : ''}`}
              onClick={() => onNavigate(slide.link)}
            >
              <img src={slide.bannerImage} alt={slide.alt} className="hero-banner-image" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="hero-banner-nav hero-banner-nav-prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={32} />
        </button>
        <button className="hero-banner-nav hero-banner-nav-next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={32} />
        </button>

        {/* Slide Indicators */}
        <div className="hero-banner-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-banner-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Feature Bar - After Hero */}
      <section className="feature-bar">
        <div className="container">
          <div className="feature-items">
            <div className="feature-item">
              <Package size={24} />
              <div className="feature-text">
                <span className="feature-title">Express Delivery</span>
                <span className="feature-desc">Same day delivery if ordered by 7 pm</span>
              </div>
            </div>
            <div className="feature-item">
              <Globe size={24} />
              <div className="feature-text">
                <span className="feature-title">Nationwide Delivery</span>
                <span className="feature-desc">From a network of over 10+ stores</span>
              </div>
            </div>
            <div className="feature-item">
              <Headphones size={24} />
              <div className="feature-text">
                <span className="feature-title">Customer Support</span>
                <span className="feature-desc">Available 7 days a week</span>
              </div>
            </div>
            <div className="feature-item">
              <Shield size={24} />
              <div className="feature-text">
                <span className="feature-title">Genuine Products</span>
                <span className="feature-desc">All our products are 100% genuine</span>
              </div>
            </div>
            <div className="feature-item">
              <CreditCard size={24} />
              <div className="feature-text">
                <span className="feature-title">Easy Payments</span>
                <span className="feature-desc">Pay by M-Pesa, Visa or MasterCard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner-section">
        <div className="container">
          <div className="promo-banner" onClick={() => onNavigate(promoBanner.link)}>
            <div className="promo-banner-content">
              <div className="promo-logo">
                <span className="promo-brand">AVA</span>
                <span className="promo-tagline">Pharmacy Health Beauty</span>
              </div>
              <div className="promo-delivery-icon">
                <Truck size={48} />
              </div>
              <div className="promo-text-badge">
                <span className="promo-free">{promoBanner.title}</span>
                <span className="promo-delivery">{promoBanner.highlight}</span>
              </div>
              <div className="promo-details">
                <span className="promo-subtitle">{promoBanner.subtitle}</span>
                <span className="promo-amount">{promoBanner.amount}<sup>{promoBanner.note}</sup></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    if (service.id === 1) onNavigate('doctor');
                    else if (service.id === 2) onNavigate('prescription');
                    else if (service.id === 4) onNavigate('lab');
                    else onNavigate('products');
                  }}
                >
                  {service.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title">Our Top Brands</h2>
          <div className="brands-carousel">
            <button className="carousel-btn carousel-btn-left">
              <ChevronLeft size={24} />
            </button>
            <div className="brands-grid">
              {brands.map(brand => (
                <div key={brand.id} className="brand-card" onClick={() => onNavigate('products')}>
                  <div className="brand-image">
                    <img src={brand.image} alt={brand.name} />
                  </div>
                  <h3 className="brand-name">{brand.name}</h3>
                </div>
              ))}
            </div>
            <button className="carousel-btn carousel-btn-right">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title">Just Landed: New Arrivals</h2>
            <p className="section-subtitle">Discover the latest additions to our shelves</p>
            <button onClick={() => onNavigate('products')} className="view-all-link">
              View All →
            </button>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-rating">
                    <span className="stars">{'★'.repeat(product.rating)}</span>
                    <span className="reviews">({product.reviews} reviews)</span>
                  </div>
                  <div className="product-price">
                    <span className="price">{product.price}</span>
                    <span className="original-price">{product.originalPrice}</span>
                  </div>
                  <button className="btn btn-primary btn-full" onClick={() => onNavigate('product-detail')}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Sign Up for the Latest Deals, Product News, and more from AVA Pharmacy.</h2>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Email address"
                className="newsletter-input"
              />
              <button className="btn btn-subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="stars">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container flex-center">
          <div className="cta-content">
            <h2>Need Professional Medical Advice?</h2>
            <p>Our licensed doctors are available 24/7 for consultations</p>
            <button className="btn btn-cta" onClick={() => onNavigate('doctor')}>
              Consult a Doctor Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
