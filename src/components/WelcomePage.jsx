import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import logo from '../assets/logo.png';

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <LogoButton onClick={() => navigate('/')}>로고
        </LogoButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>

        <WelcomeText>
          안녕하세요! 노하우에 오신것을 환영합니다!
        </WelcomeText>

        <LoginButton onClick={() => navigate('/MainLogin')}>로그인</LoginButton>
        <NextButton onClick={() => navigate('/Email')}>회원가입
        </NextButton>
        <Divider />
        <GoogleButton>
          <FcGoogle size={26} />
          Google 계정으로 로그인
        </GoogleButton>
      </Container>
    </Wrapper>
  );
}

export default WelcomePage;


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 464px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  text-align: center;
  position: relative;
  padding: 20px;
`;

const LogoButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 12px;
  background-color: white;
  border: none;
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

const LoginButton = styled.button`
width: 240px;
  height: 48px;
  margin-bottom: 16px;
  background: #ff69b4;
  color: #fff;
  border: none;
  border-radius: 14px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    opacity: 0.92;
  }
`;

const NextButton = styled.button`
width: 240px;
  height: 48px;
  margin-bottom: 16px;
  background: #ff69b4;
  color: #fff;
  border: none;
  border-radius: 14px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    opacity: 0.92;
  }
`;

const Divider = styled.hr`
  width: 90%;
  margin: 26px 0 22px 0;
  border: 0;
  border-top: 2px solid #eee;
`;

const GoogleButton = styled.button`
  width: 260px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 2px solid #222;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #222;
  cursor: pointer;
  transition: 0.1s;
  gap: 10px;
  &:hover {
    background: #f5f5f5;
  }
`;