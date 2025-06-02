// src/components/RemoteImage.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; // ← styled import 필요!

const RemoteImage = ({ imageKey, alt, ...props }) => {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (!imageKey) return;
    fetch("https://knowhow.it.com/api/contents/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: imageKey }),
    })
      .then(res => res.json())
      .then(data => setImgUrl(data.url))
      .catch(() => setImgUrl(null));
  }, [imageKey]);

  // children만 완전히 props에서 제거!
  // children === undefined일 때도 img에 절대 전달하지 않도록!
  const { children, dangerouslySetInnerHTML, ...rest } = props;

  if (!imgUrl) return <span>이미지 없음</span>;
  return <img src={imgUrl} alt={alt} {...rest} />; // ...rest만 img에 전달
};


const StyledRemoteImage = styled(RemoteImage)`
  width: 100%;
  height: 100%;
  border: none;
`;

export default StyledRemoteImage; // 기본 export
export { StyledRemoteImage as RemoteImage }; // 전역 import용 export
