import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CharacterImg from '../assets/user.png';
import { CharacterWrap, CharacterImage } from '../styles/CommonImage';
import { BellButton } from '../styles/CommonButtons';

const CaptureGuidePage = () => {
  const navigate = useNavigate();

  // 버튼 클릭시 state와 함께 이동
  const handleGoLearning = () => {
    navigate('/Smartphone', { state: { carrotAfter: true } });
  };

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <LogoutButton onClick={() => navigate('/')}>로고</LogoutButton>
          <RightButtons>
            <BellButton>알림</BellButton>
            <CharacterWrap>
              <CharacterImage onClick={() => navigate('/Mypage')} src={CharacterImg} alt="캐릭터" />
            </CharacterWrap>
          </RightButtons>
        </TopBar>
        <BackArrow onClick={() => navigate(-1)}>❮</BackArrow>
        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>
        <Description>
          &lt;사진찍기&gt;를<br />
          모두 배웠어요!
        </Description>
        <StartButton onClick={handleGoLearning}>다른 공부하러 가기</StartButton>
      </Container>
    </Wrapper>
  );
};

export default CaptureGuidePage;

// styled-components 이하 동일
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
  margin: 0 auto;
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
  width: 240px;
  height: 48px;
  background: #ff69b4;
  color: #fff;
  border: none;
  border-radius: 14px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.1s;
  margin: 0 auto;
  &:hover {
    opacity: 0.92;
  }
`;
