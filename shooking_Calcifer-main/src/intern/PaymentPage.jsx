// intern/PaymentPage.jsx
import React, { useState } from 'react';
import CardRegisterForm from './CardRegisterForm';

function PaymentPage() {
  const [hasCard, setHasCard] = useState(false); // 카드 등록 여부

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">💳 결제하기</h2>
      {hasCard ? (
        <div className="text-center">
          <img src="/images/card_preview.png" alt="등록된 카드" style={{ width: '300px' }} />
          <button className="btn btn-warning mt-3">이 카드로 결제하기</button>
        </div>
      ) : (
        <CardRegisterForm onRegister={() => setHasCard(true)} />
      )}
    </div>
  );
}

export default PaymentPage;
