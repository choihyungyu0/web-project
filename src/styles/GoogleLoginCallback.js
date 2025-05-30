import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleLoginCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');
    const isProfileComplete = query.get('isProfileComplete');

    // 토큰 저장
    if (token) {
      localStorage.setItem('token', token);
    }

    // URL에서 쿼리스트링 제거 (replaceState)
    window.history.replaceState({}, document.title, window.location.pathname);

    // 분기 이동
    if (isProfileComplete === 'false') {
      navigate('/');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return <div>로그인 처리중...</div>;
}

export default GoogleLoginCallback;
