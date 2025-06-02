import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가!
import { useSignUp } from '../styles/SignupContext'; // Context import
import StyledRemoteImage from '../styles/RemoteImage'; // RemoteImage import
import { LogoButton } from '../styles/CommonButtons'; // 로고 버튼 import

const BirthdaySelectPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ← 추가
  const { signUpData, updateSignUpData } = useSignUp();

  // isProfileComplete 값 받기 (이전 페이지에서 넘어옴)
  const isProfileComplete = location.state?.isProfileComplete;

  // Context에서 이전 값이 있으면 불러오고, 없으면 빈 값
  const [year, setYear] = useState(signUpData.birthDate?.slice(0, 4) || '');
  const [month, setMonth] = useState(signUpData.birthDate?.slice(5, 7) || '');
  const [day, setDay] = useState(signUpData.birthDate?.slice(8, 10) || '');

  // 연도/월/일 리스트
  const years = Array.from({ length: 2024 - 1900 + 1 }, (_, i) => 1900 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleNext = () => {
    if (!year || !month || !day) {
      alert('생년월일을 모두 선택해 주세요.');
      return;
    }
    // yyyy-mm-dd 형태로 저장
    const birthDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    updateSignUpData({ birthDate });
    // 다음 페이지로 isProfileComplete 같이 넘김!
    navigate('/Number', { state: { isProfileComplete } });
  };

  const handlePrev = () => {
    // 이전 페이지로도 isProfileComplete 넘겨주고 싶으면 아래처럼!
    navigate(-1, { state: { isProfileComplete } });
  };

  return (
    <Wrapper>
      <Container>
        <LogoButton onClick={() => navigate('/Welcome')}>
          <StyledRemoteImage imageKey="Logo_0" alt="로고" />
        </LogoButton>
        <ImageBox>
          <StyledRemoteImage imageKey="CheckBirthdayCharacter_0" alt="캐릭터" />
        </ImageBox>

        <QuestionText>생년월일을 알려주세요!</QuestionText>

        <SelectGroup>
          <Select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">년</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}년</option>
            ))}
          </Select>
          <Select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">월</option>
            {months.map((m) => (
              <option key={m} value={m}>{String(m).padStart(2, '0')}월</option>
            ))}
          </Select>
          <Select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">일</option>
            {days.map((d) => (
              <option key={d} value={d}>{String(d).padStart(2, '0')}일</option>
            ))}
          </Select>
        </SelectGroup>

        <ButtonGroup>
          <NavButton onClick={handlePrev}>이전으로</NavButton>
          <NavButton onClick={handleNext}>다음으로</NavButton>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
};

export default BirthdaySelectPage;

// ---- styled-components 아래는 동일하게 사용 ----


// ---- styled-components 그대로 ----
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
  width: 100%;
  height: 100%;
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
 max-width: 198px;
  height: 30%;

  margin: 100px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:80px;
  
`;

const QuestionText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 22px 0;
  margin-bottom: 114px;
`;

const SelectGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 37px 0 80px;
`;

const Select = styled.select`
  padding: 10px 16px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
 display: flex;
   justify-content: center;
  gap: 16px;
  width: 100%;
  margin-top: 11px;
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
   padding: 15px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin: 3px;
`;
