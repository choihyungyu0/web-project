import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate,useLocation} from 'react-router-dom';
import { LogoutButton } from '../styles/CommonButtons';


export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const name = location.state?.name || ''; // 이전 페이지에서 넘어온 이름

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data); // 또는 alert(data.message)
    } catch (error) {
      console.error('요청 실패:', error);
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <EmailHint>예) example@naver.com</EmailHint>

        <InputLabel>비밀번호</InputLabel>
        <PasswordWrapper>
          <InputField
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />

          <ToggleButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            <StyleSpan>눈 아이콘을 눌러 비밀번호를 확인하세요.</StyleSpan>
          </ToggleButton>


        </PasswordWrapper>


        <ButtonGroup>
          <NavButton onClick={() => navigate(-1)}>이전으로</NavButton>
          <NavButton onClick={() => navigate('/Birthday', { state: { name } })}>다음으로</NavButton>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
}

// 아래는 스타일 코드 그대로
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

const ImageBox = styled.div`
  width: 100%; 
  max-width: 300px;
  height: 300px;
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
  display: flex;
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
  gap: 16px;
  width: 100%;
  margin-top: 32px;
`;

const NavButton = styled.button`
  flex: 1;
  border: 1px solid #000;
  padding: 12px 0;
  background-color: white;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
`;
