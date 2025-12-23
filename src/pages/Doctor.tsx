import React, { useState } from 'react';
import { MessageCircle, Video, Clock, MapPin, Star, Filter, Search } from 'lucide-react';
import '../styles/Doctor.css';

interface DoctorProps {
  onNavigate: (page: string) => void;
}

const Doctor: React.FC<DoctorProps> = ({ onNavigate }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [consultationType, setConsultationType] = useState<'chat' | 'video'>('chat');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Practitioner',
      rating: 5,
      reviews: 234,
      price: 500,
      responseTime: '< 5 min',
      image: '👨‍⚕️',
      bio: 'Experienced GP with 10+ years of practice',
      available: true,
      languages: ['English', 'Swahili']
    },
    {
      id: 2,
      name: 'Dr. James Kipchoge',
      specialty: 'Cardiologist',
      rating: 4.8,
      reviews: 189,
      price: 750,
      responseTime: '< 10 min',
      image: '👨‍⚕️',
      bio: 'Heart specialist with extensive experience',
      available: true,
      languages: ['English', 'Swahili']
    },
    {
      id: 3,
      name: 'Dr. Mary Omondi',
      specialty: 'Pediatrician',
      rating: 5,
      reviews: 156,
      price: 400,
      responseTime: '< 8 min',
      image: '👩‍⚕️',
      bio: 'Child health specialist, compassionate care',
      available: true,
      languages: ['English', 'Swahili']
    },
    {
      id: 4,
      name: 'Dr. Ahmed Hassan',
      specialty: 'Dermatologist',
      rating: 4.7,
      reviews: 142,
      price: 600,
      responseTime: '< 12 min',
      image: '👨‍⚕️',
      bio: 'Skin care expert, treats all ages',
      available: false,
      languages: ['English', 'Swahili', 'Arabic']
    },
    {
      id: 5,
      name: 'Dr. Patricia Mwangi',
      specialty: 'General Practitioner',
      rating: 4.9,
      reviews: 201,
      price: 450,
      responseTime: '< 6 min',
      image: '👩‍⚕️',
      bio: 'Holistic approach to healthcare',
      available: true,
      languages: ['English', 'Swahili']
    },
    {
      id: 6,
      name: 'Dr. David Kimani',
      specialty: 'Orthopedist',
      rating: 4.8,
      reviews: 167,
      price: 700,
      responseTime: '< 11 min',
      image: '👨‍⚕️',
      bio: 'Bone and joint specialist',
      available: true,
      languages: ['English', 'Swahili']
    },
  ];

  const specialties = ['All', 'General Practitioner', 'Cardiologist', 'Pediatrician', 'Dermatologist', 'Orthopedist'];

  const filteredDoctors = doctors.filter(doctor =>
    selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty
  );

  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="doctor-page">
      <div className="doctor-header">
        <div className="container">
          <h1>Consult a Doctor</h1>
          <p>Chat with licensed medical professionals 24/7</p>
        </div>
      </div>

      {/* Consultation Type Selector */}
      <div className="consultation-selector">
        <div className="container">
          <div className="type-buttons">
            <button
              className={`type-btn ${consultationType === 'chat' ? 'active' : ''}`}
              onClick={() => setConsultationType('chat')}
            >
              <MessageCircle size={24} />
              <span>Chat Consultation</span>
              <small>Respond at your own pace</small>
            </button>
            <button
              className={`type-btn ${consultationType === 'video' ? 'active' : ''}`}
              onClick={() => setConsultationType('video')}
            >
              <Video size={24} />
              <span>Video Consultation</span>
              <small>Face-to-face conversation</small>
            </button>
          </div>
        </div>
      </div>

      <div className="container doctor-container">
        {/* Filters */}
        <aside className="doctor-filters">
          <h3>Filter by Specialty</h3>
          <div className="filter-buttons">
            {specialties.map(specialty => (
              <button
                key={specialty}
                className={`filter-btn ${selectedSpecialty === specialty.toLowerCase().replace(/\s+/g, '-') || selectedSpecialty === 'all' && specialty === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedSpecialty(specialty === 'All' ? 'all' : specialty)}
              >
                {specialty}
              </button>
            ))}
          </div>

          <h3 style={{ marginTop: 'var(--spacing-2xl)' }}>Sort by</h3>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Top Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </aside>

        {/* Doctors Grid */}
        <div className="doctors-main">
          <div className="doctors-grid">
            {sortedDoctors.map(doctor => (
              <div key={doctor.id} className="doctor-card">
                <div className="doctor-header-card">
                  <div className="doctor-image">{doctor.image}</div>
                  <div className="availability">
                    <span className={`status ${doctor.available ? 'available' : 'busy'}`}>
                      {doctor.available ? '🟢 Available' : '🔴 Busy'}
                    </span>
                  </div>
                </div>

                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="specialty">{doctor.specialty}</p>

                  <div className="rating">
                    <span className="stars">{'★'.repeat(Math.floor(doctor.rating))}</span>
                    <span className="rating-text">({doctor.reviews})</span>
                  </div>

                  <p className="bio">{doctor.bio}</p>

                  <div className="details">
                    <div className="detail-item">
                      <Clock size={16} />
                      <span>{doctor.responseTime}</span>
                    </div>
                    <div className="detail-item">
                      <MessageCircle size={16} />
                      <span>{doctor.languages[0]}</span>
                    </div>
                  </div>

                  <div className="price-section">
                    <span className="price">KES {doctor.price}</span>
                    <span className="per-session">per session</span>
                  </div>

                  <button
                    className="btn btn-primary btn-full"
                    onClick={() => onNavigate('chat')}
                    disabled={!doctor.available}
                  >
                    {doctor.available ? 'Consult Now' : 'Coming Soon'}
                  </button>
                  <button className="btn btn-outline btn-full">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h4>Select a Doctor</h4>
              <p>Browse our qualified doctors and choose based on specialty and availability</p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h4>Choose Consultation Type</h4>
              <p>Pick between chat or video consultation based on your preference</p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h4>Make Payment</h4>
              <p>Secure payment with card or M-Pesa. No hidden charges</p>
            </div>
            <div className="step-card">
              <div className="step-num">4</div>
              <h4>Get Consultation</h4>
              <p>Receive medical advice and e-prescription if needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Service?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⏰</div>
              <h4>24/7 Available</h4>
              <p>Access doctors anytime, anywhere from your device</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💊</div>
              <h4>E-Prescriptions</h4>
              <p>Get digital prescriptions directly filled by our pharmacy</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h4>Confidential</h4>
              <p>All consultations are private and secure</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✅</div>
              <h4>Licensed Doctors</h4>
              <p>All doctors are verified and licensed professionals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
