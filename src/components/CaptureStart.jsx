import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CaptureGuidePage from './CaptureGuidePage';
import CharacterImg from '../assets/user.png';
import { CharacterWrap, CharacterImage } from '../styles/CommonImage'; 


const CaptureStartPage = () => {
  const  navigate  = useNavigate();
  return (
    <Wrapper>
      <Container>
        <TopBar>
          <LogoutButton onClick={() => navigate('/')}>로고</LogoutButton>
          <RightButtons>
            <CharacterWrap>
              <CharacterImage onClick={()=> navigate('/Mypage')} src={CharacterImg} alt="캐릭터" />
            </CharacterWrap>
          </RightButtons>
        </TopBar>

        <BackArrow onClick={() => navigate(-1)}>❮</BackArrow>

        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>

        <Description>
          사진을 찍는 방법에 대해<br />
          알아보아요!
        </Description>

        <StartButton onClick={()=>navigate('/CaptureGuide')}>시작하기</StartButton>
      </Container>
    </Wrapper>
  );
};

export default CaptureStartPage;

const Wrapper = styled.div`
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

const Container = styled.div`
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoutButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #000;
  background-color: white;
  cursor: pointer;
`;

const RightButtons = styled.div`
  display: flex;
  gap: 10px;
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
  margin: 0 auto;
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
  font-size: 18px;
  background-color: white;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
`;
