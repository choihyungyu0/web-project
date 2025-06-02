import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가!
import { useSignUp } from '../styles/SignupContext'; // Context import
import StyledRemoteImage from '../styles/RemoteImage'; // RemoteImage import
import { LogoButton } from '../styles/CommonButtons'; // 로고 버튼 import

const CheckArea = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ← 추가!
  const { signUpData, updateSignUpData } = useSignUp();

  // PhoneNumberPage에서 받은 isProfileComplete 값 받기
  const isProfileComplete = location.state?.isProfileComplete;

  // 기존 값 있으면 불러오기 (뒤로 갔다 와도 유지)
  const [region, setRegion] = useState(signUpData.region || '');

  const regions = [
    '서울', '부산', '대구', '인천', '광주', '대전', '울산',
    '세종', '경기', '강원', '충북', '충남', '전북',
    '전남', '경북', '경남', '제주'
  ];

  const handleNext = () => {
    if (!region) {
      alert('지역을 선택해주세요!');
      return;
    }
    updateSignUpData({ region });
    // LoginComplete 페이지로 isProfileComplete 값도 함께 넘김
    navigate('/LoginComplete', { state: { isProfileComplete } });
  };

  return (
    <Wrapper>
      <Container>
        <LogoButton onClick={() => navigate('/Welcome')}>
          <StyledRemoteImage imageKey="Logo_0" alt="로고" />
        </LogoButton>
        <ImageBox>
          <StyledRemoteImage imageKey="CheckAreaCharacter_0" alt="캐릭터" />
        </ImageBox>
        <QuestionText>
          거주하고 계신 지역을 <br />
          선택해주세요!
        </QuestionText>
        <Select value={region} onChange={e => setRegion(e.target.value)}>
          <option value="">선택해주세요</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </Select>
        <ButtonGroup>
          {/* 이전 페이지로도 isProfileComplete 넘겨주고 싶다면 아래처럼! */}
          <NavButton onClick={() => navigate(-1, { state: { isProfileComplete } })}>이전으로</NavButton>
          <NavButton onClick={handleNext}>다음으로</NavButton>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
};

export default CheckArea;

// ===== styled-components =====
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
max-width: 219px;
  height: 40%;
  
 padding-bottom:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 20px;
`;

const QuestionText = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  line-height: 1.5;
  margin-bottom: 100px;
`;

const Select = styled.select`
  padding: 10px 16px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;

`;

const ButtonGroup = styled.div`
   display: flex;
   justify-content: center;
  gap: 22px;
  width: 100%;
  margin-top: 32px;
`;

const NavButton = styled.button`
display: flex;
  justify-content: center;
  width: 100%;
  gap: 16px;
  
  background: rgba(120, 120, 128, 0.2);
  width: 200px;
  border: 1px solid #000;
  padding: 15px 0;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  
`;
