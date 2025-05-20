import React from 'react';
import styled from 'styled-components';

const CaptureGuidePage = () => {
  return (
    <Wrapper>
      <Container>
        <TopBar>
          <LogoutButton>로그</LogoutButton>
          <RightButtons>
            <NotifyButton>알림</NotifyButton>
            <Hamburger>☰</Hamburger>
          </RightButtons>
        </TopBar>

        <BackArrow>❮</BackArrow>

        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>

        <Description>
          사진을 찍는 방법에 대해<br />
          알아보아요!
        </Description>

        <StartButton>시작하기</StartButton>
      </Container>
    </Wrapper>
  );
};

export default CaptureGuidePage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  max-width: 464px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoutButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #000;
  background-color: white;
`;

const RightButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const NotifyButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #000;
  background-color: white;
`;

const Hamburger = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const BackArrow = styled.div`

font-size: 28px;
  cursor: pointer;
  margin: 20px 0;
  align-self: flex-start;  
`;

const ImageBox = styled.div`
  width: 312px;
  height: 312px;
  background-color: #eee;
  border: 1px solid #ccc;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0 40px;
  line-height: 1.6;
`;

const StartButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: white;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
`;
