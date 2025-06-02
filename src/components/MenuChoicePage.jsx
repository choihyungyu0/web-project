import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CharacterImg from '../assets/user.png';
import { CharacterWrap, CharacterImage } from '../styles/CommonImage';
import { SoftSpeechBubble } from '../styles/SoftSpeechBubble';

function LearningChoiceContainer() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LogoButton onClick={() => navigate('/')}>로고</LogoButton>
          <RightButtons>
            <BellButton>알림</BellButton>
            <CharacterWrap>
              <CharacterImage
                src={CharacterImg}
                alt="캐릭터"
                onClick={() => navigate('/Mypage')}
              />
            </CharacterWrap>
          </RightButtons>
        </TopBar>

        <Content>
          <QuestionRow>
            <SoftSpeechBubble style={{ minWidth: 240, fontSize: 28 }}>
              <Text>원하시는 메뉴를<br /> 선택해주세요!</Text>
            </SoftSpeechBubble>
            <CharacterBox>캐릭터 이미지</CharacterBox>
          </QuestionRow>

          <ChoiceButton onClick={() => navigate('/Learning')}>학습하기</ChoiceButton>
          <ChoiceButton onClick={() => navigate('/CustomInfo')}>맞춤 생활 정보 보기</ChoiceButton>
        </Content>
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

const LogoButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 16px;
  height: 48px;
  width: 134px;
`;

const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BellButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 16px;
  height: 48px;
  width: 134px;
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
  align-items: flex-start;
  gap: 12px;
  margin: 32px 0;
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
  padding: 24px 16px 18px 16px;
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

const CharacterBox = styled.div`
   width: 100px;
  height: 100px;
  background-color:#eee;
  border: 2px solid black;
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
`;
