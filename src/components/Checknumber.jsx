import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export default function PhoneNumberPage() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <TopButton>로그인</TopButton>

        <CharacterBox>캐릭터 이미지</CharacterBox>

        <Instruction>전화번호를 입력해주세요!</Instruction>

        <InputWrapper>
          <Input type="tel" placeholder="예) 000-0000-0000" />
          <Hint>예) 000-0000-0000</Hint>
        </InputWrapper>

        <BottomButtons>
          <NavButton>이전으로</NavButton>
          <NavButton>다음으로</NavButton>
        </BottomButtons>
      </PageWrapper>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #f9f9f9; // ✅ 회색 배경
  }
`;

const PageWrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 16px;
  background: #fff;         // ✅ 흰색 콘텐츠 박스
  min-height: 100vh;
`;

const TopButton = styled.button`
  border: 1px solid #000;
  background-color: white;
  padding: 6px 12px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CharacterBox = styled.div`
    width: 312px;
  height: 312px;
  padding: 140px 97px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  isolation: isolate;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin: 40px auto 20px;

`;

const Instruction = styled.div`
  text-align: center;
  font-size: 16px;
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
  font-size: 16px;
  box-sizing: border-box;
`;

const Hint = styled.div`
  margin-top: 4px;
  font-size: 12px;
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
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
