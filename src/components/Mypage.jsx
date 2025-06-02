import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledRemoteImage from '../styles/RemoteImage';
import { LogoButtons, MypageWrap, MypageButton } from '../styles/CommonButtons';
import { SoftSpeechBubble } from '../styles/SoftSpeechBubble';
import { useSignUp } from '../styles/SignupContext';
import { BellButton } from '../styles/CommonButtons';
import AlertModal from '../styles/AlertModal'; // 실제 파일 경로에 맞게 수정
export default function MyPage() {
  const navigate = useNavigate();
  const { signUpData } = useSignUp();
const [showModal, setShowModal] = useState(false);
  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LogoButtons onClick={() => navigate('/')}>
            <StyledRemoteImage imageKey="Logo_0" alt="로고"/>
          </LogoButtons>
          <RightButtons>
            <BellButton onClick={() => setShowModal(true)}>
            <StyledRemoteImage imageKey="Bell_0" alt="알림" />
          </BellButton>
            <MypageWrap>
              <MypageButton
                onClick={() => navigate('/Mypage')}
              >            
              <StyledRemoteImage imageKey="Mypage_0" alt="마이페이지지"/>
              </MypageButton>
            </MypageWrap>
          </RightButtons>
        </TopBar>

        <BackButtonWrapper>
          <BackButton onClick={() => navigate('/Menu')}>처음화면으로 가기</BackButton>
        </BackButtonWrapper>

        <HeaderBox>
              <SoftSpeechBubble style={{ minWidth: 240, fontSize: 28 }}>
              {signUpData.name || '회원'}님의 화면이에요.
              </SoftSpeechBubble>
        <ImageBox>
          <StyledRemoteImage imageKey="SmartphoneGuideCharacter_0" alt="캐릭터" />
        </ImageBox>
        </HeaderBox>

        <IconGrid>
          <IconButton>
            <IconBackground>
          <StyledRemoteImage imageKey="MypageBell_0" alt="마이페이지 알림" style={{ width: "80px", height: "80px" }} />
          <Label>알림</Label>
            </IconBackground>
          </IconButton>
          <IconButton>
            <IconBackground>
             <StyledRemoteImage imageKey="MypageUser_0" alt="내 정보 관리" style={{ width: "80px", height: "80px" }} /> 
              <Label>내 정보 관리</Label>
            </IconBackground>
          </IconButton>
          <IconButton>
            <IconBackground>
             <StyledRemoteImage imageKey="MypagePoint_0" alt="내 포인트" style={{ width: "80px", height: "80px" }} /> 
              <Label>내 포인트</Label>
            </IconBackground>
          </IconButton>
          <IconButton>
            <IconBackground>
             <StyledRemoteImage imageKey="MypageEtc_0" alt="기타" style={{ width: "80px", height: "80px" }} /> 
              <Label>기타</Label>
            </IconBackground>
          </IconButton>
        </IconGrid>

  {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </ContentWrapper>
    </PageContainer>
  );
}

const Box = styled.div`
  width: 46px;
  height: 46px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 16px;
  height: 48px;
  width: 134px;
`;

const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 464px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 14px;
`;

const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const BackButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 22px;
  gap: 10px;
  font-weight: bold;
  width: 156px;
  height: 56px;
  background: rgba(120, 120, 128, 0.16);
  border-radius: 20px;
  font-size: 14px;
  line-height: 48px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
`;

const Message = styled.div`
  position: relative;
  width: 250px;
  height: 80px;
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #ff3593;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  margin-left: 70px;
  margin-top: 25px;
  font-family: 'Pretendard Variable', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 48px;
  color: #000;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 80%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: #ff3593 transparent transparent transparent;
  }
`;

const ImageBox = styled.div`
   width: 100px;
  height: 100px;
  background-color:#eee;

  margin-top:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-left:18px;
  margin-top:50px;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  justify-items: center;
  margin: 20px 0;
`;

const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconBackground = styled.div`
  width: 144px;
  height: 148px;
  background: #ffcfe6;
  border-radius: 40px;
  margin-bottom: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
