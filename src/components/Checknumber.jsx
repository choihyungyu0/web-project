import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가!
import { useSignUp } from '../styles/SignupContext';
import StyledRemoteImage from '../styles/RemoteImage'; // RemoteImage import
import { LogoButton } from '../styles/CommonButtons'; // 로고 버튼 import

export default function PhoneNumberPage() {
  const navigate = useNavigate();
  const location = useLocation(); // ← 추가!
  const { signUpData, updateSignUpData } = useSignUp();

  // Birthday에서 전달받은 isProfileComplete 값 받기
  const isProfileComplete = location.state?.isProfileComplete;

  // Context에 저장된 값으로 초기화
  const [phone, setPhone] = useState(signUpData.phone || '');

  const handleNext = () => {
    // 형식 검사 (간단히 9자리 이상만 체크, 원하는 대로 수정 가능)
    if (!/^0\d{1,2}-\d{3,4}-\d{4}$/.test(phone)) {
      alert('올바른 전화번호 형식으로 입력해주세요! (예: 010-1234-5678)');
      return;
    }
    updateSignUpData({ phone });
    // 다음 페이지로 isProfileComplete 값 넘김!
    navigate('/Area', { state: { isProfileComplete } });
  };

  return (
    <Wrapper>
      <Container>
        <LogoButton onClick={() => navigate('/Welcome')}>
          <StyledRemoteImage imageKey="Logo_0" alt="로고" />
        </LogoButton>
        <ImageBox>
          <StyledRemoteImage imageKey="CheckNumberCharacter_0" alt="캐릭터" />
        </ImageBox>
        <Instruction>전화번호를 입력해주세요!</Instruction>
        <InputWrapper>
          <Input
            type="tel"
            placeholder=" "
            value={phone}
            onChange={e => setPhone(e.target.value)}
            maxLength={13}
          />
          <Hint>예) 010-0000-0000</Hint>
        </InputWrapper>
        <BottomButtons>
          {/* 이전 페이지로도 isProfileComplete 넘겨주고 싶다면 아래처럼! */}
          <NavButton onClick={() => navigate(-1, { state: { isProfileComplete } })}>
            이전으로
          </NavButton>
          <NavButton onClick={handleNext}>다음으로</NavButton>
        </BottomButtons>
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

const TopButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  padding: 6px 12px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 210px;
  height: 30%;
  padding-bottom:80px;
 
  margin: 100px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Instruction = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 100px;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;
const Input = styled.input`
  width: 100%;
  background-color: #F2F2F7;
  padding: 15px;
  font-size: 20px;
  margin-bottom: 12px;
  border-radius: 40px;
  box-sizing: border-box;
  border: 2px solid #C7C7CC;
`;

const Hint = styled.div`
  margin-left:10px;
  margin-top: 4px;
  font-size: 18px;
  color: #999;
  text-align: left;
`;

const BottomButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const NavButton = styled.button`
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
