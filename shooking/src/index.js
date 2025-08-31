import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // CSS는 여기
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 추가
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
