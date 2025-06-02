import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSignUp } from '../styles/SignupContext';
import StyledRemoteImage from '../styles/RemoteImage';
import { LogoButton } from '../styles/CommonButtons'; // 로고 버튼 스타일 import

const LoginComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signUpData } = useSignUp();

  // isProfileComplete 값 받기
  const isProfileComplete = location.state?.isProfileComplete;

  // 회원가입 정보 전송 함수 (POST 또는 PATCH)
  const handleSendData = async () => {
    try {
      console.log("회원가입 정보:", signUpData);

      let url = "https://knowhow.it.com/api/auth/signup";
      let method = "POST";
      let headers = { 'Content-Type': 'application/json' };

      // 구글 추가정보(처음 소셜 사용자)일 경우 PATCH와 엔드포인트, 토큰 변경
      if (isProfileComplete === 'false') {
        url = "https://knowhow.it.com/api/auth/additional-info";
        method = "PATCH";
        const token = localStorage.getItem('token');
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      }

      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(signUpData),
      });

      // 빈 응답/HTML 응답 예외처리
      const text = await response.text();
      let data = {};
      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          data = { message: text };
        }
      }

      if (response.status === 201 || response.status === 200) {
        alert(data.message || "회원가입이 완료되었습니다!");
        // 경로 분기
        if (isProfileComplete === 'false') {
          navigate('/Menu');       // 구글 추가정보 → 메인 메뉴
        } else {
          navigate('/MainLogin');  // 일반 회원가입 → 로그인페이지
        }
      } else {
        alert(data.message || "회원가입 실패! 입력값을 확인해주세요.");
      }
    } catch (error) {
      alert('회원가입 요청에 실패했습니다: ' + error.message);
    }
  };

  return (
    <Wrapper>
      <Container>
        <LogoButton onClick={() => navigate('/Welcome')}>
          <StyledRemoteImage imageKey="Logo_0" alt="로고" />
        </LogoButton>
        <ImageBox>
          <StyledRemoteImage imageKey="LoginCompleteCharacter_0" alt="캐릭터" />
        </ImageBox>
        <MessageBox>
          <p><strong>{signUpData.name || "회원"}님</strong></p>
          <p>회원가입을 축하드립니다!</p>
        </MessageBox>
        <GoLoginButton onClick={handleSendData}>
          로그인하러 가기
        </GoLoginButton>
      </Container>
    </Wrapper>
  );
};

export default LoginComplete;

// ----- styled-components 부분 그대로 -----
const Wrapper = styled.div`
  width: 100%;
  height: 100vh; /* ✅ 정확히 한 화면 높이 */
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
  max-width: 270px;
  height: 30%;
  padding-bottom:100px;
 
  margin: 100px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const MessageBox = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.6;
  margin-bottom:106px;
`;

const GoLoginButton = styled.button`
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
