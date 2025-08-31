import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

function Header() {
  const { cartItems } = useContext(CartContext);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">🛍️ Shooking</Link>

        <div className="d-flex">
          <Link to="/cart" className="btn btn-outline-light me-2">
            장바구니 <span className="badge bg-light text-dark">{totalCount}</span>
          </Link>
          <span className="navbar-text text-white">
            총 가격: <strong>{totalPrice}원</strong>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
