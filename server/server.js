const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const users = [];

const buildPath = path.join(__dirname, "../build");
console.log("=== 서버 실행: PM2, BUILD PATH:", buildPath, "===");

app.use(cors());
app.use(express.json());

// 회원가입 API
app.post("/api/auth/signup", (req, res) => {
  const userData = req.body;
  console.log("=== 회원가입 요청 데이터 ===");
  console.log(userData);

  if (users.some(u => u.email === userData.email)) {
    return res.status(409).json({
      status: "error",
      message: "이미 가입된 이메일입니다.",
    });
  }

  users.push(userData);
  res.status(201).json({
    status: "success",
    message: "회원가입이 완료되었습니다.",
    user: userData
  });
});

// 로그인 API
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({
      status: "success",
      message: "로그인 성공!",
      user: {
        name: user.name,
        email: user.email,
      },
      accessToken: "test-access-token"
    });
  } else {
    res.status(401).json({
      status: "error",
      message: "이메일 또는 비밀번호가 올바르지 않습니다.",
    });
  }
});

// **여기만 경로 수정!**
app.get('/api/welfare/list', (req, res) => {
  res.json(welfareList);
});

const welfareList = [
    {
        "servNm": "청소년복지시설 운영 지원",
        "servDgst": "가정 밖 청소년을 보호하고 상담, 교육문화활동 지원을 통해 비행, 탈선을 예방하여 가정복귀와 사회적응을 돕습니다.",
        "jurMnOn": "여성가족부청소년자립지원과",
        "sprtCycNm": "년",
        "srvPvsnNm": "시설입소",
        "rprsCtadr": "1388",
        "intrsThemaArray": "생활지원,문화·여가,보호·돌봄",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000751&wlfareInfoReldBztpCd=01"
    },
    {
        "servNm": "시설 퇴소청소년 자립지원수당 지급",
        "servDgst": "청소년쉼터 퇴소 및 청소년자립지원관 사례관리 중 또는 사례관리가 종료된 청소년에게 자립지원수당을 지급하여 안정적인 자립기반 마련을 지원합니다.",
        "jurMnOn": "여성가족부청소년자립지원과",
        "sprtCycNm": "월",
        "srvPvsnNm": "현금지급",
        "rprsCtadr": "1388",
        "intrsThemaArray": "생활지원,보호·돌봄",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001146&wlfareInfoReldBztpCd=01"
    },
    {
        "servNm": "청소년특별지원",
        "servDgst": "보호자가 없거나, 실질적으로 보호자의 보호를 받지 못하는 사회, 경제적으로 어려움이 있는 위기청소년이 올바르게 성장하고 안정된 생활을 할 수 있도록 지원합니다.",
        "jurMnOn": "여성가족부학교밖청소년지원과",
        "sprtCycNm": "수시",
        "srvPvsnNm": "현금지급,현물지급",
        "rprsCtadr": "02-2100-6000",
        "intrsThemaArray": "신체건강,생활지원,일자리,문화·여가,교육,법률",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000078&wlfareInfoReldBztpCd=01"
    },
    {
        "servNm": "지역사회 청소년통합지원체계(청소년안전망)",
        "servDgst": "학업중단, 가출, 인터넷 중독 등 위기에 처한 청소년의  건강한 성장과 복지증진을 위해 상담·보호·교육·자립 등 맞춤형 서비스를 제공합니다.",
        "jurMnOn": "여성가족부청소년자립지원과",
        "sprtCycNm": "수시",
        "srvPvsnNm": "프로그램/서비스(서비스)",
        "rprsCtadr": "02-2100-6277",
        "intrsThemaArray": "정신건강,생활지원,교육,보호·돌봄",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001141&wlfareInfoReldBztpCd=01"
    },
    {
        "servNm": "발달장애인 공공후견지원 사업",
        "servDgst": "의사결정능력 부족으로 어려움을 겪고 있는 성인 발달장애인에게 공공후견서비스를 제공하여 자립생활을 지원합니다.",
        "jurMnOn": "보건복지부장애인서비스과",
        "sprtCycNm": "년",
        "srvPvsnNm": "현금지급",
        "rprsCtadr": "129",
        "intrsThemaArray": "생활지원,법률",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000065&wlfareInfoReldBztpCd=01"
    },
    {
        "servNm": "청년내일저축계좌",
        "servDgst": "근로빈곤층 청년의 생계수급자 등으로의 하락을 사전에 예방하고, 일하는 중간계층 청년이 사회에 안착할 수 있도록 자산형성을 지원합니다.",
        "jurMnOn": "보건복지부자활정책과",
        "sprtCycNm": "월",
        "srvPvsnNm": "현금지급",
        "rprsCtadr": "129",
        "intrsThemaArray": "서민금융",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000060&wlfareInfoReldBztpCd=01"
    },
    {
        "servNm": "인문100년장학금",
        "servDgst": "인문사회계열 우수학생에게 학자금을 지원하여 인문학 소양을 갖춘 인재를 양성할 수 있도록 장학금을 지원합니다.",
        "jurMnOn": "교육부청년장학지원과",
        "sprtCycNm": "반기",
        "srvPvsnNm": "현금지급",
        "rprsCtadr": "1599-2290",
        "intrsThemaArray": "생활지원,교육",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000052&wlfareInfoReldBztpCd=01"
    },
    {
        "servNm": "여성청소년 생리용품 지원",
        "servDgst": "취약계층 여성청소년 대상 생리용품 지원을 통해 여성 청소년의 건강한 성장을 지원합니다.",
        "jurMnOn": "여성가족부청소년정책과",
        "sprtCycNm": "반기",
        "srvPvsnNm": "전자바우처(바우처)",
        "rprsCtadr": "1566-3232",
        "intrsThemaArray": "신체건강,생활지원",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000781&wlfareInfoReldBztpCd=01"
    },
    {
        "servNm": "기존주택등 매입임대주택 지원사업",
        "servDgst": "저소득층 국민이 도심 내에 안정적으로 거주할 수 있도록 기존주택 등을 매입하여 저렴하게 공급합니다.",
        "jurMnOn": "국토교통부주거복지지원과",
        "sprtCycNm": "수시",
        "srvPvsnNm": "현물지급",
        "rprsCtadr": "1600-1004",
        "intrsThemaArray": "주거",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000062&wlfareInfoReldBztpCd=01"
    },
    {
        "servNm": "해산급여",
        "servDgst": "수급자 가구의 조산 및 분만전과 분만후의 출산에 필요한 조치와 보호를 위해 해산비를 지급합니다.",
        "jurMnOn": "보건복지부기초생활보장과",
        "sprtCycNm": "수시",
        "srvPvsnNm": "현금지급",
        "rprsCtadr": "129",
        "intrsThemaArray": "생활지원,임신·출산",
        "servDtlLink": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001135&wlfareInfoReldBztpCd=01"
    },
]

app.listen(3000, "0.0.0.0", () => {
  console.log("서버 실행 중: http://localhost:3000");
});
