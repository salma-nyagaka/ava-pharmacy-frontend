import React, { useState } from 'react';
import { CreditCard, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/Checkout.css';

interface CheckoutProps {
  onNavigate: (page: string) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mpesa' | null>(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      onNavigate('home');
    }, 3000);
  };

  const orderData = {
    items: 3,
    subtotal: 3150,
    delivery: 0,
    tax: 504,
    total: 3654,
    orderNumber: 'AVA-2025-' + Math.random().toString(36).substring(7).toUpperCase()
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <div className="container flex-center">
          <div className="success-content">
            <CheckCircle size={80} color="var(--success)" />
            <h2>Order Placed Successfully!</h2>
            <p>Order Number: <strong>{orderData.orderNumber}</strong></p>
            <p className="timeline">You'll receive tracking updates via SMS and email</p>
            <p className="delivery-info">Expected delivery: 2-3 business days</p>
            <button className="btn btn-primary" onClick={() => onNavigate('home')}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="container">
          <h1>Checkout</h1>
        </div>
      </div>

      <div className="container checkout-container">
        {/* Steps */}
        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Shipping</div>
          </div>
          <div className="step-connector" />
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Payment</div>
          </div>
          <div className="step-connector" />
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Confirm</div>
          </div>
        </div>

        <div className="checkout-content">
          {/* Main Content */}
          <div className="checkout-main">
            {step === 1 && (
              <div className="checkout-step">
                <h2>Shipping Address</h2>
                <form className="checkout-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                      <label>Phone *</label>
                      <input type="tel" placeholder="+254 712 345 678" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Street Address *</label>
                    <input type="text" placeholder="123 Health Street" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>City *</label>
                      <input type="text" placeholder="Nairobi" required />
                    </div>
                    <div className="form-group">
                      <label>Postal Code *</label>
                      <input type="text" placeholder="00100" required />
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary" onClick={() => setStep(2)}>
                    Continue to Payment
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="checkout-step">
                <h2>Payment Method</h2>
                <div className="payment-methods">
                  <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'mpesa')}
                    />
                    <div className="payment-content">
                      <CreditCard size={24} />
                      <div>
                        <h4>Credit/Debit Card</h4>
                        <p>Visa, Mastercard, or American Express</p>
                      </div>
                    </div>
                  </label>

                  <label className={`payment-option ${paymentMethod === 'mpesa' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      value="mpesa"
                      checked={paymentMethod === 'mpesa'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'mpesa')}
                    />
                    <div className="payment-content">
                      <Smartphone size={24} />
                      <div>
                        <h4>M-Pesa</h4>
                        <p>Mobile money payment</p>
                      </div>
                    </div>
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <form className="payment-form">
                    <div className="form-group">
                      <label>Card Number *</label>
                      <input type="text" placeholder="1234 5678 9012 3456" maxLength={19} required />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Expiry Date *</label>
                        <input type="text" placeholder="MM/YY" required />
                      </div>
                      <div className="form-group">
                        <label>CVV *</label>
                        <input type="text" placeholder="123" maxLength={3} required />
                      </div>
                    </div>
                  </form>
                )}

                {paymentMethod === 'mpesa' && (
                  <div className="mpesa-info">
                    <p>You'll be prompted to enter your M-Pesa PIN to complete the payment</p>
                  </div>
                )}

                <div className="form-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setStep(3)}
                    disabled={!paymentMethod}
                  >
                    Review Order
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="checkout-step">
                <h2>Review Your Order</h2>
                <div className="order-review">
                  <div className="review-section">
                    <h4>Shipping Address</h4>
                    <p>John Doe<br />123 Health Street<br />Nairobi, 00100<br />+254 712 345 678</p>
                  </div>
                  <div className="review-section">
                    <h4>Payment Method</h4>
                    <p>{paymentMethod === 'card' ? 'Credit Card (****3456)' : 'M-Pesa'}</p>
                  </div>
                  <div className="review-section">
                    <h4>Order Items</h4>
                    <ul className="review-items">
                      <li>Premium Vitamin C 1000mg x1 <span>KES 850</span></li>
                      <li>Paracetamol 500mg Tablets x2 <span>KES 700</span></li>
                      <li>Sunscreen SPF 50 x1 <span>KES 950</span></li>
                    </ul>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setStep(2)}>
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <aside className="order-summary-checkout">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-items">
                <div className="summary-item">
                  <span>Subtotal ({orderData.items} items)</span>
                  <span>KES {orderData.subtotal}</span>
                </div>
                <div className="summary-item">
                  <span>Delivery</span>
                  <span className="free">FREE</span>
                </div>
                <div className="summary-item">
                  <span>Tax (16%)</span>
                  <span>KES {orderData.tax}</span>
                </div>
              </div>
              <div className="summary-divider" />
              <div className="summary-total">
                <span>Total</span>
                <span>KES {orderData.total}</span>
              </div>

              <div className="security-badges">
                <div className="badge">🔒 Secure Payment</div>
                <div className="badge">✓ 30-Day Guarantee</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
