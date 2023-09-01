import React, { useState } from 'react';

const AddressForm = ({ onNext }) => {
  const [address, setAddress] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNext = () => {
    onNext(address);
  };

  return (
    <div>
      <h2>Enter Delivery Address</h2>
      <textarea
        placeholder="Enter your delivery address..."
        value={address}
        onChange={handleAddressChange}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AddressForm;