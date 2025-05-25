const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3001", "http://3.86.194.222:3001"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // ✅ 반드시 있어야 preflight 대응됨
app.use(express.json());

app.post("/api/auth/signup", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "이메일과 비밀번호를 입력해주세요." });
  }
  users.push({ email, password });
  console.log(users);
  res.status(201).json({ message: "회원가입 성공!" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("서버 실행 중: http://localhost:3000");
});
