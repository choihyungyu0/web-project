import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StyledRemoteImage from '../styles/RemoteImage';
import { LogoButton } from '../styles/CommonButtons';

export default function MainLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 이메일 형식 체크 함수
  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // 로그인 요청 함수
  const handleLogin = async () => {
    if (!isEmailValid(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    try {
      const response = await fetch('https://knowhow.it.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.status === 200 && data.Token) {
        // 토큰 저장
        localStorage.setItem('accessToken', data.Token);
        alert('로그인 성공!');
        navigate('/Menu');
      } else {
        alert(data.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      alert('서버와의 연결에 실패했습니다.');
    }
  };

  return (
    <Wrapper>
      <Container>
        <LogoButton onClick={() => navigate('/Welcome')}>
          <StyledRemoteImage imageKey="Logo_0" alt="로고" />
        </LogoButton>
        <ImageBox>
          <StyledRemoteImage imageKey="MainLoginCharacter_0" alt="캐릭터 이미지" />
        </ImageBox>

        <Title>계정과 연결하실 이메일과 비밀번호를<br />입력해주세요!</Title>

        <InputLabel>이메일</InputLabel>
        <InputField
          type="email"
          placeholder="예) example@naver.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <EmailHint>예) example@naver.com</EmailHint>

        <InputLabel>비밀번호</InputLabel>
        <PasswordWrapper>
          <InputField
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ToggleButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            <StyleSpan>눈 아이콘을 눌러 비밀번호를 확인하세요!</StyleSpan>
          </ToggleButton>
        </PasswordWrapper>

        <ButtonGroup>
          <NavButton onClick={handleLogin}>로그인하기</NavButton>
          <ForgotText onClick={() => navigate('/')}>아이디/비밀번호가 기억나지 않아요!</ForgotText>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
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
  max-width: 191px;
  height: 220px;
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
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  align-self: flex-start;
  font-size: 18px;
  margin-bottom: 6px;
`;

const InputField = styled.input`
  width: 100%;
  background-color:#F2F2F7;
  padding: 15px;
  font-size: 20px;
  margin-bottom: 8px;
  border-radius: 40px;
  box-sizing: border-box;
  border: 2px solid #C7C7CC;
`;

const EmailHint = styled.div`
  align-self: flex-start;
  font-size: 15px;
  color: #aaa;
  margin-top: -8px;
  margin-bottom: 12px;
  margin-left:5px;
`;

const PasswordWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 100%;
  left: 1px;
  transform: translateY(-30%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

const StyleSpan = styled.span`
  position: relative;
  top: -5px;
  left: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-top: 20px;
`;

const NavButton = styled.button`
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
  &:hover {
    opacity: 0.92;
  }
`;

const ForgotText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: #999;
  text-align: center;
  margin-top: 5px;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #666;
  }
`;
