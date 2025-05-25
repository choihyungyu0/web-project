import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CharacterImg from "../assets/user.png";
import { CharacterWrap, CharacterImage } from "../styles/CommonImage";

export default function CustomInfoAlertPage() {
  const navigate = useNavigate();
  const [selectedAlert, setSelectedAlert] = useState(null);

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
          {alerts.map((item, idx) => (
            <AlertItem key={idx} onClick={() => handleOpenModal(item)}>
              <CategoryText>{item.category}</CategoryText>
              <ContentText>{item.content}</ContentText>
            </AlertItem>
          ))}
        </AlertList>

        <Pagination>
          <span>&lt;</span>
          <span>1 / 2</span>
          <span>&gt;</span>
        </Pagination>

        {selectedAlert && (
          <ModalOverlay onClick={handleCloseModal}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
              <TagRow>
                <Tag>카테고리</Tag>
                <Tag>카테고리</Tag>
                <Tag>카테고리</Tag>
              </TagRow>
              <Title>{selectedAlert.category}</Title>
              <Description>{selectedAlert.content}</Description>
              <InfoRow>
                <strong>담당부서</strong> <span>예시부서</span>
              </InfoRow>
              <InfoRow>
                <strong>지원주기</strong> <span>월 1회</span>
              </InfoRow>
              <InfoRow>
                <strong>제공유형</strong> <span>안내형</span>
              </InfoRow>
              <InfoRow>
                <strong>문의처</strong> <span>1234-5678</span>
              </InfoRow>
              <LinkButton>복지로 사이트로 이동해 자세히 보기</LinkButton>
            </ModalBox>
          </ModalOverlay>
        )}
      </ContentWrapper>
    </PageContainer>
  );
}

const alerts = [
  { category: "카테고리", content: "알림내용" },
  { category: "카테고리", content: "알림내용" },
  { category: "카테고리", content: "알림내용" },
  { category: "카테고리", content: "알림내용" },
  { category: "카테고리", content: "알림내용" },
  { category: "카테고리", content: "알림내용" },
];

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
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
  font-size: 0;
  cursor: pointer;
`;

const CategoryText = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: inline-block;
  margin-right: 8px;
`;

const ContentText = styled.span`
  font-size: 20px;
  display: inline-block;
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
  height: 612px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TagRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
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
