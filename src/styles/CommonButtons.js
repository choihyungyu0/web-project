// src/styles/CommonButtons.js
import styled from 'styled-components';

export const LogoutButton = styled.button`
  height: 48px;
  width: 120px;
  position: absolute;
  top: 32px;
  left: 28px;
  padding: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

// "알림" 버튼용 BellButton (재사용 가능)
export const BellButton = styled.button`
  height: 48px;
  width: 134px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 나중에 서버에서 이미지 오면 내부에 <img>나 <span> 텍스트/이미지 넣어서 사용! */
`;
