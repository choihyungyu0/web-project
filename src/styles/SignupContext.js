import React, { createContext, useContext, useState } from 'react';

// Context 생성
const SignUpContext = createContext();

// Context 사용 Hook
export function useSignUp() {
  return useContext(SignUpContext);
}

// Provider 컴포넌트
export function SignUpProvider({ children }) {
  // 회원가입 정보 상태
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    birthDate: '',
    region: ''
  });

  // 상태 갱신 함수
  const updateSignUpData = (fields) => {
    setSignUpData((prev) => ({
      ...prev,
      ...fields
    }));
  };

  return (
    <SignUpContext.Provider value={{ signUpData, updateSignUpData }}>
      {children}
    </SignUpContext.Provider>
  );
}
