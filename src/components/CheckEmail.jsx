import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../styles/SignupContext'; // Context import
import StyledRemoteImage from '../styles/RemoteImage'; // RemoteImage import
import { LogoButton } from '../styles/CommonButtons'; // 로고 버튼 import

export default function LoginForm() {
  const navigate = useNavigate();
  const { signUpData, updateSignUpData } = useSignUp();

  const [email, setEmail] = useState(signUpData.email || '');
  const [password, setPassword] = useState(signUpData.password || '');
  const [showPassword, setShowPassword] = useState(false);

  // 이메일 유효성 검사 정규식
  const isValidEmail = (email) => {
    // 아주 기본적인 이메일 형식 검사 (더 엄격하게 하고 싶으면 정규식 확장 가능)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNext = () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 모두 입력하세요.');
      return;
    }
    if (!isValidEmail(email)) {
      alert('올바른 이메일 형식으로 입력해주세요.\n예: example@domain.com');
      return;
    }
    updateSignUpData({ email, password });
    navigate('/Name');
  };

  return (
    <Wrapper>
      <Container>
          <LogoButton onClick={() => navigate('/Welcome')}>
            <StyledRemoteImage imageKey="Logo_0" alt="로고"/>
          </LogoButton>
        <ImageBox>
          <StyledRemoteImage imageKey="CheckEmailCharacter_0" alt="캐릭터" />
        </ImageBox>

        <Title>
          계정과 연결하실 이메일과 비밀번호를<br />입력해주세요!
        </Title>

        <InputLabel>이메일</InputLabel>
        <InputField
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <EmailHint>예) example@naver.com</EmailHint>

        <InputLabel>비밀번호</InputLabel>
        <PasswordWrapper>
          <InputField
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ToggleButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            <StyleSpan>눈 아이콘을 눌러 비밀번호를 확인하세요.</StyleSpan>
          </ToggleButton>
        </PasswordWrapper>

        <ButtonGroup>
          <NavButton onClick={() => navigate(-1)}>이전으로</NavButton>
          <NavButton onClick={handleNext}>다음으로</NavButton>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
}

// ----- styled-components 부분 -----
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
   overflow: hidden;
`;

const ImageBox = styled.div`
width: 100%;
  max-width: 191px;
  height: 30%;
  background-color: #f2f2f2;
   object-fit: cover;
  clip-path: inset(0px 0px 0px 0px); /* top right bottom left */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px;
  margin-top:100px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  line-height: 1.5;
  margin-bottom: 4px;
  
`;

const InputLabel = styled.label`
  align-self: flex-start;
  font-size: 20px;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 100%;
  background-color:#F2F2F7;
 
  padding: 15px;
  font-size: 20px;
  margin-bottom: 12px;
  border-radius: 40px;
  box-sizing: border-box;
  border: 2px solid #C7C7CC;
  
`;

const EmailHint = styled.div`
 display: flex;
  align-self: flex-start;
  font-size: 13px;
  color: #aaa;
  margin-top: -12px;
  margin-bottom: 10px;
  
`;

const PasswordWrapper = styled.div`
  width: 100%;
  position: relative;
  
`;

const StyleSpan = styled.span`
  position: relative;
  top: -5px;
  left: 5px;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 100%;
  left: 1px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
display: flex;
   justify-content: center;
  gap: 16px;
  width: 100%;
  margin-top: 12px;
`;

const NavButton = styled.button`
background: rgba(120, 120, 128, 0.2);
  width: 120px;
  border: 1px solid #000;
  padding: 10px 0;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin: 15px;
`;
