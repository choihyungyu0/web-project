import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function CheckName() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  return (
    <Wrapper>
      <Container>
        <LogoutButton onClick={() => navigate('/')}>로고</LogoutButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>

        <WelcomeText>성함을 입력해주세요!</WelcomeText>

        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="예) 홍길동"
        />
        <NameHint>예) 홍길동</NameHint>

        <NextButton onClick={() => navigate('/Email', { state: { name } })}>
          다음으로 넘어가기
        </NextButton>
      </Container>
    </Wrapper>
  );
}

export default CheckName;



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
  background-color: #f2f2f2;
  border: none;
  padding: 12px;
  font-size: 18px;
  margin-bottom: 16px;
  border-radius: 4px;
  box-sizing: border-box;
`;
const NameHint = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 18px;
  color: #aaa;
  margin-top: -12px;
  margin-bottom: 20px;
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
