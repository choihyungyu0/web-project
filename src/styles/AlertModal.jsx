// AlertModal.jsx
import React from 'react';
import styled from 'styled-components';
import {
  RoundedModalButtonWrapper as CloseButtonWrapper,
  RoundedModalButtonText as CloseButton,
} from '../styles/CommonButtons';

const alertMessages = [
  "오늘 복약 시간입니다. 약을 잊지 말고 복용하세요!",
  "건강 체크 시간입니다. 혈압을 측정해주세요.",
  "오후 3시에 병원 예약이 있습니다.",
  "자녀분과 영상통화 예약이 10분 후에 시작됩니다.",
  "생활지원사 방문 예정: 오후 4시",
];

const AlertModal = ({ onClose }) => {
  return (
    <DimmedBackground onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <AlertList>
          {alertMessages.map((msg, idx) => (
            <AlertItem key={idx}>
              <AlertText>{msg}</AlertText>
            </AlertItem>
          ))}
        </AlertList>

        <CloseButtonWrapper onClick={onClose}>
          <CloseButton>닫기</CloseButton>
        </CloseButtonWrapper>
      </ModalWrapper>
    </DimmedBackground>
  );
};

export default AlertModal;

// ✅ styled-components 아래

const DimmedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  width: 350px;
  height: 460px;
  background: #ffffff;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AlertList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 380px;
  overflow-y: auto;
`;

const AlertItem = styled.div`
  padding: 20px 12px;
  border-bottom: 1px solid #000;
`;

const AlertText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
