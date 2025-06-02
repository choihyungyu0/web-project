import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledRemoteImage from '../styles/RemoteImage';
import { LogoButtons, MypageWrap, MypageButton } from '../styles/CommonButtons';
import { BellButton } from '../styles/CommonButtons';
import AlertModal from '../styles/AlertModal'; // ✅ 모달 컴포넌트 import

const CaptureGuidePage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // ✅ 모달 열림 여부
    const [selectedAlert, setSelectedAlert] = useState(null);

  const handleGoLearning = () => {
    navigate('/Smartphone', { state: { carrotAfter: true } });
  }

  const handleOpenModal = (alert) => setSelectedAlert(alert);
  const handleCloseModal = () => {
    setSelectedAlert(null);
    setShowModal(false); // ✅ Bell 버튼 모달 닫기
  };

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <LogoButtons onClick={() => navigate('/Menu')}>
            <StyledRemoteImage imageKey="Logo_0" alt="로고"/>
          </LogoButtons>
          <RightButtons>
            <BellButton onClick={() => setShowModal(true)}>
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
        <BackArrow onClick={() => navigate('/CaptureGuideFourth')}>❮</BackArrow>
        <ImageBox>
          <StyledRemoteImage imageKey="CaptureCompleteCharacter_0" alt="캐릭터" />
        </ImageBox>
        <Description>
          &lt;사진찍기&gt;를<br />
          모두 배웠어요!
        </Description>
        <StartButton onClick={handleGoLearning}>다른 공부하러 가기</StartButton>
        {showModal && <AlertModal onClose={handleCloseModal} />}
      </Container>
    </Wrapper>
  );
};

export default CaptureGuidePage;

// styled-components 이하 동일
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const RightButtons = styled.div`
  display: flex;
`;

const BackArrow = styled.div`
  font-size: 28px;
  cursor: pointer;
  margin: 20px 0;
  align-self: flex-start;  
`;

const ImageBox = styled.div`
  width: 384px;
  height: 312px;
  background-color: #eee;
  margin: auto auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 40px 0 40px;
  line-height: 1.6;
`;

const StartButton = styled.button`
  width: 236px;
  height: 72px;
  background: #ff69b4;
  color: #fff;
  border: none;
  border-radius: 14px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.1s;
  margin:auto;
  &:hover {
    opacity: 0.92;
  }
`;
