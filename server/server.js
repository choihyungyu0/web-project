const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const users = []; // 메모리에 회원정보 저장 (테스트 용도)

const buildPath = path.join(__dirname, "../build");
console.log("=== 서버 실행: PM2, BUILD PATH:", buildPath, "===");

app.use(cors());
app.use(express.json()); // JSON 요청 바디 파싱!

// 회원가입 API (전체 데이터 받기)
app.post("/api/auth/signup", (req, res) => {
  const userData = req.body; // 프론트에서 보낸 전체 데이터

  // 콘솔에 전체 데이터 출력!
  console.log("=== 회원가입 요청 데이터 ===");
  console.log(userData); // 👈 여기서 모든 정보 확인 가능!

  // 이메일 중복 체크(간단 예시)
  if (users.some(u => u.email === userData.email)) {
    return res.status(409).json({
      status: "error",
      message: "이미 가입된 이메일입니다.",
    });
  }

  users.push(userData); // 메모리에 저장(테스트용)
  res.status(201).json({
    status: "success",
    message: "회원가입이 완료되었습니다.",
    user: userData // (응답에도 보내주면 프론트에서 확인용으로 좋음)
  });
});

// 로그인 API (이메일, 비밀번호 체크)
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  // 등록된 회원인지 확인
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // 실제 서비스라면 JWT 토큰 등을 발급해서 리턴!
    res.status(200).json({
      status: "success",
      message: "로그인 성공!",
      user: {
        name: user.name,
        email: user.email,
        // 필요하다면 다른 데이터도 추가
      },
      accessToken: "test-access-token" // 임시
    });
  } else {
    res.status(401).json({
      status: "error",
      message: "이메일 또는 비밀번호가 올바르지 않습니다.",
    });
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("서버 실행 중: http://localhost:3000");
});
