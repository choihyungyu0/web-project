import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate,useLocation} from 'react-router-dom';

const CheckArea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || ''; // 이전 페이지에서 넘어온 이름
  const [region, setRegion] = useState('');

  const regions = [
    '서울', '부산', '대구', '인천', '광주', '대전', '울산',
    '세종', '경기', '강원', '충북', '충남', '전북',
    '전남', '경북', '경남', '제주'
  ];

  return (
    <Wrapper>
      <Container>
        <LogoutButton onClick={() => navigate('/')}>로고</LogoutButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>
        <QuestionText>거주하고 계신 지역을 <br></br>선택해주세요!</QuestionText>
        <Select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">선택해주세요</option>
          {regions.map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </Select>

        <ButtonGroup>
          <NavButton onClick={() => navigate(-1)}>이전으로</NavButton>
          <NavButton onClick={() =>
            navigate('/LoginComplete', { state: { name } })}>
            다음으로
          </NavButton>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
};

export default CheckArea;

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
  max-width: 300px;
  height: 300px;
  background-color: #eee;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 20px;
`;

const QuestionText = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
`;


const Select = styled.select`
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

const NavButton = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 18px;
  border: 1px solid #000;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
`;
