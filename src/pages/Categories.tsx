import React, { useState } from 'react';
import '../styles/Categories.css';

interface CategoriesProps {
  onNavigate: (page: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const categories = [
    {
      id: 1,
      name: 'Healthcare',
      conditions: ['Aches & Pains', 'Allergy & Hayfever', 'Anti Infectives', 'Bath & Bodycare', 'Beauty', 'Bites & Stings', 'Bones & Joints', 'Cold, Flu and Cough', 'Eye Care', 'Equipment & Diagnostics', 'Family Planning', 'Fertility & Pregnancy', 'First Aid & Bandages']
    },
    {
      id: 2,
      name: 'Vitamins & Supplements',
      conditions: ['Vitamin A', 'Vitamin B Complex', 'Vitamin C', 'Vitamin D', 'Vitamin E', 'Multivitamins', 'Minerals', 'Immune Support', 'Energy Supplements', 'Bone Health', 'Joint Support', 'Skin Health']
    },
    {
      id: 3,
      name: 'Skin Care',
      conditions: ['Acne', 'Anti-Aging', 'Dry Skin', 'Eczema', 'Moisturizers', 'Sunscreen', 'Sensitive Skin', 'Oily Skin', 'Serums', 'Face Masks', 'Cleansers', 'Toners']
    },
    {
      id: 4,
      name: 'Beauty & Make Up',
      conditions: ['Face Care', 'Skincare', 'Hair Care', 'Body Care', 'Lips', 'Eyes', 'Face Makeup', 'Nails', 'Fragrances', 'Deodorants', 'Razors', 'Shaving']
    },
    {
      id: 5,
      name: 'Devices and Diagnostics',
      conditions: ['BP Monitors', 'Thermometers', 'Blood Sugar Meters', 'First Aid Kits', 'Pulse Oximeters', 'Weighing Scales', 'Pregnancy Tests', 'Ovulation Tests', 'Glucose Test Strips', 'Lancets', 'Blood Pressure Cuffs', 'Digital Scales']
    },
    {
      id: 6,
      name: 'Family Planning',
      conditions: ['Contraceptives', 'Fertility', 'Sexual Health', 'Pregnancy Care', 'Condoms', 'Birth Control Pills', 'Ovulation Kits', 'Lubricants', 'Pregnancy Tests', 'Prenatal Vitamins', 'Intimate Care', 'Sexual Wellness']
    },
    {
      id: 7,
      name: 'Hair Care',
      conditions: ['Hair Care', 'Masks & Sanitisers', 'Mens', 'Mum & Baby', 'Oral Care', 'Personal Care', 'Sexual Health', 'Skin Treatments', 'Stop Smoking', 'Travel & Holiday', 'Womens Health']
    },
    {
      id: 8,
      name: 'Mum & Baby',
      conditions: ['Baby Care', 'Mother Care', 'Baby Formula', 'Diapers', 'Baby Wipes', 'Nursing Essentials', 'Postpartum Care', 'Baby Bath', 'Baby Lotion', 'Diaper Rash Cream', 'Teething Products', 'Baby Monitors']
    }
  ];

  const brands = [
    'Aqua Oleum', 'Shea Moisture', 'Benylin', 'Sheth Naturals', 'BioFreeze', 'Brustan', 'Deep Heat', 'Deep Freeze',
    'Denk', 'Efferalgan', 'Gaviscon', 'Imodium', 'Nizoral', 'Panadol', 'Saru Organics', 'Cetaphil', 'Eucerin',
    'Neutrogena', 'La Roche Posay', 'Aveeno', 'Dove', 'Nivea', 'Johnson & Johnson'
  ];

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // Sample products data
  const sampleProducts = [
    { id: 1, name: 'Panadol Extra', price: 'KES 250', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop' },
    { id: 2, name: 'Gaviscon Liquid 300ml', price: 'KES 890', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop' },
    { id: 3, name: 'Imodium Capsules', price: 'KES 450', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop' },
    { id: 4, name: 'Deep Heat Spray', price: 'KES 720', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop' },
    { id: 5, name: 'Benylin Cough Syrup', price: 'KES 380', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop' },
    { id: 6, name: 'Nizoral Shampoo', price: 'KES 950', image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop' },
    { id: 7, name: 'Brustan Tablets', price: 'KES 180', image: 'https://images.unsplash.com/photo-1550572017-4fade99d4c8e?w=400&h=400&fit=crop' },
    { id: 8, name: 'Efferalgan 500mg', price: 'KES 220', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop' },
  ];

  return (
    <div className="categories-page">
      <div className="container categories-wrapper">
        {/* Left Sidebar - All Categories with Accordion */}
        <aside className="categories-left">
          <h3>All Products</h3>
          <div className="categories-list">
            {categories.map(cat => (
              <div key={cat.id} className="category-accordion-item">
                <button
                  className={`category-item ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                >
                  {cat.name}
                  <span className="chevron">{selectedCategory === cat.id ? '▼' : '›'}</span>
                </button>
                {selectedCategory === cat.id && (
                  <div className="category-dropdown">
                    {cat.conditions.map((condition, idx) => (
                      <button
                        key={idx}
                        className="condition-item"
                        onClick={() => onNavigate('products')}
                      >
                        {condition}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Middle Section - Product Catalog */}
        <div className="products-catalog">
          <h2>All Products</h2>
          <div className="products-grid">
            {sampleProducts.map(product => (
              <div key={product.id} className="product-card" onClick={() => onNavigate('product-detail')}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  <div className="product-price">{product.price}</div>
                  <button className="product-add-btn" onClick={(e) => { e.stopPropagation(); }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Brands */}
        <aside className="categories-right">
          <h3>Brands</h3>
          <div className="brands-list">
            {brands.map(brand => (
              <label key={brand} className="brand-item">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Categories;
