import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BirthdaySelectPage = () => {
  const navigate = useNavigate();

  // ✅ 년/월/일 상태
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  // ✅ 연도 리스트
  const years = Array.from({ length: 2024 - 1900 + 1 }, (_, i) => 1900 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Wrapper>
      <Container>
        <LogoutButton onClick={() => navigate('/')}>로그</LogoutButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
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
          <NavButton onClick={() => navigate('/Gender')}>이전으로</NavButton>
          <NavButton onClick={() => navigate('/Email', { state: { year, month, day } })}>
            다음으로
          </NavButton>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
};

export default BirthdaySelectPage;

// 💄 스타일 정의
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
  margin: 100px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
`;

const QuestionText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`;

const SelectGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 20px 0 40px;
`;

const Select = styled.select`
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const NavButton = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: white;
  border: 1px solid black;
  flex: 1;
  border-radius: 4px;
  cursor: pointer;
`;
