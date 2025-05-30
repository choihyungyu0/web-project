import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../styles/SignupContext'; // Context import


const LoginComplete = () => {
  const navigate = useNavigate();
  const { signUpData } = useSignUp();

  // 서버에 회원가입 정보 POST
  const handleSendData = async () => {
    try {
      const response = await fetch("http://3.86.194.222:3000/api/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData), // 모든 회원가입 정보 전송
      });
      const data = await response.json();
      if (response.status === 201 || response.status === 200) {
        alert(data.message || "회원가입이 완료되었습니다!");
        navigate('/MainLogin');
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
        <LogoutButton onClick={() => navigate('/')}>로고</LogoutButton>

        <ImageBox>
          <p>캐릭터 이미지</p>
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
  max-width: 300px;
  height: 300px;
  background-color: #eee;
  margin: 100px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
`;

const MessageBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
  margin: 30px 0;
`;

const GoLoginButton = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;
