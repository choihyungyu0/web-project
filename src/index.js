import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUpProvider } from './styles/SignupContext';
import { ImageProvider } from './styles/ImageContext';
import Splash from './components/Splash';
import WelcomePage from './components/WelcomePage';
import LearningChoicePage from './components/LearningChoicePage';
import BirthdaySelectPage from './components/Checkbirthday';
import LoginForm from './components/CheckEmail';
import PhoneNumberPage from './components/Checknumber';
import LoginComplete from './components/LoginComplete';
import MainLogin from './components/MainLoginPage';
import MenuChoicePage from './components/MenuChoicePage';
import CaptureStartPage from './components/CaptureStart';
import CaptureGuideFirst from './components/CaptureGuideFirst';
import CaptureGuideSecond from './components/CaptureGuideSecond';
import CaptureGuideThird from './components/CaptureGuideThird';
import CaptureGuideFourth from './components/CaptureGuideFourth';
import CaptureCompletePage from './components/CaptureComplete';
import CheckName from './components/CheckName';
import CheckArea from './components/CheckArea';
import CustomInfoAlertPage from './components/CustomInfoAlertPage';
import Mypage from './components/Mypage';
import SmartphoneGuide from './components/SmartphoneGuide';
import GoogleLoginCallback from "./styles/GoogleLoginCallback";
import ProfileSetupPage from './components/ProfileSetupPage';

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SignUpProvider>
    <ImageProvider>
    <Router>
      <Routes>
        {/* Splash → Welcome 만 애니메이션 적용 */}
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/oauth-callback" element={<GoogleLoginCallback />} />
        <Route path="/profile-setup" element={<ProfileSetupPage />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/oauth/callback" element={<GoogleLoginCallback />} />
        <Route path="/oauth2/success" element={<GoogleLoginCallback />} />
        <Route path="/Smartphone" element={<SmartphoneGuide />} />
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
        <Route path="/CaptureGuideFirst" element={<CaptureGuideFirst />} />
        <Route path="/CaptureGuideSecond" element={<CaptureGuideSecond />} />
        <Route path="/CaptureGuideThird" element={<CaptureGuideThird />} />
        <Route path="/CaptureGuideFourth" element={<CaptureGuideFourth />} />
        <Route path="/CustomInfo" element={<CustomInfoAlertPage />} />
        <Route path="/Learning" element={<LearningChoicePage />} />
      </Routes>
    </Router>
    </ImageProvider>
  </SignUpProvider>
);

reportWebVitals();
