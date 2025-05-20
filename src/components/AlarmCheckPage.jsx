// src/pages/AlertPage.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

const Hamburger = styled.div`
  font-size: 20px;
  cursor: pointer;
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
  width: 150px;
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
  padding: 12px 15px;
`;

const AlertTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;

const AlertDetail = styled.div`
  margin-top: 8px;
  font-size: 18px;
  color: #444;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  font-size: 18px;
  gap: 8px;
`;

function AlertToggleItem({ title, detail }) {
  const [open, setOpen] = useState(false);
  return (
    <AlertItem>
      <AlertTitle onClick={() => setOpen(!open)}>
        <span>{title}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </AlertTitle>
      {open && <AlertDetail>{detail}</AlertDetail>}
    </AlertItem>
  );
}

export default function AlertCheckPage() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <LeftSection>
            <LogoButton onClick={() => navigate('/')}>로고</LogoButton>
          </LeftSection>
          <RightButtons>
            <Button onClick={() => navigate('/Alarm')}>알림</Button>
            <Hamburger>&#9776;</Hamburger>
          </RightButtons>
        </TopBar>

        <HeaderBox>
          <HeaderText>알림을 확인하세요!</HeaderText>
          <HeaderText>캐릭터 이미지</HeaderText>
        </HeaderBox>

        <AlertList>
          {Array.from({ length: 8 }).map((_, index) => (
            <AlertToggleItem
              key={index}
              title={`알림 제목`}
              detail={`자세한 내용입니다. ${index + 1}`}
            />
          ))}
        </AlertList>

        <Pagination>
          <span>&lt;</span>
          <span>1 / 2</span>
          <span>&gt;</span>
        </Pagination>
      </ContentWrapper>
    </PageContainer>
  );
}
