import styled from 'styled-components';

export const LogoButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 12px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

export const BellButton = styled.button`
  padding: 0px 0px -1px 0px;
  border: none;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 16px;
  height: 48px;
`;

export const MypageWrap = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
`;

export const MypageButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  border-radius: 50%;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoButtons = styled.button`
  border: none;
  background: white;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  width: 146px;
`;

// ✅ AlertModal에서 쓰는 닫기 버튼 (공통화)
export const RoundedModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 70px;
  background: #ffd7e9;
  border-radius: 20px;
  cursor: pointer;
  align-self: center;
`;

export const RoundedModalButtonText = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
