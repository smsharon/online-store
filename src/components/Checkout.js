import React, { useState } from 'react';
import "./Checkout.css";

// Step 1: Address Input
function AddressInput({ onNext }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext('payment', formData); // Proceed to the Payment step
  };

  return (
    <div className='checkout-container'>
        
    <div className="checkout-form">
      <h2>Step 1: Enter Your Address</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
    </div>
  );
}

// Step 2: Payment
function Payment({ onNext, addressData }) {
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext('confirmation', { ...addressData, paymentMethod, paymentDetails });
  };

  return (
    <div className="checkout-step payment">
      <h2>Step 2: Select Payment Method</h2>
      <div className="payment-method">
        <label className="payment-label">
          <input
            type="radio"
            name="paymentMethod"
            value="mpesa"
            checked={paymentMethod === 'mpesa'}
            onChange={() => handlePaymentMethodChange('mpesa')}
          />
          M-Pesa
        </label>
        <label className="payment-label">
          <input
            type="radio"
            name="paymentMethod"
            value="mastercard"
            checked={paymentMethod === 'mastercard'}
            onChange={() => handlePaymentMethodChange('mastercard')}
          />
          Mastercard
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        {paymentMethod === "mpesa" && (
          <div className="payment-details"> 
            <label htmlFor="mpesaNumber">M-Pesa Number:</label>
            <input
              type="text"
              id="mpesaNumber"
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
              required
            />
          </div>
        )}
        {paymentMethod === "mastercard" && (
          <div className="payment-details">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

// Step 3: Order Confirmation
function OrderConfirmation({ addressData, paymentData }) {
  const { paymentMethod, paymentDetails } = paymentData;
  return (
    <div className="order-confirmation">
      <h2 className="confirmation-title">Step 3: Order Confirmation</h2>
      <div className="confirmation-section">
      <div className="address-details">
        <p style={{fontSize: '24px'}}>Delivery Address:</p>
        <p>{addressData.name}</p>
        <p>{addressData.address}</p>
        <p>{addressData.city}</p>
        <p>{addressData.postalCode}</p>
      </div>
      <div className="payment-details">
        <p style={{fontSize: '24px'}}>Payment Details:</p>
        {paymentMethod === 'mpesa' && (
          
            <p>M-Pesa Number: {paymentDetails}</p>
          
        )}
        {paymentMethod === 'mastercard' && (
          
            <p>Card Number: {paymentDetails}</p>
            
          
        )}
      </div>
      </div>
      <button>Place Order</button>
    </div>
  );
}

function Checkout() {
  const [step, setStep] = useState('address');
  const [addressData, setAddressData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const handleStepChange = (nextStep, data) => {
    setStep(nextStep);
    if (data) {
      if (nextStep === 'payment') {
        setAddressData(data);
      } else if (nextStep === 'confirmation') {
        setPaymentData(data);
      }
    }
  };

  return (
    <div className="checkout-container">
        <div className={`checkout-step ${step}`}>
      {step === 'address' && <AddressInput onNext={handleStepChange} />}
      {step === 'payment' && (
        <Payment onNext={handleStepChange} addressData={addressData} />
      )}
      {step === 'confirmation' && (
       <OrderConfirmation addressData={addressData} paymentData={paymentData} />
      
     
   )}
      </div>
    </div>
  );
}
export default Checkout;