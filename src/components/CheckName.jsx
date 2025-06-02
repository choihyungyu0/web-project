import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSignUp } from '../styles/SignupContext';
import { LogoButton } from '../styles/CommonButtons';
import StyledRemoteImage from '../styles/RemoteImage';

function CheckName() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signUpData, updateSignUpData } = useSignUp();
  const isProfileComplete = location.state?.isProfileComplete;
  const [name, setName] = useState(signUpData.name || '');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!name.trim()) {
      setError('이름을 입력해주세요.');
      return;
    }
    setError('');
    updateSignUpData({ name });
    navigate('/Birthday', { state: { isProfileComplete } });
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim()) setError('');
  };

  return (
    <Wrapper>
      <Container>
        <LogoButton onClick={() => navigate('/Welcome')}>
          <StyledRemoteImage imageKey="Logo_0" alt="로고" />
        </LogoButton>
        <ImageBox>
          <StyledRemoteImage imageKey="CheckNameCharacter_0" alt="캐릭터" />
        </ImageBox>
        <WelcomeText>성함을 입력해주세요!</WelcomeText>
        <Input
          type="text"
          placeholder=""
          value={name}
          onChange={handleInputChange}
        />
        <NameHint>예) 홍길동</NameHint>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <NextButton onClick={handleNext}>
          다음으로 넘어가기
        </NextButton>
      </Container>
    </Wrapper>
  );
}

export default CheckName;

// ---- styled-components 등 아래 코드 동일 ----

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
  height: 100%;
  width: 100%;
  max-width: 464px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 219px;
  height: 40%;
  background-color: #eee;
  margin: 100px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 80px;
  line-height: 1.5;
`;

const Input = styled.input`
  width: 100%;
  background-color: #F2F2F7;
  padding: 15px;
  font-size: 20px;
  margin-bottom: 22px;
  border-radius: 40px;
  box-sizing: border-box;
  border: 2px solid #C7C7CC;
`;

const NameHint = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 18px;
  color: #aaa;
  margin-top: -12px;
  margin-bottom: 20px;
  margin-left:5px;
`;

const ErrorMessage = styled.div`
  color: #ff3267;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
  align-self: flex-start;
  margin-left: 5px;
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 16px;
  margin-top: 12px;
  background: rgba(120, 120, 128, 0.2);
  width: 200px;
  border: 1px solid #000;
  padding: 15px 0;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin: 3px;
`;
