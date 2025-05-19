import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function LearningChoicePage() {
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <TopBar>
          <Button onClick={() => navigate('/')}>로고</Button>
          <RightButtons>
            <Button onClick={() => navigate('/Alarm')}>알림</Button>
            <Hamburger>☰</Hamburger>
          </RightButtons>
        </TopBar>

        <BackButton>뒤로가기</BackButton>

        <Content>
          <QuestionRow>
            <SpeechBubble>
              <Text>무엇을 배워볼까요?</Text>
            </SpeechBubble>
            <CharacterBox>캐릭터 이미지</CharacterBox>
          </QuestionRow>

          <ChoiceButton onClick={() => navigate('/Capture')}>스마트폰 사용법 배우기</ChoiceButton>
          <ChoiceButton>어플리케이션 사용법 배우기</ChoiceButton>
        </Content>
      </PageWrapper>
    </>
  );
}

export default LearningChoicePage;
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #f9f9f9;
  }
`;

const PageWrapper = styled.div`
  max-width: 420px;        // ✅ 모바일 기준 너비 제한
  margin: 0 auto;          // ✅ 중앙 정렬
  padding: 16px;
  background: #fff;
  min-height: 100vh;
`;
const TopBar = styled.div`
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

const Hamburger = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const BackButton = styled(Button)`
  margin: 16px 0;
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
  width: 200px;
  margin-right: 8px;
`;



const Text = styled.div`
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
  width: 80%;
  max-width: 400px;
  padding: 16px;
  margin: 8px 0;
  border: 1px solid #333;
  background: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;