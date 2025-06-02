import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import StyledRemoteImage from '../styles/RemoteImage';
import { LogoButton } from '../styles/CommonButtons';

function WelcomePage() {
  const navigate = useNavigate();
  const GOOGLE_OAUTH_URL = "https://knowhow.it.com/oauth2/authorization/google";

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_OAUTH_URL;
  };

  return (
    <Wrapper>
      <Container>
        <LogoButton onClick={() => navigate('/')}>
          <StyledRemoteImage imageKey="Logo_0" alt="로고" />
        </LogoButton>
        <ImageBox>
          <StyledRemoteImage imageKey="WelcomePageCharacter_0" alt="캐릭터" />
        </ImageBox>
        <WelcomeText>
          안녕하세요! 노하우에 오신것을 환영합니다!
        </WelcomeText>
        <LoginButton onClick={() => navigate('/MainLogin')}>로그인</LoginButton>
        <NextButton onClick={() => navigate('/Email')}>회원가입</NextButton>
        <Divider />
        <GoogleButton onClick={handleGoogleLogin}>
          <FcGoogle size={26} />
          Google 계정으로 로그인
        </GoogleButton>
      </Container>
    </Wrapper>
  );
}

export default WelcomePage;

// ----------- styled-components -----------

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  overflow: hidden; // 스크롤바 제거

  @media (max-width: 600px) {
    height: 100dvh; // 모바일 브라우저 대응
    min-height: 100dvh;
    padding: 0;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 464px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  text-align: center;
  position: relative;
  padding: 20px;
  margin: auto 0;  // 상하 중앙정렬, flex의 align-items: center와 같이 쓰면 최적화

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // 세로 중앙 배치

  @media (max-width: 600px) {
    max-width: 100vw;
    border-radius: 0;
    min-height: 100dvh;
    padding: 10vw 4vw 8vw 4vw;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 216px;
  height: 30%;
  object-fit: cover;
  clip-path: inset(0px 0.9px 1px 0px);
  margin: 16px auto 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    max-width: 60vw;
    height: 38vw;
    min-height: 130px;
    margin: 24px auto 8px;
  }
`;

const WelcomeText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 18px 0 20px 0;
  line-height: 1.5;
  @media (max-width: 600px) {
    font-size: 16px;
    margin: 16px 0 12px 0;
  }
`;

const LoginButton = styled.button`
  width: 338px;
  height: 72px;
  margin: 0 auto 14px auto;
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
  @media (max-width: 600px) {
    width: 80vw;
    max-width: 320px;
    font-size: 17px;
    height: 44px;
  }
`;

const NextButton = styled(LoginButton)`
  background: #ff69b4;
`;

const Divider = styled.hr`
  width: 56%;
  margin: 26px auto 22px auto;
  border: 0;
  border-top: 2px solid #eee;
`;

const GoogleButton = styled.button`
  width: 338px;
  height: 72px;
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
  margin: 0 auto;
  &:hover {
    background: #f5f5f5;
  }
  @media (max-width: 600px) {
    width: 82vw;
    max-width: 320px;
    font-size: 16px;
    height: 40px;
  }
`;
