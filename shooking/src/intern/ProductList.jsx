import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const products = [
    { id: 1, name: '운동화', price: 50000, image: process.env.PUBLIC_URL + '/images/sh.jpeg'
, description: '편하고 가벼운 운동화입니다.' },
    { id: 2, name: '샌들', price: 30000, image: process.env.PUBLIC_URL + '/images/san.jpeg', description: '여름에 신기 좋은 시원한 샌들입니다.' },
    // 추가 상품 필요시 더 작성
  ];

  return (
    <div className="container mt-4">
      <div className="row g-3">
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
