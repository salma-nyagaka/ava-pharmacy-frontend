import React, { useState } from 'react';
import { ShoppingBag, Filter, X } from 'lucide-react';
import '../styles/Products.css';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'Vitamins', 'Pain Relief', 'Cold & Flu', 'Skin Care', 'Digestive'];

  const products = [
    {
      id: 1,
      name: 'Premium Vitamin C 1000mg',
      category: 'Vitamins',
      price: 850,
      originalPrice: 1200,
      rating: 5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: false
    },
    {
      id: 2,
      name: 'Paracetamol 500mg Tablets',
      category: 'Pain Relief',
      price: 350,
      originalPrice: 500,
      rating: 4.5,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: false
    },
    {
      id: 3,
      name: 'Cough Syrup 200ml',
      category: 'Cold & Flu',
      price: 450,
      originalPrice: 600,
      rating: 4,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop',
      stock: 'Low Stock',
      requiresPrescription: false
    },
    {
      id: 4,
      name: 'Vitamin D3 2000 IU',
      category: 'Vitamins',
      price: 750,
      originalPrice: 950,
      rating: 5,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: false
    },
    {
      id: 5,
      name: 'Antibiotic Cream 30g',
      category: 'Skin Care',
      price: 280,
      originalPrice: 400,
      rating: 4.5,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: true
    },
    {
      id: 6,
      name: 'Probiotic Supplement',
      category: 'Digestive',
      price: 1200,
      originalPrice: 1500,
      rating: 5,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1550572017-4fade99d4c8e?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: false
    },
    {
      id: 7,
      name: 'Ibuprofen 400mg Tablets',
      category: 'Pain Relief',
      price: 420,
      originalPrice: 600,
      rating: 4,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: false
    },
    {
      id: 8,
      name: 'Zinc Tablets 30mg',
      category: 'Vitamins',
      price: 650,
      originalPrice: 850,
      rating: 4.5,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: false
    },
    {
      id: 9,
      name: 'Allergy Relief Tablets',
      category: 'Cold & Flu',
      price: 380,
      originalPrice: 550,
      rating: 4,
      reviews: 64,
      image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: false
    },
    {
      id: 10,
      name: 'Sunscreen SPF 50',
      category: 'Skin Care',
      price: 950,
      originalPrice: 1300,
      rating: 5,
      reviews: 176,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: false
    },
    {
      id: 11,
      name: 'Digestive Enzyme Capsules',
      category: 'Digestive',
      price: 890,
      originalPrice: 1100,
      rating: 4.5,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1526791276879-f861b9ca9ade?w=400&h=400&fit=crop',
      stock: 'Low Stock',
      requiresPrescription: false
    },
    {
      id: 12,
      name: 'Multivitamin Daily',
      category: 'Vitamins',
      price: 1100,
      originalPrice: 1400,
      rating: 5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop',
      stock: 'In Stock',
      requiresPrescription: false
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Browse our wide selection of quality medicines and health products</p>
        </div>
      </div>

      <div className="products-container container">
        {/* Filters Sidebar */}
        <aside className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
          <div className="filters-header">
            <h3>Filters</h3>
            <button className="close-filters" onClick={() => setShowFilters(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h4>Category</h4>
            <div className="filter-options">
              {categories.map(category => (
                <label key={category} className="filter-label">
                  <input
                    type="radio"
                    name="category"
                    value={category.toLowerCase()}
                    checked={selectedCategory === category.toLowerCase()}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="price-filter">
              <div className="price-inputs">
                <input
                  type="number"
                  min="0"
                  max="5000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  placeholder="Min"
                />
                <span>—</span>
                <input
                  type="number"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  placeholder="Max"
                />
              </div>
              <div className="price-slider">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                />
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          <button
            className="btn btn-outline"
            onClick={() => {
              setSelectedCategory('all');
              setPriceRange([0, 5000]);
            }}
          >
            Clear Filters
          </button>
        </aside>

        {/* Products List */}
        <div className="products-main">
          {/* Toolbar */}
          <div className="products-toolbar">
            <button className="filter-toggle" onClick={() => setShowFilters(true)}>
              <Filter size={20} /> Filters
            </button>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <span className="product-count">{sortedProducts.length} products found</span>
          </div>

          {/* Products Grid */}
          <div className="products-list">
            {sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => onNavigate('product-detail')}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {product.requiresPrescription && (
                      <span className="prescription-badge">Rx Required</span>
                    )}
                    {product.originalPrice > product.price && (
                      <span className="discount-badge">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>

                  <div className="product-details">
                    <h4>{product.name}</h4>
                    <p className="product-category">{product.category}</p>

                    <div className="product-rating">
                      <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
                      <span className="rating-text">({product.reviews})</span>
                    </div>

                    <div className="stock-status">
                      <span className={`stock-indicator ${product.stock.toLowerCase().replace(' ', '-')}`}>
                        {product.stock}
                      </span>
                    </div>

                    <div className="product-footer">
                      <div className="pricing">
                        <span className="price">KES {product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="original-price">KES {product.originalPrice}</span>
                        )}
                      </div>
                      <button className="add-btn" onClick={() => onNavigate('product-detail')}>
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
                <button className="btn btn-primary" onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange([0, 5000]);
                }}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
