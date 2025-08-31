import React from 'react';

function formatMaskedCardNumber(number) {
  const visible = number.slice(0, 8);
  const masked = '*'.repeat(8);
  const combined = visible + masked;
  return combined.match(/.{1,4}/g)?.join('-') || '';
}

function CardList({ cards }) {
  if (cards.length === 0) return null;

  return (
    <div className="my-3">
      {cards.map((card, idx) => (
        <div key={idx} className="card shadow-sm mb-3">
          {card.image && (
            <img
              src={card.image}
              alt="카드 이미지"
              className="card-img-top"
              style={{ height: 150, objectFit: 'cover' }}
            />
          )}
          <div className="card-body">
            <h6 className="card-title">
              {formatMaskedCardNumber(card.number)}
            </h6>
            <p className="card-text d-flex justify-content-between">
              <span>{card.owner}</span>
              <span>{card.expiry}</span>
            </p>
            <button className="btn btn-warning w-100 fw-bold">이 카드로 결제하기</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
