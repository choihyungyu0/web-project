import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      const response = await fetch('http://3.86.194.222:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.status === 200 && data.accessToken) {
        // 토큰 저장
        localStorage.setItem('accessToken', data.accessToken);
        if (data.refreshToken) localStorage.setItem('refreshToken', data.refreshToken);
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
        <LogoutButton onClick={() => navigate('/')}>로고</LogoutButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
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

// 스타일 컴포넌트 그대로
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  max-width: 200px;
  height: 200px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 20px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const InputLabel = styled.label`
  align-self: flex-start;
  font-size: 18px;
  margin-bottom: 6px;
`;

const InputField = styled.input`
  width: 100%;
  background-color: #f2f2f2;
  border: none;
  padding: 12px;
  font-size: 18px;
  margin-bottom: 16px;
  border-radius: 4px;
  box-sizing: border-box;
`;

const EmailHint = styled.div`
  align-self: flex-start;
  font-size: 18px;
  color: #aaa;
  margin-top: -12px;
  margin-bottom: 20px;
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
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 32px;
`;

const NavButton = styled.button`
  flex: 1;
  height: 48px;
  border: 1px solid #000;
  padding: 12px 0;
  background-color: white;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
`;

const ForgotText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: #999;
  text-align: center;
  margin-top: 16px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #666;
  }
`;
