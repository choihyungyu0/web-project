import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <LogoutButton onClick={() => navigate('/')}>로고</LogoutButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>

        <WelcomeText>
          안녕하세요! 튜터톡에 오신 걸을 환영합니다🥲<br />
          당신의 이름을 알려주세요!
        </WelcomeText>

        <Input type="text" placeholder="예) 홍길동" />

        <DisabledButton onClick={() => navigate('/MainLogin')}>이미 계정이 있어요.</DisabledButton>
        <NextButton onClick={() => navigate('/Gender')}>다음으로 넘어가기
        </NextButton>
      </Container>
    </Wrapper>
  );
}

export default WelcomePage;


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
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
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  text-align: center;
  position: relative;
`;

const LogoutButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  background-color: #eee;
  margin: 100px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
`;

const WelcomeText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
  line-height: 1.5;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const DisabledButton = styled.button`
  background-color: #eee;
  border: 1px solid #ccc;
  color: #888;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`;

const NextButton = styled.button`
  padding: 12px;
  font-size: 18px;
  background-color: white;
  border: 1px solid black;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`;
