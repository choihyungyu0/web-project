import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CharacterImg from '../assets/user.png';
import { CharacterWrap, CharacterImage } from '../styles/CommonImage'; 

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
const navigate = useNavigate();
  return (
      <PageWrapper>
        <Container>
        <TopBar>
          <Button onClick={() => navigate('/')}>로고</Button>
          <RightButtons>
            <CharacterWrap>
              <CharacterImage onClick={()=> navigate('/Mypage')} src={CharacterImg} alt="캐릭터" />
            </CharacterWrap>
          </RightButtons>
        </TopBar>

        <BackArrow onClick={() => navigate(-1)}>❮</BackArrow>

        <ContentContainer>
    <CaptureBox onClick={() => navigate('/CaptureComplete')}>스마트폰 캡처 이미지</CaptureBox>
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
        </Container>
      </PageWrapper>
  );
}
export default CaptureGuidePage;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 464px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreButton = styled.button`
  margin-top: 24px;
  padding: 10px 20px;
  font-size: 18px;
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

const BackArrow = styled.div`
  font-size: 24px;
  margin: 12px 0;
  cursor: pointer;
`;
const ContentContainer = styled.div`
height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CaptureBox = styled.div`
  width: 70%;
  height: 100%;
  background: #eee;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const InstructionBox = styled.div`
  width: 90%;
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
