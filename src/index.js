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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
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
        <Route path="/Alarm" element={<AlarmCheckPage />} />
        <Route path="/Learning" element={<LearningChoicePage />} />
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
