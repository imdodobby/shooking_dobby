import React from 'react';

function CardListPage() {
  const card = JSON.parse(localStorage.getItem('registeredCard'));

  if (!card) {
    return (
      <div className="container text-center mt-5">
        <h5>새로운 카드를 등록해주세요.</h5>
        <button
          className="btn btn-outline-secondary mt-3"
          onClick={() => (window.location.href = '/register-card')}
        >
          + 카드 등록하기
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="text-center">
        <div className="card p-4 shadow-sm" style={{ maxWidth: '300px', margin: '0 auto' }}>
          <h5 className="fw-bold mb-3">보유카드</h5>
          <div className="bg-dark text-white p-4 rounded mb-3">
            <p>{card.number}</p>
            <p>{card.owner}</p>
            <p>{card.expiry}</p>
          </div>
          <button className="btn btn-warning">이 카드로 결제하기</button>
        </div>
      </div>
    </div>
  );
}

export default CardListPage;
