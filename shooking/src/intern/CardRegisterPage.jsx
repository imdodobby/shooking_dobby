import React, { useState } from 'react';
import CardRegisterForm from './CardRegisterForm';
import CardList from './CardList';

function CardRegisterPage() {
  const [cards, setCards] = useState(() => {
    // localStorage에서 카드 불러오기
    const saved = localStorage.getItem('registeredCards');
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdding, setIsAdding] = useState(false);

  const handleRegister = (cardData) => {
    const updatedCards = [...cards, cardData];
    setCards(updatedCards);
    localStorage.setItem('registeredCards', JSON.stringify(updatedCards));
    setIsAdding(false);
  };

  return (
    <div className="p-4" style={{ maxWidth: 400, margin: 'auto' }}>
      <h5 className="fw-bold">카드 추가</h5>

      <CardList cards={cards} />

      {!isAdding && (
        <div className="text-center mt-4">
          <button
            className="btn btn-light border w-100"
            onClick={() => setIsAdding(true)}
          >
            <div style={{ fontSize: '2rem' }}>＋</div>
            <div>새로운 카드를 등록해주세요</div>
          </button>
        </div>
      )}

      {isAdding && <CardRegisterForm onRegister={handleRegister} />}
    </div>
  );
}

export default CardRegisterPage;
