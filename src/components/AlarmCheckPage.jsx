// src/pages/AlertPage.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 504px;
  margin: 0 auto;
  padding: 16px 12px;
  box-sizing: border-box;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  height: 48px;
`;

const Button = styled.button`
  padding: 4px 10px;
  border: 1px solid black;
  background: none;
  font-size: 13px;
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
  width: 140px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
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
  font-size: 14px;
  color: #444;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  font-size: 13px;
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
          <Button onClick={() => navigate('/')}>로그</Button>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Button>알림</Button>
            <div style={{ fontSize: "22px" }}>&#9776;</div>
          </div>
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