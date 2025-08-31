import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import CardModal from './CardModal';

function ProductCard({ product }) {
const { addToCart } = useContext(CartContext); //

  const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleBuyNow = () => {
      navigate('/register-card', { state: { product } });  // 상품 정보도 함께 전달
    };

  return (
    <div className="card h-100 shadow-sm">
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <img
          src={product.image}
          className="card-img-top img-fluid"
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Link>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <p className="card-text fw-bold">{product.price.toLocaleString()}원</p>

        <div className="d-flex gap-2 mt-auto">
          <button
            className="btn btn-dark flex-fill"
            onClick={() => addToCart(product)}
          >
            담기
          </button>
          <button
            className="btn flex-fill"
            style={{ backgroundColor: '#FFEB3B', fontWeight: 600 }}
            onClick={handleBuyNow}
          >
            구매
          </button>
        </div>
      </div>
      {showModal && <CardModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default ProductCard;
