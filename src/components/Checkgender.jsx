import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GenderSelectPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <LogoutButton onClick={() => navigate('/')}>로고</LogoutButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>

        <QuestionText>당신의 성별을 알려주세요!</QuestionText>

        <GenderButtonGroup>
          <GenderButton>여자예요</GenderButton>
          <GenderButton>남자예요</GenderButton>
        </GenderButtonGroup>

        <ButtonGroup>
          <NavButton onClick={()=>navigate('/')}>이전으로</NavButton>
          <NavButton onClick={() => navigate('/Birthday')}>다음으로</NavButton>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
};

export default GenderSelectPage;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh; /* ✅ 정확히 한 화면 높이 */
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
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

const QuestionText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`;

const GenderButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 30px;
`;

const GenderButton = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const NavButton = styled.button`
  padding: 12px;
  font-size: 18px;
  background-color: white;
  border: 1px solid black;
  flex: 1;
  border-radius: 4px;
  cursor: pointer;
`;
