// src/components/RemoteImage.jsx
import React, { useEffect, useState } from 'react';

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

  if (!imgUrl) return <span>이미지 없음</span>;
  return <img src={imgUrl} alt={alt} {...props} />;
};

export default RemoteImage;
