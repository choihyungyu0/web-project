import React from 'react';
import styled from 'styled-components';

const SignupCompletePage = () => {
  return (
    <Wrapper>
      <Container>
        <LogoutButton>로그</LogoutButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
        </ImageBox>

        <MessageBox>
          <p><strong>홍길동님</strong></p>
          <p>회원가입을 축하드립니다!</p>
        </MessageBox>

        <GoLoginButton>로그인하러 가기</GoLoginButton>
      </Container>
    </Wrapper>
  );
};

export default SignupCompletePage;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const Container = styled.div`
  width: 100%;
  max-width: 464px;
  min-height: 700px;  /* ✅ 최소 높이 확보 */
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

const MessageBox = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.6;
  margin: 30px 0;
`;

const GoLoginButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;
