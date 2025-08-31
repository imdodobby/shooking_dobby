import React, { useState } from 'react';

function CardRegisterForm({ onRegister }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [owner, setOwner] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState(['', '']);
  const [imageUrl, setImageUrl] = useState(null);
  const [rawCardNumber, setRawCardNumber] = useState('');


  // 카드 번호 입력 처리
  const handleCardNumberChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '');
    if (digits.length <= 16) {
      setRawCardNumber(digits);
    }
  };




   const maskCardNumber = (number) => {
     const visible = number.slice(0, 8);
     const masked = number.length > 8 ? '*'.repeat(number.length - 8) : '';
     const combined = visible + masked;

     // 4자리마다 하이픈 삽입
     return combined
       .match(/.{1,4}/g) // 4글자씩 분할
       ?.join('-') || '';
   };



    const formatCardNumber = (digits) => {
      let result = '';
      for (let i = 0; i < digits.length; i++) {
        const shouldMask = i >= 8;
        result += shouldMask ? '*' : digits[i];

        if ((i + 1) % 4 === 0 && i !== digits.length - 1) {
          result += '-';
        }
      }
      return result;
    };

  // 만료일 입력 처리 (MM/YY 자동 포맷)
  const handleExpiryChange = (e) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 4); // 숫자만
    if (val.length > 2) {
      val = val.slice(0, 2) + '/' + val.slice(2);
    }
    setExpiry(val);
  };

  // 소유자 이름 (한글 + 영어만)
  const handleOwnerChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z가-힣\s]/g, '');
    setOwner(value.slice(0, 30));
  };

  // CVC 코드 (3자리 숫자)
  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvc(value);
  };

  // 비밀번호 앞 2자리 숫자
  const handlePasswordChange = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(0, 1);
    const updated = [...password];
    updated[index] = digit;
    setPassword(updated);
  };

  // 이미지 업로드 + base64로 저장
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result); // base64 문자열 저장
    };
    reader.readAsDataURL(file);
  };


  // 제출 처리 + 유효성 검사
  const handleSubmit = (e) => {
    e.preventDefault();

    if (rawCardNumber.length !== 16) {
      return alert('카드 번호는 정확히 16자리 숫자로 입력되어야 합니다.');
    }

    if (!expiry.match(/^\d{2}\/\d{2}$/)) {
      return alert('만료일 형식을 확인하세요 (MM/YY)');
    }
    if (!owner) {
      return alert('카드 소유자 이름을 입력하세요');
    }
    if (cvc.length < 3) {
      return alert('CVC를 3자리로 입력하세요');
    }
    if (!password[0] || !password[1]) {
      return alert('카드 비밀번호 앞 두자리를 입력하세요');
    }

    const data = {
      number: rawCardNumber,
      expiry,
      owner,
      cvc,
      password,
      image: imageUrl
    };
;

    onRegister(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light mt-3">
      {/* 이미지 업로드 */}
      <div className="mb-3 text-center">
        <img
          src={imageUrl || '/images/card-default.png'}
          alt="카드 미리보기"
          style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} className="form-control mt-2" />
      </div>

      <div className="mb-2">
        <label>카드 번호</label>
        {/* 마스킹된 카드 번호를 보여주는 div */}
          <div
            className="form-control"
            tabIndex={0}
            onClick={() => document.getElementById('realCardInput').focus()}
            style={{ cursor: 'text' }}
          >
            {maskCardNumber(rawCardNumber) || '카드 번호를 입력하세요'}
          </div>

          {/* 실제로 입력을 처리하는 숨겨진 input */}
          <input
            id="realCardInput"
            type="text"
            tabIndex="-1"
            aria-hidden="true"
            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
            onChange={handleCardNumberChange}
            onKeyDown={(e) => {
              // 숫자(0~9), 백스페이스, Delete, 화살표만 허용
              const allowed = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
              if (!/^\d$/.test(e.key) && !allowed.includes(e.key)) {
                e.preventDefault();
              }
            }}
            value={rawCardNumber}
          />

      </div>

      <div className="mb-2">
        <label>만료일</label>
        <input
          className="form-control"
          placeholder="MM/YY"
          value={expiry}
          onChange={handleExpiryChange}
        />
      </div>

      <div className="mb-2">
        <label>카드 소유자 이름</label>
        <input
          className="form-control"
          value={owner}
          onChange={handleOwnerChange}
        />
      </div>

      <div className="mb-2">
        <label>보안 코드 (CVC)</label>
        <input
          className="form-control"
          type="password"
          value={cvc}
          onChange={handleCvcChange}
        />
      </div>

      <div className="mb-2">
        <label>카드 비밀번호</label>
        <div className="d-flex gap-2">
          <input
            className="form-control"
            type="password"
            value={password[0]}
            onChange={(e) => handlePasswordChange(0, e.target.value)}
          />
          <input
            className="form-control"
            type="password"
            value={password[1]}
            onChange={(e) => handlePasswordChange(1, e.target.value)}
          />
          <span className="form-control text-center bg-light">• •</span>
        </div>
      </div>

      <button className="btn btn-dark w-100 fw-bold mt-3">작성 완료</button>
    </form>
  );
}

export default CardRegisterForm;
