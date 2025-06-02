import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import StyledRemoteImage from '../styles/RemoteImage'; // RemoteImage import
import { LogoButtons, MypageWrap, MypageButton, BellButton } from '../styles/CommonButtons'; // 로고 버튼, 마이페이지 버튼, 알림 버튼 import
import { SoftSpeechBubble } from '../styles/SoftSpeechBubble'; // SoftSpeechBubble import
import CarrotBefore from '../assets/CarrotBefore.png';
import CarrotAfter from '../assets/CarrotAfter.png'; // 새 이미지 import


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
  // state로 넘어온 값
  const carrotAfter = location.state?.carrotAfter;

  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LeftSection>
          <LogoButtons onClick={() => navigate('/')}>
            <StyledRemoteImage imageKey="Logo_0" alt="로고"/>
          </LogoButtons>
          </LeftSection>
          <RightButtons>
            <BellButton>
              <StyledRemoteImage imageKey="Bell_0" alt="알림"/>
            </BellButton>  
            <MypageWrap>
              <MypageButton
                onClick={() => navigate('/Mypage')}
              >            
              <StyledRemoteImage imageKey="Mypage_0" alt="마이페이지"/>
              </MypageButton>
            </MypageWrap>
          </RightButtons>
        </TopBar>

        <BackButtonWrapper>
          <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
        </BackButtonWrapper>

        <Content>
          <QuestionRow>
            <SpeechBubble>
              <Text>무엇을 배워볼까요?</Text>
            </SpeechBubble>
        <ImageBox>
          <StyledRemoteImage imageKey="CheckBirthdayCharacter_0" alt="캐릭터" />
        </ImageBox>
          </QuestionRow>
        </Content>

        <CarrotList>
          {carrotTexts.map((text, idx) => {
            // 위치와 패딩 설정
            let align = 'center';
            let paddingLeft = 0;
            if (idx === 0) align = 'right';
            if (idx === 1) { align = 'left'; paddingLeft = 200; }
            if (idx === 2) { align = 'left'; paddingLeft = 100; }
            if (idx === 3) align = 'left';
            if (idx === 4) { align = 'left'; paddingLeft = 100; }
            if (idx === 5) { align = 'left'; paddingLeft = 200; }
            if (idx === 6) align = 'right';

            // 첫 번째 당근만 이미지 변경
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
      </ContentWrapper>
    </PageContainer>
  );
}

export default SmartphoneGuide;

// ----------- styled-components -----------

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
   width: 100px;
  height: 100px;
  background-color:#eee;
  border: 2px solid black;
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

const SpeechBubble = styled.div`
    position: relative;
  width: 271px;
  height: 70px;
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #ff3593;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  margin-left:70px;
  
  font-family: 'Pretendard Variable', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 48px;
  color: #000;
 
  /* 꼬리 만들기 */
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

const Text = styled.div`
  font-size: 18px;
  text-align: center;
  
`;

const CharacterBox = styled.div`
  width: 100px;
  height: 100px;
  background-color:#eee;
  border: 2px solid black;
  margin-top:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: black;
  font-weight: bold;
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
