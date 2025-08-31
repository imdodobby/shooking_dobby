// intern/CardModal.jsx
import React, { useState, useEffect } from 'react';
import './CardModal.css';

function CardModal({ onClose }) {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('registeredCard');
    if (saved) {
      setCard(JSON.parse(saved));
    }
  }, []);

  const goToRegister = () => {
    onClose(); // 모달 닫고 라우팅
    window.location.href = '/register-card';
  };

  return (
    <div className="card-modal-overlay">
      <div className="card-modal">
        <div className="modal-header">
          <span className="fw-bold">보유카드</span>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body text-center">
          {!card ? (
            <>
              <p className="text-muted mb-3">새로운 카드를 등록해주세요.</p>
              <button className="card-register-btn" onClick={goToRegister}>
                <div className="plus-box">+</div>
              </button>
            </>
          ) : (
            <>
              <div className="card p-3 mb-3">
                <p className="mb-1 fw-bold">{card.number}</p>
                <p className="mb-0">{card.owner}</p>
                <p className="mb-0">{card.expiry}</p>
              </div>
              <button className="btn btn-warning w-100">이 카드로 결제하기</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardModal;
