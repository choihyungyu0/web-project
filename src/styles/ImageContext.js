// ./styles/ImageContext.js
import React, { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [images, setImages] = useState({});

  // key 예시: 'Logo_0'
  const fetchImage = async (key) => {
    // 캐싱: 이미 있으면 재사용
    if (images[key]) return images[key];

    const res = await fetch("https://knowhow.it.com/api/contents/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });
    if (!res.ok) throw new Error("서버 에러");
    const data = await res.json();

    setImages((prev) => ({ ...prev, [key]: data.url }));
    return data.url;
  };

  return (
    <ImageContext.Provider value={{ images, fetchImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  return useContext(ImageContext);
}
