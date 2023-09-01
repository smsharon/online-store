import React from 'react';

const OrderReceipt = ({ address }) => {
  return (
    <div>
      <h2>Order Receipt</h2>
      <p>Thank you for your purchase!</p>
      <p>Delivery Address: {address}</p>
      <p>Order Total: $XXX.XX</p>
      <p>Order ID: XXXXXXXX</p>
    </div>
  );
};

export default OrderReceipt;