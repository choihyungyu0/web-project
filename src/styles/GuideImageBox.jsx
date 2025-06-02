import React from 'react';
import styled from 'styled-components';
import StyledRemoteImage from './RemoteImage';

const CaptureBoxWrapper = styled.div`
  width: 70%;
  aspect-ratio: 9 / 20;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  z-index: 1;
  max-height: 575px;
  max-width: 100%;
`;

export default function CaptureBox({ imageKey, alt = '', style = {} }) {
  return (
    <CaptureBoxWrapper>
      <StyledRemoteImage
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
          display: "block",
          ...style, // 추가 스타일 덮어쓰기 가능
        }}
        imageKey={imageKey}
        alt={alt}
      />
    </CaptureBoxWrapper>
  );
}
