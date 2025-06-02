import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom'; // ← useLocation 추가!
import { useSignUp } from '../styles/SignupContext';

function CheckName() {
  const navigate = useNavigate();
  const location = useLocation(); // ← 변수명 겹치지 않게!
  const { signUpData, updateSignUpData } = useSignUp();
  const isProfileComplete = location.state?.isProfileComplete; // ← 이렇게 접근!
  console.log(isProfileComplete);

  // 초기값을 Context에서 가져오도록 하면 뒤로 돌아왔을 때도 값 유지됨
  const [name, setName] = useState(signUpData.name || '');

  const handleNext = () => {
    // Context에 이름 저장
    updateSignUpData({ name });
    // 다음 페이지로 isProfileComplete도 함께 넘겨주기
    navigate('/Birthday', { state: { isProfileComplete } });
  };

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
          placeholder=""
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <NameHint>예) 홍길동</NameHint>
        <NextButton onClick={handleNext}>
          다음으로 넘어가기
        </NextButton>
      </Container>
    </Wrapper>
  );
}

export default CheckName;

// ---- styled-components 등 아래 코드 동일 ----


// ---- styled-components 그대로 사용 ----
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
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
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
