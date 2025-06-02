import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import StyledRemoteImage from '../styles/RemoteImage';
import { LogoButtons, MypageWrap, MypageButton, BellButton } from '../styles/CommonButtons';
import { SoftSpeechBubble } from '../styles/SoftSpeechBubble';
import CarrotBefore from '../assets/CarrotBefore.png';
import CarrotAfter from '../assets/CarrotAfter.png';
import AlertModal from '../styles/AlertModal'; // ✅ 모달 import


const carrotTexts = [
  "사진 찍기",
  "문자 보내기",
  "번호 저장하기",
  "어플 깔기",
  "전화 걸기",
  "서비스 준비중",
  "서비스 준비중"
];

function SmartphoneGuide() {
  const navigate = useNavigate();
  const location = useLocation();
  const carrotAfter = location.state?.carrotAfter;
  const [showModal, setShowModal] = useState(false); // ✅ 모달 상태
  
  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LeftSection>
            <LogoButtons onClick={() => navigate('/Menu')}>
              <StyledRemoteImage imageKey="Logo_0" alt="로고"/>
            </LogoButtons>
          </LeftSection>
          <RightButtons>
              <BellButton onClick={() => setShowModal(true)}>
                <StyledRemoteImage imageKey="Bell_0" alt="알림"/>
              </BellButton>
            <MypageWrap>
              <MypageButton onClick={() => navigate('/Mypage')}>
                <StyledRemoteImage imageKey="Mypage_0" alt="마이페이지"/>
              </MypageButton>
            </MypageWrap>
          </RightButtons>
        </TopBar>

        <BackButtonWrapper>
          <BackButton onClick={() => navigate('/Learning')}>뒤로가기</BackButton>
        </BackButtonWrapper>

        <Content>
          <QuestionRow>
            <SoftSpeechBubble
              width="287px"
              height="93px"
            >
              <span style={{ fontSize: "21px", fontWeight: 700 }}>
                스마트폰 사용법에 대해 <br />
                알아보아요!
              </span>
            </SoftSpeechBubble>
            <ImageBox>
              <StyledRemoteImage imageKey="SmartphoneGuideCharacter_0" alt="캐릭터" />
            </ImageBox>
          </QuestionRow>
        </Content>

        <CarrotList>
          {carrotTexts.map((text, idx) => {
            let align = 'center';
            let paddingLeft = 0;
            if (idx === 0) align = 'right';
            if (idx === 1) { align = 'left'; paddingLeft = 200; }
            if (idx === 2) { align = 'left'; paddingLeft = 100; }
            if (idx === 3) align = 'left';
            if (idx === 4) { align = 'left'; paddingLeft = 100; }
            if (idx === 5) { align = 'left'; paddingLeft = 200; }
            if (idx === 6) align = 'right';

            const carrotImg = idx === 0 && carrotAfter ? CarrotAfter : CarrotBefore;

            return (
              <CarrotRow key={idx} align={align} paddingLeft={paddingLeft}>
                <CarrotBubble
                  clickable={idx === 0}
                  onClick={idx === 0 ? () => navigate('/CaptureStart') : undefined}
                >
                  <StyledCarrot src={carrotImg} alt="당근" />
                  <CarrotText>{text}</CarrotText>
                </CarrotBubble>
              </CarrotRow>
            );
          })}
        </CarrotList>
        {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      </ContentWrapper>
    </PageContainer>
  );
}

export default SmartphoneGuide;

// styled-components (아래는 동일)
const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 464px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 0;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 16px;
`;

const ImageBox = styled.div`
  width: 108px;
  height: 120px;
  background-color:#eee;
  border:none;
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

const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  
`;

const BackButton = styled(Button)`
  font-weight: bold;
  /* Frame 2031 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 32px;
gap: 10px;

width: 147px;
height: 56px;

/* Fills/Secondary */
background: rgba(120, 120, 128, 0.16);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

const CarrotList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 30px;
  width: 100%;
`;

const CarrotRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ align }) =>
    align === 'right'
      ? 'flex-end'
      : align === 'left'
      ? 'flex-start'
      : 'center'};
  padding-left: ${({ paddingLeft }) => paddingLeft || 0}px;
`;

const CarrotBubble = styled.div`
  position: relative;
  width: 160px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  transition: transform 0.1s;
  &:active {
    ${({ clickable }) => clickable && `transform: scale(0.97);`}
  }
`;

const StyledCarrot = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const CarrotText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0; top: 0;
  display: flex;
  align-items: center;
  padding-left:27px;
  font-size: 16px;
  font-weight: bold;
  color: #444;
  text-align: center;
  pointer-events: none;
  user-select: none;
  line-height: 1.15;
`;
