import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WelcomePage from './components/WelcomePage';
import CaptureGuidePage from './components/CaptureGuidePage';
import LearningChoicePage from './components/LearningChoicePage';
import AlarmCheckPage from './components/AlarmCheckPage';
import GenderSelectPage from './components/Checkgender';
import BirthdaySelectPage from './components/Checkbirthday';
import LoginForm from './components/CheckEmail';
import PhoneNumberPage from './components/Checknumber';
import SignupCompletePage from './components/LoginComplete';
import MainLogin from './components/MainLoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/MainLogin" element={<MainLogin />} />
        <Route path="/LoginComplete" element={<SignupCompletePage />} />
        <Route path="/Number" element={<PhoneNumberPage />} />
        <Route path="/Email" element={<LoginForm />} />
        <Route path="/Birthday" element={<BirthdaySelectPage />} />
        <Route path="/Gender" element={<GenderSelectPage />} />
        <Route path="/Capture" element={<CaptureGuidePage />} />
        <Route path="/Alarm" element={<AlarmCheckPage />} />
        <Route path="/Learning" element={<LearningChoicePage />} />
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
