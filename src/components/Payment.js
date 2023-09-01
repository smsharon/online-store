import React, { useState } from 'react';

const Payment = ({ onPayment }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    onPayment();
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={paymentInfo.cardNumber}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="expiration"
        placeholder="Expiration Date"
        value={paymentInfo.expiration}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={paymentInfo.cvv}
        onChange={handleInputChange}
      />
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default Payment;
