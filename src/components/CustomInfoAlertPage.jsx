import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StyledRemoteImage from '../styles/RemoteImage';
import { MypageWrap, MypageButton, LogoButtons, BellButton } from '../styles/CommonButtons';
import { SoftSpeechBubble } from '../styles/SoftSpeechBubble';
import AlertModal from '../styles/AlertModal'; // ✅ 모달 컴포넌트 import

export default function CustomInfoAlertPage() {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState([]);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [showModal, setShowModal] = useState(false); // ✅ 모달 열림 여부

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    fetch("https://knowhow.it.com/api/welfare/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("서버 오류: " + res.status);
        return res.json();
      })
      .then(data => setAlerts(data))
      .catch(error => {
        console.error("fetch 에러:", error);
        alert("서버에서 데이터를 가져오지 못했습니다: " + error.message);
      });
  }, []);

  const totalPages = Math.ceil(alerts.length / ITEMS_PER_PAGE);
  const pagedAlerts = alerts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );


  const handleOpenModal = (alert) => setSelectedAlert(alert);
  const handleCloseModal = () => {
    setSelectedAlert(null);
    setShowModal(false); // ✅ Bell 버튼 모달 닫기
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LeftSection>
            <LogoButtons onClick={() => navigate('/')}>
              <StyledRemoteImage imageKey="Logo_0" alt="로고" />
            </LogoButtons>
          </LeftSection>
          <RightButtons>
            <BellButton onClick={() => setShowModal(true)}>
              <StyledRemoteImage imageKey="Bell_0" alt="알림" />
            </BellButton>
            <MypageWrap>
              <MypageButton onClick={() => navigate('/Mypage')}>
                <StyledRemoteImage imageKey="Mypage_0" alt="마이페이지" />
              </MypageButton>
            </MypageWrap>
          </RightButtons>
        </TopBar>

        <BackButtonWrapper>
          <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
        </BackButtonWrapper>

        <QuestionRow>
              <SoftSpeechBubble style={{ minWidth: 240, fontSize: 28 }}>
                            <Text>맞춤 생활 정보를 확인해보세요!</Text>
                          </SoftSpeechBubble>
          <ImageBox>
            <StyledRemoteImage imageKey="LearningChoicePageCharacter_0" alt="캐릭터" />
          </ImageBox>
        </QuestionRow>

        <AlertList>
          {pagedAlerts.map((item, idx) => (
            <AlertItem key={idx}>
              <CategoryText>
                {item.intrsThemaArray
                  ? item.intrsThemaArray.split(",")[0].trim()
                  : ""}
              </CategoryText>
              <ContentText>{item.servNm}</ContentText>
              <DetailButton onClick={() => handleOpenModal(item)}>
                자세히 보기
              </DetailButton>
            </AlertItem>
          ))}
        </AlertList>

        <Pagination>
          <span
            style={{
              cursor: currentPage > 1 ? "pointer" : "default",
              opacity: currentPage > 1 ? 1 : 0.3
            }}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            &lt;
          </span>
          <span>{currentPage} / {totalPages}</span>
          <span
            style={{
              cursor: currentPage < totalPages ? "pointer" : "default",
              opacity: currentPage < totalPages ? 1 : 0.3
            }}
            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          >
            &gt;
          </span>
        </Pagination>

        {/* 기존 상세 모달 */}
        {selectedAlert && (
          <ModalOverlay onClick={handleCloseModal}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
              <TagRow>
                {selectedAlert.intrsThemaArray &&
                  selectedAlert.intrsThemaArray.split(",").map((theme, i) => (
                    <Tag key={i}>{theme.trim()}</Tag>
                  ))}
              </TagRow>
              <Title>{selectedAlert.servNm}</Title>
              <Description>{selectedAlert.servDgst}</Description>
              <InfoRow><strong>담당부서</strong><span>{selectedAlert.jurMnOn}</span></InfoRow>
              <InfoRow><strong>지원주기</strong><span>{selectedAlert.sprtCycNm}</span></InfoRow>
              <InfoRow><strong>제공유형</strong><span>{selectedAlert.srvPvsnNm}</span></InfoRow>
              <InfoRow><strong>문의처</strong><span>{selectedAlert.rprsCtadr}</span></InfoRow>
              <LinkButton onClick={() => window.open(selectedAlert.servDtlLink, "_blank")}>
                복지로 사이트로 이동해 자세히 보기
              </LinkButton>
            </ModalBox>
          </ModalOverlay>
        )}

        {/* ✅ Bell 버튼용 AlertModal */}
        {showModal && <AlertModal onClose={handleCloseModal} />}
      </ContentWrapper>
    </PageContainer>
  );
}


// styled-components ------------------------------------

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
  width: 100%;
  height: 100%;
  max-width: 464px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  text-align: center;
  position: relative;
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ImageBox = styled.div`
   width: 100px;
  height: 100px;
 
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

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DetailButton = styled.button`
  background: none;
  border: 1.5px solid #f982ae;
  color: #f982ae;
  font-size: 13px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
  margin-left: auto;
  &:hover {
    background: #ffeaf4;
  }
`;

const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 16px;
`;

const LogoButton = styled(Button)`
  font-weight: bold;
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



const QuestionRow = styled.div`
  display: flex;
  justify-content: flex-end;
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


const AlertList = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlertItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 20px 15px;
  display: flex;          
  align-items: center;  
  font-size: 0;
  gap: 16px;
`;

const CategoryText = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: inline-block;
  margin-right: 8px;
`;

const ContentText = styled.span`
  font-size: 17px;
  flex: 1;
  text-align: left;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  font-size: 18px;
  gap: 12px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 448px;
  max-width: 95vw;
  height: 612px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TagRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 6px 12px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 12px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 12px;
  word-break: keep-all;
`;

const Description = styled.div`
  color: #555;
  font-size: 18px;
  line-height: 1.6;
  word-break: keep-all;
  margin-bottom: 16px;
`;

const InfoRow = styled.div`
  font-size: 18px;
  margin: 8px 0;
  word-break: keep-all;
  display: flex;
  justify-content: space-between;
`;

const LinkButton = styled.button`
  margin-top: 20px;
  background: #f1f1f1;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  text-align: center;
`;
