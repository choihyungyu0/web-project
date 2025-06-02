import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MypageWrap, MypageButton } from '../styles/CommonButtons';
import { SoftSpeechBubble } from '../styles/SoftSpeechBubble';
import StyledRemoteImage from '../styles/RemoteImage'; // RemoteImage import
import { LogoButtons } from '../styles/CommonButtons'; // 로고 버튼 import
import { BellButton } from '../styles/CommonButtons'; // BellButton import
import AlertModal from '../styles/AlertModal'; // 실제 파일 경로에 맞게 수정

function LearningChoiceContainer() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LogoButtons onClick={() => navigate('/Menu')}>
            <StyledRemoteImage imageKey="Logo_0" alt="로고"/>
          </LogoButtons>
        <RightProfileArea>
            <BellButton>
               <BellButton onClick={() => setShowModal(true)}>
            <StyledRemoteImage imageKey="Bell_0" alt="알림" />
          </BellButton>
            </BellButton>  
            <MypageWrap>
              <MypageButton
                onClick={() => navigate('/Mypage')}
              >            
              <StyledRemoteImage imageKey="Mypage_0" alt="마이페이지"/>
              </MypageButton>
            </MypageWrap>
        </RightProfileArea>
        </TopBar>

        <BackButtonWrapper>
          <BackButton onClick={() => navigate('/Menu')}>뒤로가기</BackButton>
        </BackButtonWrapper>

        <Content>
          <QuestionRow>
              <SoftSpeechBubble style={{ minWidth: 240, fontSize: 28 }}>
                            <Text>무엇을 배워볼까요?</Text>
                          </SoftSpeechBubble>
        <ImageBox>
          <StyledRemoteImage imageKey="LearningChoicePageCharacter_0" alt="캐릭터" />
        </ImageBox>
          </QuestionRow>

          <ChoiceButton onClick={() => navigate('/Smartphone')}>스마트폰 사용법 배우기</ChoiceButton>
          <ChoiceButton>어플리케이션 사용법 배우기</ChoiceButton>
        </Content>
          {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </ContentWrapper>
    </PageContainer>
  );
}

export default LearningChoiceContainer;

const RightProfileArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BellIcon = styled.img`
  width: 46px;
  height: 46px;
  
`;

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

const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 16px;
`;



const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  
`;

const BackButton = styled(Button)`
  font-weight: bold;
  /* Frame 2031 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 32px;
gap: 10px;

width: 147px;
height: 56px;

/* Fills/Secondary */
background: rgba(120, 120, 128, 0.16);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

const SpeechBubble = styled.div`
    position: relative;
  width: 271px;
  height: 70px;
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #ff3593;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  margin-left:70px;
  
  font-family: 'Pretendard Variable', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 48px;
  color: #000;
 
  /* 꼬리 만들기 */
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 80%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: #ff3593 transparent transparent transparent;
  }
`;

const Text = styled.div`
 font-size: 1.6rem;
  font-weight: bold;
  color: #111;
  text-align: center;

`;

const CharacterBox = styled.div`
  width: 100px;
  height: 100px;
  background-color:#eee;

  margin-top:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: black;
  font-weight: bold;
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
  justify-content: center; /* 가로 중앙 */
  align-items: center;     /* 세로 중앙 */
  text-align: center;
`;
