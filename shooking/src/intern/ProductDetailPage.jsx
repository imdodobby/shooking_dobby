import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';

function ProductDetailPage() {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: '운동화', price: 50000, image: process.env.PUBLIC_URL + '/images/sh.jpeg', description: '편한 운동화입니다.' },
    { id: 2, name: '샌들', price: 30000, image: process.env.PUBLIC_URL + '/images/san.jpeg', description: '여름에 신기 좋은 시원한 샌들입니다.' },
  ];

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2 className="text-center mt-5">상품을 찾을 수 없습니다.</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">가격: {product.price}원</p>
          <p className="card-text">{product.description}</p>
          <button
            className="btn btn-primary w-100"
            onClick={() => addToCart(product)}
          >
            장바구니에 담기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
