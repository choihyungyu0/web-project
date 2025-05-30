import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CharacterImg from '../assets/user.png';
import { CharacterWrap, CharacterImage } from '../styles/CommonImage'; 

function LearningChoiceContainer() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LeftSection>
            <LogoButton onClick={() => navigate('/')}>로고</LogoButton>
          </LeftSection>
          <RightButtons>
            <CharacterWrap>
              <CharacterImage onClick={()=> navigate('/Mypage')} src={CharacterImg} alt="캐릭터" />
            </CharacterWrap>
          </RightButtons>
        </TopBar>

        <BackButtonWrapper>
          <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
        </BackButtonWrapper>

        <Content>
          <QuestionRow>
            <SpeechBubble>
              <Text>무엇을 배워볼까요?</Text>
            </SpeechBubble>
            <CharacterBox>캐릭터 이미지</CharacterBox>
          </QuestionRow>

          <ChoiceButton onClick={() => navigate('/CaptureStart')}>스마트폰 사용법 배우기</ChoiceButton>
          <ChoiceButton>어플리케이션 사용법 배우기</ChoiceButton>
        </Content>
      </ContentWrapper>
    </PageContainer>
  );
}

export default LearningChoiceContainer;

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

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 16px;
`;

const LogoButton = styled(Button)`
  font-weight: bold;
`;

const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const BackButton = styled(Button)`
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SpeechBubble = styled.div`
  position: relative;
  border: 1px solid #ccc;
  background: white;
  padding: 16px;
  font-weight: bold;
  width: 250px;
  margin-right: 8px;
`;

const Text = styled.div`
  font-size: 18px;
  text-align: center;
`;

const CharacterBox = styled.div`
  border: 1px solid #ccc;
  background: #f5f5f5;
  padding: 16px;
  width: 100px;
  text-align: center;
`;

const ChoiceButton = styled.button`
  width: 100%;
  max-width: 464px;
  height: 148px;
  padding: 16px;
  margin: 8px 0;
  border: 1px solid #333;
  background: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
