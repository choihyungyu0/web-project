import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MypageWrap, MypageButton, BellButton, LogoButtons } from '../styles/CommonButtons';
import { SoftSpeechBubble } from '../styles/SoftSpeechBubble';
import StyledRemoteImage from '../styles/RemoteImage';
import AlertModal from '../styles/AlertModal'; // ✅ 모달 import

function LearningChoiceContainer() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // ✅ 모달 상태

  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LogoButtons onClick={() => navigate('/Menu')}>
            <StyledRemoteImage imageKey="Logo_0" alt="로고" />
          </LogoButtons>

          <RightButtons>
            <BellButton onClick={() => setShowModal(true)}>
              <StyledRemoteImage imageKey="Bell_0" alt="알림" />
            </BellButton>

            <MypageWrap>
              <MypageButton onClick={() => navigate('/Mypage')}>
                <StyledRemoteImage imageKey="Mypage_0" alt="마이페이지지" />
              </MypageButton>
            </MypageWrap>
          </RightButtons>
        </TopBar>

        <Content>
          <QuestionRow>
            <SoftSpeechBubble style={{ minWidth: 240, fontSize: 28 }}>
              <Text>원하시는 메뉴를<br /> 선택해주세요!</Text>
            </SoftSpeechBubble>

            <ImageBox>
              <StyledRemoteImage imageKey="MenuChoicePageCharacter_0" alt="캐릭터" />
            </ImageBox>
          </QuestionRow>

          <ChoiceButton onClick={() => navigate('/Learning')}>
            학습하기
          </ChoiceButton>
          <ChoiceButton onClick={() => navigate('/CustomInfo')}>
            맞춤 생활 정보 보기
          </ChoiceButton>
        </Content>

        {/* ✅ AlertModal 조건부 렌더링 */}
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </ContentWrapper>
    </PageContainer>
  );
}

export default LearningChoiceContainer;

// ------ styled-components ------

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
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
  margin-bottom: 16px;
`;

const RightButtons = styled.div`
  display: flex;
  align-items: center;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 56px 0;
`;

// ===== SpeechBubble SVG 꼬리 버전 =====

const SpeechBubbleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpeechBubbleBox = styled.div`
  width: 260px;
  min-height: 110px;
  background: #fff;
  border-radius: 28px;
  padding: 24px 16px 108px 16px;
  border: 2px solid #ff3593;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const SpeechBubbleTail = styled.svg`
  margin-top: -3px;
  margin-left: 135px;
`;


const Text = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #111;
  text-align: center;
`;

const ImageBox = styled.div`
   width: 108px;
  height: 120px;
  background-color:#eee;

  margin-top:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-left:18px;
  margin-top:50px;
`;

const ChoiceButton = styled.button`
  width: 100%;
  height: 64px;
  padding: 60px;
  margin: 12px 0;
  border: 2px solid #333;
  background: white;
  font-size: 23px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top:14px;
   &:first-of-type {
    margin-top: 73px; // ✅ 첫 번째 버튼만 더 아래로
  }
`;
