import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CharacterImg from '../assets/user.png';
import { CharacterWrap, CharacterImage } from '../styles/CommonImage';
import { BellButton } from '../styles/CommonButtons';

function CaptureGuideFirst() {
  const [showInstruction, setShowInstruction] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const navigate = useNavigate();

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
    setShowInstruction(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 500);
  };

  const handleShowAgain = () => {
    setIsMounted(true);
    setTimeout(() => {
      setShowInstruction(true);
    }, 10);
  };

  return (
    <PageWrapper>
      <Container>
        <TopBar>
          <Button onClick={() => navigate('/')}>로고</Button>
          <RightButtons>
            <BellButton>알림</BellButton>
            <CharacterWrap>
              <CharacterImage onClick={() => navigate('/Mypage')} src={CharacterImg} alt="캐릭터" />
            </CharacterWrap>
          </RightButtons>
        </TopBar>
        <BackArrow onClick={() => navigate(-1)}>❮</BackArrow>
        <ContentContainer>
          <CaptureBox>스마트폰 캡처 이미지</CaptureBox>
          {isMounted && (
            <InstructionBox $visible={showInstruction}>
              <InstructionTitle onClick={handleCloseInstruction}>설명 닫아두기</InstructionTitle>
              <SpeechRow>
                <SpeechBubble>카메라 아이콘을 터치하세요!</SpeechBubble>
              </SpeechRow>
              <CharacterBox>캐릭터 이미지</CharacterBox>
            </InstructionBox>
          )}
          {/* 설명 닫힌 경우 */}
          {!isMounted && (
            <>
              <NextButton onClick={()=>navigate('/CaptureGuideSecond')}>다음으로 넘어가기</NextButton>
            </>
          )}
        </ContentContainer>
        {/* MoreButton을 컨테이너 하단에 항상 고정 */}
        {!isMounted && (
          <MoreButton onClick={handleShowAgain}>설명 자세히 보기</MoreButton>
        )}
      </Container>
    </PageWrapper>
  );
}

export default CaptureGuideFirst;

// ---------------- styled-components ----------------

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
`;
const Container = styled.div`
  width: 100%;
  max-width: 464px;
  min-height: 100vh;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const TopBar = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin: 12px 0 0 20px;
  cursor: pointer;
  align-self: flex-start;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 남은 공간을 CaptureBox가 모두 차지 */
  padding-bottom: 80px;
`;

const CaptureBox = styled.div`
  width: 70%;
  flex: 1;
  min-height: 180px;
  max-height: 100%;
  background: #eee;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  z-index: 1;
`;

const InstructionBox = styled.div`
  position: absolute;
  left: 0; right: 0; bottom: 0;
  width: 100%;
  height: 300px;
  margin-top: -300px;
  background: white;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  z-index: 2;
  transition: transform 0.5s ease;
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(150%)')};
`;

const InstructionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
  text-align: center;
  background: #ff62b0;
  color: white;
  border-radius: 10px 10px 0 0;
  width: 100%;
  padding: 20px 0;
`;

const SpeechRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
`;

const SpeechBubble = styled.div`
  position: relative;
  display: inline-block;
  padding: 14px 22px;
  border: 2.5px solid #ff62b0;
  border-radius: 18px;
  background: #fff;
  color: #222;
  font-size: 18px;
  font-weight: 600;
  margin-right: 32px;  /* 오른쪽 여백 */
  margin-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    left: 92%;   /* 꼬리를 더 오른쪽으로 */
    bottom: -18px;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top: 16px solid #ff62b0;
    border-bottom: none;
    transform: translateX(-50%);
    z-index: 0;
  }
`;

const CharacterBox = styled.div`
  margin-left: auto;
  width:150px;
  height: 150px;
  border: 1px solid #ccc;
  padding: 8px;
  background: #f5f5f5;
`;

const NextButton = styled.button`
  width: 60%;
  max-width: 320px;
  padding: 20px 0;
  background: #ededed;
  color: #222;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 16px;
  margin: 0 auto 16px auto;
  display: block;
  z-index: 2;
  position: relative;
`;

const MoreButton = styled.button`
  position: absolute;
  left: 0; right: 0; bottom: 0;
  width: 100%;
  padding: 20px 0;
  background: #ff62b0;
  color: #fff;
  font-size: 19px;
  font-weight: bold;
  border: none;
  border-radius: 0 0 8px 8px;
  z-index: 10;
`;
