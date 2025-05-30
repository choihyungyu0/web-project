
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 회원가입 단계별 페이지 등 import
import WelcomePage from './components/WelcomePage';
import CaptureGuidePage from './components/CaptureGuidePage';
import LearningChoicePage from './components/LearningChoicePage';
import BirthdaySelectPage from './components/Checkbirthday';
import LoginForm from './components/CheckEmail';
import PhoneNumberPage from './components/Checknumber';
import LoginComplete from './components/LoginComplete';
import MainLogin from './components/MainLoginPage';
import MenuChoicePage from './components/MenuChoicePage';
import CaptureStartPage from './components/CaptureStart';
import CaptureCompletePage from './components/CaptureComplete';
import CheckName from './components/CheckName';
import CheckArea from './components/CheckArea';
import CustomInfoAlertPage from './components/CustomInfoAlertPage';
import Mypage from './components/Mypage';

// Context Provider import!
import { SignUpProvider } from './styles/SignupContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SignUpProvider>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Area" element={<CheckArea />} />
        <Route path="/Name" element={<CheckName />} />
        <Route path="/CaptureComplete" element={<CaptureCompletePage />} />
        <Route path="/CaptureStart" element={<CaptureStartPage />} />
        <Route path="/Menu" element={<MenuChoicePage />} />
        <Route path="/MainLogin" element={<MainLogin />} />
        <Route path="/LoginComplete" element={<LoginComplete />} />
        <Route path="/Number" element={<PhoneNumberPage />} />
        <Route path="/Email" element={<LoginForm />} />
        <Route path="/Birthday" element={<BirthdaySelectPage />} />
        <Route path="/CaptureGuide" element={<CaptureGuidePage />} />
        <Route path="/CustomInfo" element={<CustomInfoAlertPage />} />
        <Route path="/Learning" element={<LearningChoicePage />} />
      </Routes>
    </Router>
  </SignUpProvider>
);

reportWebVitals();
