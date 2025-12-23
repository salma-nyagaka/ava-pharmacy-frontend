import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import '../styles/Header.css';

interface HeaderProps {
  cartCount?: number;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount = 0, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      name: 'HealthCare',
      conditions: ['Aches & Pains', 'Allergy & Hayfever', 'Anti Infectives', 'Bath & Bodycare', 'Beauty', 'Bites & Stings', 'Bones & Joints', 'Cold, Flu and Cough', 'Eye Care', 'Equipment & Diagnostics', 'Family Planning', 'Fertility & Pregnancy', 'First Aid & Bandages', 'Hair Care', 'Masks & Sanitisers', 'Mens', 'Mum & Baby', 'Oral Care', 'Personal Care', 'Sexual Health', 'Skin Treatments', 'Stop Smoking', 'Travel & Holiday', 'Womens Health'],
      brands: ['Aqua Oleum', 'Benylin', 'BioFreeze', 'Brustan', 'Deep Heat', 'Deep Freeze', 'Denk', 'Efferalgan', 'Gaviscon', 'Imodium', 'Nizoral', 'Panadol', 'Saru Organics', 'Shea Moisture', 'Sheth Naturals']
    },
    {
      id: 2,
      name: 'Vitamins & Supplements',
      conditions: ['Bones & Joints', 'Brain & Memory', 'Calm & Sleep', 'Childrens', 'Energy & Vitality', 'Heart & Circulation', 'Immunity', 'Iron Supplements', 'Multivitamins & Minerals', 'Probiotics & Digestive', 'Sexual Health', 'Weight Management', 'Womens Health'],
      brands: ['Berocca', 'Centrum', 'Denk', 'Haliborange', 'Health Aid', 'Holland & Barrett', 'Jamieson', 'Marnys', 'Natural Factors', 'Natures Aid', 'Natures Truth', 'Natures Way', 'Now', 'Osteocare', 'Pregnacare', 'Quest', 'Scotts Emulsion', 'Webber Naturals', 'WellMan', 'WellWoman']
    },
    {
      id: 3,
      name: 'Skin Care',
      conditions: ['Acne', 'Dry Skin', 'Eczema', 'Oily Skin', 'Psoriasis', 'Stretch Mark Treatment', 'Sun Burn'],
      brands: ['Acnes', 'Aloe Pura Organic', 'Bio Balance', 'Bio-Oil', 'Bioderma', 'CeraVe', 'Eucerin', 'Heliocare', 'La Roche Posay', 'Makari', 'Neutrogena', 'Uncover', 'Uriage']
    },
    {
      id: 4,
      name: 'Beauty & Make Up',
      conditions: ['Body Creams', 'Body Oils & Lotions', 'Sun Screen', 'Cleansers', 'Face Masks', 'Face Wash', 'Face Wipes', 'Lip Balms', 'Moisturisers', 'Serums', 'Foundations', 'Lip Stick', 'Mascaras', 'Make Up Removers'],
      brands: ['Acnevit', 'Anashe', 'Bio Balance', 'Bioderma', 'Canvas', 'CeraVe', 'Cetaphil', 'Cosrx', 'Eucerin', 'Garnier', 'La Roche Posay', 'Maybelline', 'Nouba', 'Oxygen Botanicals', 'Sebamed', 'Simple', 'Uncover']
    },
    {
      id: 5,
      name: 'Devices and Diagnostics',
      conditions: ['BP Monitors', 'Thermometers', 'Blood Sugar Meters', 'First Aid Kits', 'Pulse Oximeters', 'Weighing Scales'],
      brands: ['Accu-chek', 'Accufast', 'Contour', 'Fabia', 'Medisign', 'Microlife', 'On Call Plus', 'Thuasne']
    },
    {
      id: 6,
      name: 'Family Planning',
      conditions: ['Contraceptives', 'Fertility & Pregnancy', 'Gels & Lubricants', 'Multivitamins', 'Sexual Enhancement', 'Sexual Health'],
      brands: ['Contempo', 'Durex', 'Erovita', 'Fun Time', 'K-Y', 'Skins', 'Skyn', 'Suresign', 'Trust Condoms']
    },
    {
      id: 7,
      name: 'Hair Care',
      conditions: ['Cotton wool & buds', 'Hair Loss & Thinning', 'Hair Oils', 'Hair Removal', 'Hair Treatments', 'Shampoos & Conditioners', 'Styling Products'],
      brands: ['African Pride', 'Aqua Oleum', 'Aussie', 'Batiste', 'Cantu', 'Garnier', 'Head & Shoulders', 'LOreal', 'Mane N Tail', 'Nizoral', 'Palmers', 'Pantene', 'Shea Moisture', 'Tresemme', 'Vatika', 'Veet']
    },
    {
      id: 8,
      name: 'Mens',
      conditions: ['Aftershave', 'Beard Care', 'Deodorants', 'Hair Care', 'Shaving', 'Skincare'],
      brands: ['Brut', 'Bulldog', 'Dove Men', 'Gillette', 'Lynx', 'Nivea Men', 'Old Spice']
    },
    {
      id: 9,
      name: 'Mum & Baby',
      conditions: ['Baby Bath', 'Baby Food', 'Baby Health', 'Baby Skincare', 'Bottle Feeding', 'Dummies & Teethers', 'Nappies & Wipes', 'New Mum'],
      brands: ['Aptamil', 'Aveeno Baby', 'Bepanthen', 'Cerelac', 'Cow & Gate', 'Huggies', 'Johnsons Baby', 'Mustela', 'Nan', 'Pampers', 'Sebamed Baby', 'Sudocrem']
    },
    {
      id: 10,
      name: 'Personal Care',
      conditions: ['Bath & Shower', 'Deodorants', 'Feminine Care', 'Foot Care', 'Hand Care', 'Oral Care', 'Sun Care'],
      brands: ['Colgate', 'Dove', 'Listerine', 'Nivea', 'Oral-B', 'Sensodyne', 'Sure']
    },
    {
      id: 11,
      name: 'Prescription Products',
      conditions: ['Chronic Medication', 'Acute Medication'],
      brands: []
    },
    {
      id: 12,
      name: 'Travel',
      conditions: ['First Aid', 'Insect Repellent', 'Motion Sickness', 'Sun Protection', 'Travel Accessories'],
      brands: ['Jungle Formula', 'Kwells', 'Soltan', 'Stugeron']
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container flex-between">
          <div className="header-contact">
            <a href="tel:+254712345678">📞 +254 712 345 678</a>
            <a href="mailto:info@avapharmacy.co.ke">✉️ info@avapharmacy.co.ke</a>
          </div>
          <div className="header-links">
            <a href="#whatsapp">WhatsApp</a>
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>

      <nav className="header-main">
        <div className="container flex-between">
          <div className="logo-section" onClick={() => onNavigate('home')}>
            <img src={require('../assets/logo.jpg')} alt="AVA Pharmacy" className="logo" />
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}>Home</a></li>

            {/* Categories Dropdown */}
            <li className={`nav-item-with-dropdown ${selectedCategory ? 'open' : ''}`}>
              <button
                className="nav-link-dropdown"
                onMouseEnter={() => setExpandedCategory(null)}
                onClick={() => setSelectedCategory(selectedCategory ? null : categories[0].id)}
              >
                Categories
              </button>
              <div className="categories-dropdown">
                <div className="categories-list">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      className={`category-item ${expandedCategory === cat.id || selectedCategory === cat.id ? 'active' : ''}`}
                      onMouseEnter={() => setExpandedCategory(cat.id)}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <span className="cat-name">{cat.name}</span>
                      <span className="cat-chevron">›</span>
                    </button>
                  ))}
                </div>

                {(expandedCategory || selectedCategory) && (
                  <div className="mega-menu-panel">
                    <div className="mega-menu-content">
                      <div className="conditions-section">
                        <h4>{categories.find(cat => cat.id === (expandedCategory || selectedCategory))?.name} Conditions</h4>
                        <div className="conditions-columns">
                          {categories
                            .find(cat => cat.id === (expandedCategory || selectedCategory))
                            ?.conditions.map((condition, idx) => (
                              <button
                                key={idx}
                                className="condition-link"
                                onClick={() => { onNavigate('products'); setIsMenuOpen(false); setSelectedCategory(null); }}
                              >
                                {condition}
                              </button>
                            ))}
                        </div>
                      </div>
                      <div className="brands-section">
                        <h4>Brands</h4>
                        <div className="brands-list-mega">
                          {categories
                            .find(cat => cat.id === (expandedCategory || selectedCategory))
                            ?.brands.map((brand, idx) => (
                              <button
                                key={idx}
                                className="brand-link"
                                onClick={() => { onNavigate('products'); setIsMenuOpen(false); setSelectedCategory(null); }}
                              >
                                {brand}
                              </button>
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className="mega-menu-footer">
                      <div className="advisor-banner">
                        <span className="advisor-icon">💬</span>
                        <div className="advisor-text">
                          <strong>Speak to an Advisor</strong>
                          <p>Get expert advice on your health needs</p>
                        </div>
                        <button className="advisor-btn" onClick={() => { onNavigate('doctor'); setIsMenuOpen(false); }}>
                          Chat Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </li>

            <li><a href="#prescription" onClick={() => { onNavigate('prescription'); setIsMenuOpen(false); }}>Prescriptions</a></li>
            <li><a href="#about" onClick={() => { onNavigate('about'); setIsMenuOpen(false); }}>About Us</a></li>
            <li><a href="#contact" onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }}>Contact</a></li>

            {/* Health Services Dropdown */}
            <li className="nav-item-with-dropdown">
              <button className="nav-link-dropdown">
                Health Services
              </button>
              <div className="health-services-dropdown">
                <button
                  className="health-service-item"
                  onClick={() => { onNavigate('doctor'); setIsMenuOpen(false); }}
                >
                  👨‍⚕️ Doctor Consultation
                </button>
                <button
                  className="health-service-item"
                  onClick={() => { onNavigate('lab'); setIsMenuOpen(false); }}
                >
                  🧪 Lab Tests
                </button>
              </div>
            </li>
          </ul>

          <div className="header-actions">
            <div className="search-box">
              <Search size={18} />
              <input type="text" placeholder="Search products..." />
            </div>
            <button className="cart-button" onClick={() => onNavigate('cart')}>
              <ShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button className="login-button" onClick={() => onNavigate('login')}>Sign In</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
