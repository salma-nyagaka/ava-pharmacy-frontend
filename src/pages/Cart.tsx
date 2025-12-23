import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, Truck, Shield, ArrowRight } from 'lucide-react';
import '../styles/Cart.css';

interface CartProps {
  onNavigate: (page: string) => void;
}

const Cart: React.FC<CartProps> = ({ onNavigate }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Vitamin C 1000mg',
      price: 850,
      quantity: 1,
      image: '💊',
      category: 'Vitamins'
    },
    {
      id: 2,
      name: 'Paracetamol 500mg Tablets',
      price: 350,
      quantity: 2,
      image: '💊',
      category: 'Pain Relief'
    },
    {
      id: 3,
      name: 'Sunscreen SPF 50',
      price: 950,
      quantity: 1,
      image: '🧴',
      category: 'Skin Care'
    },
  ]);

  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('delivery');
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryMethod === 'pickup' ? 0 : (subtotal > 1500 ? 0 : 200);
  const tax = Math.round(subtotal * 0.16); // 16% VAT
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <div className="container cart-container">
          {/* Cart Items */}
          <div className="cart-items-section">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <span>{item.image}</span>
                  </div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-category">{item.category}</p>
                    <p className="item-price">KES {item.price}</p>
                  </div>
                  <div className="item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus size={18} />
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
                    />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="item-total">
                    <span>KES {item.price * item.quantity}</span>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                    title="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Delivery Method */}
            <div className="delivery-section">
              <h3>Delivery Method</h3>
              <div className="delivery-options">
                <label className="delivery-option">
                  <input
                    type="radio"
                    value="pickup"
                    checked={deliveryMethod === 'pickup'}
                    onChange={(e) => setDeliveryMethod(e.target.value as 'pickup' | 'delivery')}
                  />
                  <div className="option-content">
                    <h4>Pickup at Branch</h4>
                    <p>Pick up your order at our nearest branch</p>
                    <span className="fee">Free</span>
                  </div>
                </label>
                <label className="delivery-option">
                  <input
                    type="radio"
                    value="delivery"
                    checked={deliveryMethod === 'delivery'}
                    onChange={(e) => setDeliveryMethod(e.target.value as 'pickup' | 'delivery')}
                  />
                  <div className="option-content">
                    <h4>Home Delivery</h4>
                    <p>Get it delivered to your doorstep in 2-3 days</p>
                    <span className={`fee ${subtotal > 1500 ? 'free' : 'paid'}`}>
                      {subtotal > 1500 ? 'Free' : 'KES 200'}
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Promo Code */}
            <div className="promo-section">
              <h3>Promo Code</h3>
              <div className="promo-input">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="btn btn-secondary btn-sm">Apply</button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="order-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>KES {subtotal}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>
                  {deliveryFee === 0 ? (
                    <>
                      KES <span className="crossed">200</span> <span className="free">FREE</span>
                    </>
                  ) : (
                    `KES ${deliveryFee}`
                  )}
                </span>
              </div>
              <div className="summary-row">
                <span>Tax (16%)</span>
                <span>KES {tax}</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-row total">
                <span>Total</span>
                <span>KES {total}</span>
              </div>

              <button className="btn btn-primary btn-lg btn-full" onClick={() => onNavigate('checkout')}>
                Proceed to Checkout
                <ArrowRight size={18} />
              </button>

              <button className="btn btn-outline btn-full" onClick={() => onNavigate('products')}>
                Continue Shopping
              </button>

              {/* Benefits */}
              <div className="benefits">
                <div className="benefit">
                  <Truck size={20} />
                  <div>
                    <p><strong>Free Delivery</strong></p>
                    <small>On orders above KES 1,500</small>
                  </div>
                </div>
                <div className="benefit">
                  <Shield size={20} />
                  <div>
                    <p><strong>Secure Payment</strong></p>
                    <small>100% safe and encrypted</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="trust-section">
              <h4>We're Trusted By</h4>
              <div className="trust-items">
                <div className="trust-item">✓ Licensed Pharmacy</div>
                <div className="trust-item">✓ Verified Doctors</div>
                <div className="trust-item">✓ Secure Payments</div>
                <div className="trust-item">✓ 30-Day Guarantee</div>
              </div>
            </div>
          </aside>
        </div>
      ) : (
        <div className="empty-cart">
          <div className="container">
            <ShoppingBag size={80} color="var(--primary)" />
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
            <button className="btn btn-primary" onClick={() => onNavigate('products')}>
              Browse Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
