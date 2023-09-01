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
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleChange}
        />
        <button type="submit">Next</button>
      </form>
    </div>
    </div>
  );
}

// Step 2: Payment
function Payment({ onNext, addressData }) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext('confirmation', { ...addressData, paymentData }); // Proceed to the Confirmation step
  };

  return (
    <div>
      <h2>Step 2: Enter Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentData.cardNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date"
          value={paymentData.expiryDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentData.cvv}
          onChange={handleChange}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

// Step 3: Order Confirmation
function OrderConfirmation({ addressData, paymentData }) {
  return (
    <div>
      <h2>Step 3: Order Confirmation</h2>
      <div>
        <p>Delivery Address:</p>
        <p>{addressData.name}</p>
        <p>{addressData.address}</p>
        <p>{addressData.city}</p>
        <p>{addressData.postalCode}</p>
      </div>
      <div>
        <p>Payment Details:</p>
        <p>{paymentData.cardNumber}</p>
        <p>{paymentData.expiryDate}</p>
        <p>{paymentData.cvv}</p>
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
