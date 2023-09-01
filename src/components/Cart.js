import "./Cart.css";
import { Link } from 'react-router-dom';

//calculate the total price of all products inside the cart
function Cart({ cart, onDelete }) {
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.replace(/,/g, "")), 0)

  console.log(cart)
  
    return (
      <div className="car">
        <h1>My Cart</h1>

        {cart.length === 0 ? (
          <p >Cart is empty continue shopping.</p> 
          ): cart.map((i)=> {
          return (
            <div key={i.id}>
              <table>
              <thead>
                <tr>
                  <th>Selected Item</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{<img id="tableimg" src={i.image} alt="" />}</td>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>1</td>
                  <td><button id="remove" onClick={()=> onDelete(i.id)}>Remove Item</button></td>
                </tr>
                
              </tbody>
            </table>              
            </div>       
        )})}
        <div className="amount">
          <div>
            <tr>Total Amount</tr>
            <tr id="total">KSH {totalPrice.toFixed(2)}</tr>
          </div>
          <Link to="/checkout">
  <button>Proceed to Checkout</button>
</Link>

          
        </div>
  
        
      </div>
    );
  }
  
  export default Cart;
  