import React, { useState } from 'react';
import AddressForm from './AddressForm';
import Payment from './Payment';
import OrderReceipt from './OrderReceipt';


const Checkout= () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState('');

  const handleAddressSubmit = (address) => {
    setAddress(address);
    setStep(2);
  };

  const handlePaymentSubmit = () => {
    setStep(3);
  };

  return (
    <div>
      {step === 1 && <AddressForm onNext={handleAddressSubmit} />}
      {step === 2 && <Payment onPayment={handlePaymentSubmit} />}
      {step === 3 && <OrderReceipt address={address} />}
    </div>
  );
};

export default Checkout;