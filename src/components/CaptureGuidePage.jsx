import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
function CaptureGuidePage() {
const [showInstruction, setShowInstruction] = useState(true);
const [isMounted, setIsMounted] = useState(true);

useEffect(() => {
  const slideTimer = setTimeout(() => {
    setShowInstruction(false);
  }, 3000);

  const removeTimer = setTimeout(() => {
    setIsMounted(false);
  }, 3500);

  return () => {
    clearTimeout(slideTimer);
    clearTimeout(removeTimer);
  };
}, []);

const handleCloseInstruction = () => {
  setShowInstruction(false); // 슬라이드 아래로
  setTimeout(() => {
    setIsMounted(false);     // DOM 제거
  }, 500); // 애니메이션 시간과 맞춰줌
};

// 👇 자세히 보기 버튼 클릭 시
const handleShowAgain = () => {
  setIsMounted(true);
  // 짧은 지연 후 슬라이드 애니메이션 트리거
  setTimeout(() => {
    setShowInstruction(true);
  }, 10);
};
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <TopBar>
          <Button>로고</Button>
          <RightButtons>
            <Button>알림</Button>
            <Hamburger>☰</Hamburger>
          </RightButtons>
        </TopBar>

        <BackArrow>←</BackArrow>

        <ContentContainer>
    <CaptureBox>스마트폰 캡처 이미지</CaptureBox>
    {isMounted && (
  <InstructionBox $visible={showInstruction}>
    <InstructionTitle onClick={handleCloseInstruction}>설명 닫아두기</InstructionTitle>
    <SpeechBubble>‘사진’ 어플리케이션을 터치하세요!</SpeechBubble>
    <CharacterBox>캐릭터 이미지</CharacterBox>
  </InstructionBox>
)}
  </ContentContainer>
  {!isMounted && (
      <MoreButton onClick={handleShowAgain}>자세히 보기</MoreButton>
    )}
      </PageWrapper>
    </>
  );
}
export default CaptureGuidePage;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; 
  padding: 16px;
  box-sizing: border-box;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreButton = styled.button`
  margin-top: 24px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
`;

const RightButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const Hamburger = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const BackArrow = styled.div`
  font-size: 24px;
  margin: 12px 0;
`;
const ContentContainer = styled.div`
height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CaptureBox = styled.div`
  width: 60%;
  height: 100%;
  background: #eee;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const InstructionBox = styled.div`
  width: 80%;
  height: 300px;
  margin-top: -300px; /* ✅ 이미지 아래로 올라가도록 */
  background: white;
  border: 1px solid #999;
  padding: 16px;
  box-sizing: border-box;
  z-index: 2;
  transition: transform 0.5s ease;
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(150%)')};
`;

const InstructionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
  text-align: center;
`;

const SpeechBubble = styled.div`
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 10px;
  background: white;
`;

const CharacterBox = styled.div`
  width:150px;
  height: 150px;
  right: 36px;
  top:550px;
  border: 1px solid #ccc;
  padding: 8px;
  background: #f5f5f5;
`;
