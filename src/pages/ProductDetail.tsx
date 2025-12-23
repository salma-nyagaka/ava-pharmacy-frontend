import React, { useState } from 'react';
import { ShoppingCart, Heart, Share2, Package, Truck, Shield, Check } from 'lucide-react';
import '../styles/ProductDetail.css';

interface ProductDetailProps {
  onNavigate: (page: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onNavigate }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('30');

  const product = {
    id: 1,
    name: 'Premium Vitamin C 1000mg',
    category: 'Vitamins & Supplements',
    price: 850,
    originalPrice: 1200,
    rating: 5,
    reviews: 128,
    stock: 'In Stock',
    sku: 'VC1000-30',
    image: '💊',
    description: 'High-potency vitamin C supplement formulated for immune system support. Our premium formula delivers 1000mg of pure ascorbic acid per tablet.',
    variants: [
      { size: '30 tablets', price: 850 },
      { size: '60 tablets', price: 1500 },
      { size: '90 tablets', price: 2100 }
    ],
    benefits: [
      'Boosts immune system',
      'Antioxidant protection',
      'Supports collagen synthesis',
      'Enhances iron absorption',
      'Promotes healthy skin'
    ],
    specifications: {
      'Dosage': '1000mg per tablet',
      'Form': 'Tablets',
      'Quantity': '30 tablets',
      'Manufacturer': 'Premium Health Inc.',
      'Storage': 'Room temperature, dry place',
      'Expiry': '24 months from date of manufacture'
    },
    usageDirections: 'Take 1 tablet daily with meals or as directed by a healthcare professional.',
    warnings: 'Keep out of reach of children. If pregnant or nursing, consult healthcare provider before use.',
    requiresPrescription: false
  };

  const relatedProducts = [
    { id: 2, name: 'Vitamin D3 2000 IU', price: 750, image: '💊' },
    { id: 3, name: 'Zinc Tablets 30mg', price: 650, image: '💊' },
    { id: 4, name: 'Vitamin B Complex', price: 950, image: '💊' },
  ];

  const reviews = [
    {
      id: 1,
      author: 'Jane Wanjiru',
      rating: 5,
      date: '2 weeks ago',
      title: 'Excellent Quality!',
      text: 'Great product! I noticed improvements in my energy levels within a week of use. Very satisfied with the purchase.'
    },
    {
      id: 2,
      author: 'Peter Kipchoge',
      rating: 5,
      date: '1 month ago',
      title: 'Highly Recommended',
      text: 'This vitamin C supplement is exactly what I needed. Fast delivery and great customer service!'
    },
    {
      id: 3,
      author: 'Mary Omondi',
      rating: 4,
      date: '1.5 months ago',
      title: 'Good Value for Money',
      text: 'Good quality product at a reasonable price. Would definitely buy again.'
    },
  ];

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <div className="container">
          <a href="#" onClick={() => onNavigate('home')}>Home</a>
          <span>/</span>
          <a href="#" onClick={() => onNavigate('products')}>Products</a>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <div className="product-detail container">
        {/* Product Image & Info */}
        <div className="detail-grid">
          <div className="product-image-section">
            <div className="product-image-large">
              <span className="product-emoji-large">{product.image}</span>
            </div>
            {product.requiresPrescription && (
              <div className="prescription-notice">
                <AlertCircle size={20} />
                <p>Prescription required for this product</p>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="product-info-section">
            <div className="product-header">
              <span className="breadcrumb-category">{product.category}</span>
              <h1>{product.name}</h1>
              <div className="rating-section">
                <div className="stars-large">
                  {'★'.repeat(Math.floor(product.rating))}
                </div>
                <span className="rating-value">{product.rating} / 5</span>
                <span className="review-count">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="pricing-section">
              <span className="price-large">{product.price} KES</span>
              <span className="original-price-large">{product.originalPrice} KES</span>
              <span className="discount">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            {/* Variants */}
            <div className="variants-section">
              <h3>Package Size</h3>
              <div className="variant-buttons">
                {product.variants.map(variant => (
                  <button
                    key={variant.size}
                    className={`variant-btn ${selectedVariant === variant.size ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(variant.size)}
                  >
                    {variant.size}
                    <br />
                    <span className="variant-price">{variant.price} KES</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="stock-status-detail">
              <span className={`status ${product.stock.toLowerCase().replace(' ', '-')}`}>
                ✓ {product.stock}
              </span>
              <span className="sku">SKU: {product.sku}</span>
            </div>

            {/* Quantity & Actions */}
            <div className="quantity-actions">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="qty-buttons">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
              <button className="btn btn-primary btn-lg" onClick={() => onNavigate('cart')}>
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="btn btn-secondary-outline">
                <Heart size={20} />
              </button>
              <button className="btn btn-secondary-outline">
                <Share2 size={20} />
              </button>
            </div>

            {/* Benefits */}
            <div className="benefits-section">
              <h3>Key Benefits</h3>
              <ul className="benefits-list">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>
                    <Check size={18} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery & Returns */}
            <div className="delivery-returns">
              <div className="delivery-item">
                <Package size={24} />
                <div>
                  <h4>Fast Delivery</h4>
                  <p>Delivered in 2-3 business days</p>
                </div>
              </div>
              <div className="delivery-item">
                <Truck size={24} />
                <div>
                  <h4>Free Shipping</h4>
                  <p>On orders above KES 1,500</p>
                </div>
              </div>
              <div className="delivery-item">
                <Shield size={24} />
                <div>
                  <h4>Satisfaction Guarantee</h4>
                  <p>30-day money back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details Tabs */}
      <div className="details-tabs">
        <div className="container">
          <div className="tabs-container">
            {/* Description */}
            <section className="tab-section">
              <h2>Description</h2>
              <p>{product.description}</p>
              <h3 style={{ marginTop: 'var(--spacing-lg)' }}>How to Use</h3>
              <p>{product.usageDirections}</p>
              <h3 style={{ marginTop: 'var(--spacing-lg)' }}>Warnings & Precautions</h3>
              <p>{product.warnings}</p>
            </section>

            {/* Specifications */}
            <section className="tab-section">
              <h2>Specifications</h2>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-label">{key}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Reviews */}
            <section className="tab-section">
              <h2>Customer Reviews</h2>
              <div className="reviews-summary">
                <div className="rating-summary">
                  <h3>{product.rating}</h3>
                  <p className="stars">{'★'.repeat(Math.floor(product.rating))}</p>
                  <p className="based-on">Based on {product.reviews} reviews</p>
                </div>
              </div>
              <div className="reviews-list">
                {reviews.map(review => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="review-author">
                        <strong>{review.author}</strong>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <span className="review-stars">{'★'.repeat(review.rating)}</span>
                    </div>
                    <h4>{review.title}</h4>
                    <p>{review.text}</p>
                  </div>
                ))}
              </div>
              <button className="btn btn-outline" onClick={() => alert('Review feature coming soon!')}>
                Write a Review
              </button>
            </section>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <div className="container">
          <h2>Related Products</h2>
          <div className="related-grid">
            {relatedProducts.map(product => (
              <div key={product.id} className="related-card" onClick={() => onNavigate('product-detail')}>
                <div className="related-image">{product.image}</div>
                <h4>{product.name}</h4>
                <p className="related-price">KES {product.price}</p>
                <button className="btn btn-primary btn-full">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AlertCircle = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default ProductDetail;
