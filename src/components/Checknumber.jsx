import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../styles/SignupContext';

export default function PhoneNumberPage() {
  const navigate = useNavigate();
  const { signUpData, updateSignUpData } = useSignUp();

  // Context에 저장된 값으로 초기화
  const [phone, setPhone] = useState(signUpData.phone || '');

  const handleNext = () => {
    // 형식 검사 (간단히 9자리 이상만 체크, 원하는 대로 수정 가능)
    if (!/^0\d{1,2}-\d{3,4}-\d{4}$/.test(phone)) {
      alert('올바른 전화번호 형식으로 입력해주세요! (예: 010-1234-5678)');
      return;
    }
    updateSignUpData({ phone });
    navigate('/Area');
  };

  return (
    <Wrapper>
      <Container>
        <TopButton onClick={() => navigate('/')}>로고</TopButton>

        <CharacterBox>캐릭터 이미지</CharacterBox>

        <Instruction>전화번호를 입력해주세요!</Instruction>

        <InputWrapper>
          <Input
            type="tel"
            placeholder="예) 010-0000-0000"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            maxLength={13}
          />
          <Hint>예) 010-0000-0000</Hint>
        </InputWrapper>

        <BottomButtons>
          <NavButton onClick={() => navigate(-1)}>이전으로</NavButton>
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

const CharacterBox = styled.div`
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

const Instruction = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #333;
  font-size: 18px;
  box-sizing: border-box;
`;

const Hint = styled.div`
  margin-top: 4px;
  font-size: 18px;
  color: #999;
`;

const BottomButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const NavButton = styled.button`
  padding: 12px 24px;
  border: 1px solid #333;
  background: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
