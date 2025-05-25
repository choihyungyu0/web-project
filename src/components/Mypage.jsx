import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CharacterImg from '../assets/user.png';
import { CharacterWrap, CharacterImage } from '../styles/CommonImage';

export default function MyPage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ContentWrapper>
        <TopBar>
          <Button onClick={() => navigate('/')}>로고</Button>
          <CharacterWrap>
            <CharacterImage src={CharacterImg} alt="캐릭터" />
          </CharacterWrap>
        </TopBar>
        <BackButtonWrapper>
          <BackButton onClick={() => navigate('/Menu')}>메인으로가기</BackButton>
        </BackButtonWrapper>

        <HeaderBox>
          <Message>**님의 화면이에요</Message>
          <CharBox>캐릭터 이미지</CharBox>
        </HeaderBox>

        <IconGrid>
          <IconButton>
            <IconBackground />
            <Label>알림</Label>
          </IconButton>
          <IconButton>
            <IconBackground />
            <Label>내 정보 관리</Label>
          </IconButton>
          <IconButton>
            <IconBackground />
            <Label>내 포인트</Label>
          </IconButton>
          <IconButton>
            <IconBackground />
            <Label>기타</Label>
          </IconButton>
        </IconGrid>

        <Pagination>
          <span>&lt;</span>
          <span>1 / 2</span>
          <span>&gt;</span>
        </Pagination>
      </ContentWrapper>
    </PageContainer>
  );
}
const PageContainer = styled.div`
  width: 100%;
  height: 100%;
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
  font-weight: bold;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  margin: 20px 0;
`;

const Message = styled.div`
  padding: 16px;
  border: 1px solid #000;
  font-weight: bold;
  font-size: 16px;
`;

const CharBox = styled.div`
  padding: 16px;
  border: 1px solid #000;
  font-size: 14px;
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
  width: 100px;
  height: 100px;
  background: #dcdcdc;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-size: 16px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  gap: 8px;
`;
