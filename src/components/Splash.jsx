import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledRemoteImage from '../styles/RemoteImage'; // RemoteImage import
import { LogoButton } from '../styles/CommonButtons'; // 로고 버튼 import

const Splash = () => {
  const navigate = useNavigate();
  

useEffect(() => {
  const timer = setTimeout(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate('/Welcome');
    } else {
      navigate('/Welcome');
    }
  }, 2500);
  return () => clearTimeout(timer);
}, [navigate]);
  return (
    <Wrapper>
      <Container>
        <CharacterArea> 
        <ImageBox>
          <StyledRemoteImage imageKey="SplashCharacter_0" alt="캐릭터" />
        </ImageBox>
        </CharacterArea>

        <LogoArea>
          <LogoBox>
          <LogoButtons onClick={() => navigate('/')}>
            <StyledRemoteImage imageKey="Logo_0" alt="로고"/>
          </LogoButtons>
          </LogoBox>
        </LogoArea>

        <Explain>
          노년층 사용자들을 위한<br />
          스마트폰 사용·정보탐색<br />
          도우미 서비스
        </Explain>
      </Container>
    </Wrapper>
  );
};

export default Splash;

// --- styled-components ---
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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

// 캐릭터 이미지 영역
const CharacterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterBox = styled.div`
  width: 164px;
  height: 164px;
  background: #eee;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 18px;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 286px;
  height: 316px;
  background-color: #eee;
  margin: 100px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
   object-fit: cover;
  clip-path: inset(0px 2px 2px 0px); /* top right bottom left */
`;

// 로고 이미지 영역
const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const LogoButtons = styled(LogoButton)`
  position: static;
  color: #bbb;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
`;

const LogoBox = styled.div`
  width: 200px;
  height: 58px;
  background: #eee;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 18px;
  font-weight: 600;
`;

const Explain = styled.div`
  color: #888;
  font-size: 15px;
  text-align: center;
  line-height: 1.7;
  margin-top: 24px;
`;

