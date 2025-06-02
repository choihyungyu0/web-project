// src/styles/SoftSpeechBubble.js
import React from 'react';
import styled from 'styled-components';

export function SoftSpeechBubble({ children, style }) {
  return (
    <SpeechBubbleWrap style={style}>
      <SpeechBubbleBox>
        {children}
      </SpeechBubbleBox>
      <SpeechBubbleTail
        width={54}
        height={22}
        viewBox="0 0 54 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 2 Q53 22 52 2"
          fill="#fff"
          stroke="#ff3593"
          strokeWidth="2"
        />
      </SpeechBubbleTail>
    </SpeechBubbleWrap>
  );
}

const SpeechBubbleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpeechBubbleBox = styled.div`
  width: 260px;
  min-height: 70px;
  background: #fff;
  border-radius: 20px;
  padding: 20px 10px 28px 10px;
  border: 2px solid #ff3593;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SpeechBubbleTail = styled.svg`
  margin-top: -3px;
  margin-left: 135px;
`;
