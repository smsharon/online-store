function Cart({ cartItems, removeFromCart }) {
    const getTotalCost = () => {
      return cartItems.reduce((total, item) => total + item.price, 0);
    };
  
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Cost: ${getTotalCost()}</p>
      </div>
    );
  }
  
  export default Cart;
  