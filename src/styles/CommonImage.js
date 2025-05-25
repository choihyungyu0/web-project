import styled from 'styled-components';

export const CharacterWrap = styled.div`
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

export const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
