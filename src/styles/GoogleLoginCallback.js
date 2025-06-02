import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GoogleLoginCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const isProfileComplete = params.get('isProfileComplete');

    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('isProfileComplete', isProfileComplete);

      if (isProfileComplete === 'true') {
        navigate('/Menu', { replace: true }); // 이미 추가정보 입력 완료된 사용자 → 메인 페이지로 이동
      } else {
        navigate('/Name', { 
            replace: true,
            state: { isProfileComplete }   // ← 이렇게 추가!
          }); // 구글 로그인 첫 사용자 → 추가정보 입력 페이지로 이동
      }
    } else {
      alert('로그인 실패. 다시 시도해주세요.');
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  return null; // 아무것도 렌더링하지 않음
};

export default GoogleLoginCallback;