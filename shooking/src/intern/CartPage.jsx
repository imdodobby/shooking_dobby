import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';


function CartPage() {
    const navigate = useNavigate();
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-5">🛒 장바구니가 비어있습니다.</h2>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4"><i className="bi bi-cart4"></i> 장바구니</h2>

      {cartItems.map(item => (
        <div key={item.id} className="card mb-3 shadow-sm">
          <div className="row g-0 align-items-center">
            <div className="col-md-2 text-center">
              <img src={item.image} alt={item.name} className="img-fluid rounded-start" style={{ maxHeight: '100px' }} />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">가격: {item.price.toLocaleString()}원</p>
                <p className="card-text">수량: {item.quantity}</p>
                <p className="card-text fw-bold">합계: {(item.price * item.quantity).toLocaleString()}원</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <button className="btn btn-success m-1" onClick={() => increaseQuantity(item.id)}>+</button>
              <button className="btn btn-warning m-1" onClick={() => decreaseQuantity(item.id)}>-</button>
              <button className="btn btn-danger m-1" onClick={() => removeFromCart(item.id)}>삭제</button>
            </div>
          </div>
        </div>
      ))}

      <div className="text-end mt-4">
        <h3>총 가격: <span className="text-primary">{totalPrice.toLocaleString()}원</span></h3>
        <button
          className="btn btn-warning mt-3 fw-bold"
          onClick={() => navigate('/register-card')}
        >
          결제하기
        </button>
      </div>
    </div>
  );
}

export default CartPage;
