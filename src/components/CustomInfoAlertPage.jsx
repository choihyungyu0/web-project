import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CharacterImg from "../assets/user.png";
import { CharacterWrap, CharacterImage } from "../styles/CommonImage";

export default function CustomInfoAlertPage() {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState([]);
  const [selectedAlert, setSelectedAlert] = useState(null);

  // 페이지네이션 관련
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  // 서버에서 데이터 불러오기
  useEffect(() => {
    fetch("http://15.164.99.25:8090/api/welfare/list")
    
      .then(res => res.json())
      .then(data => setAlerts(data));
  }, []);

  // 전체 페이지 개수 계산
  const totalPages = Math.ceil(alerts.length / ITEMS_PER_PAGE);

  // 현재 페이지에 보여줄 데이터만 자르기
  const pagedAlerts = alerts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleOpenModal = (alert) => setSelectedAlert(alert);
  const handleCloseModal = () => setSelectedAlert(null);

  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LeftSection>
            <LogoButton onClick={() => navigate("/")}>로고</LogoButton>
          </LeftSection>
          <RightButtons>
            <CharacterWrap>
              <CharacterImage
                onClick={() => navigate("/MYpage")}
                src={CharacterImg}
                alt="캐릭터"
              />
            </CharacterWrap>
          </RightButtons>
        </TopBar>

        <BackButtonWrapper>
          <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
        </BackButtonWrapper>

        <HeaderBox>
          <HeaderText>
            맞춤 생활 정보를
            <br />
            확인하세요!
          </HeaderText>
          <HeaderText>캐릭터 이미지</HeaderText>
        </HeaderBox>

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
              <InfoRow>
                <strong>담당부서</strong> <span>{selectedAlert.jurMnOn}</span>
              </InfoRow>
              <InfoRow>
                <strong>지원주기</strong> <span>{selectedAlert.sprtCycNm}</span>
              </InfoRow>
              <InfoRow>
                <strong>제공유형</strong> <span>{selectedAlert.srvPvsnNm}</span>
              </InfoRow>
              <InfoRow>
                <strong>문의처</strong> <span>{selectedAlert.rprsCtadr}</span>
              </InfoRow>
              <LinkButton
                onClick={() =>
                  window.open(selectedAlert.servDtlLink, "_blank")
                }
              >
                복지로 사이트로 이동해 자세히 보기
              </LinkButton>
            </ModalBox>
          </ModalOverlay>
        )}
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
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  margin: 16px 0 20px 0;
`;

const HeaderText = styled.div`
  padding: 8px;
  border: 1px solid black;
  font-weight: bold;
  text-align: center;
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
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
  font-size: 20px;
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
