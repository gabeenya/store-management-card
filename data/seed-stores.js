// 초기 데모/폴백 데이터 — 실제 데이터는 Supabase에서 로드됨 (app.js의 loadFromSupabase 참고)
let stores = [
  {
    "id": "DAGUO001",
    "name": "다구오 2001 분당점(가맹)",
    "brand": "다구오",
    "code": "DAGUO-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-08-07"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-04-29",
      "estimatedAmount": "월 1.28억"
    },
    "revenueAchievement": {
      "ratio": 102,
      "actualAmount": "6,215만",
      "targetAmount": "6,094만",
      "trend": [
        100,
        108,
        99,
        107,
        101,
        102
      ],
      "periodStart": "2025-01-11",
      "periodEnd": "2025-06-13"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-12",
      "result": "부적합",
      "nextCheckDate": "2025-08-13",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "DAGUO002",
    "name": "다구오 NC 강서점(가맹)",
    "brand": "다구오",
    "code": "DAGUO-002",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2026-03-18"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2026-07-17",
      "estimatedAmount": "월 5,696만"
    },
    "revenueAchievement": {
      "ratio": 96,
      "actualAmount": "1.76억",
      "targetAmount": "1.83억",
      "trend": [
        99,
        96,
        88,
        89,
        95,
        96
      ],
      "periodStart": "2024-04-09",
      "periodEnd": "2024-11-20"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-30",
      "result": "적합",
      "nextCheckDate": "2025-07-31",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "DAGUO003",
    "name": "다구오 2001 중계점(가맹)",
    "brand": "다구오",
    "code": "DAGUO-003",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-02-26",
      "estimatedAmount": "월 6,015만"
    },
    "revenueAchievement": {
      "ratio": 87,
      "actualAmount": "6,063만",
      "targetAmount": "6,969만",
      "trend": [
        84,
        79,
        82,
        80,
        83,
        87
      ],
      "periodStart": "2025-11-22",
      "periodEnd": "2026-07-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-07",
      "result": "적합",
      "nextCheckDate": "2025-09-05",
      "specialNote": "유통기한 표시 라벨 재정비 요청"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "DAGUO004",
    "name": "다구오 NC 야탑점(가맹)",
    "brand": "다구오",
    "code": "DAGUO-004",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2022-01-01",
      "estimatedAmount": "월 4,371만"
    },
    "revenueAchievement": {
      "ratio": 114,
      "actualAmount": "1.89억",
      "targetAmount": "1.66억",
      "trend": [
        113,
        109,
        122,
        111,
        112,
        114
      ],
      "periodStart": "2025-06-20",
      "periodEnd": "2026-05-28"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-17",
      "result": "적합",
      "nextCheckDate": "2026-06-17",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "FRANJ001",
    "name": "프랑제리 홈플러스 칠곡점(대)",
    "brand": "프랑제리",
    "code": "FRANJ-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2023-03-04"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-08-11",
      "estimatedAmount": "월 7,842만"
    },
    "revenueAchievement": {
      "ratio": 115,
      "actualAmount": "9,243만",
      "targetAmount": "8,037만",
      "trend": [
        114,
        113,
        114,
        110,
        113,
        115
      ],
      "periodStart": "2025-01-24",
      "periodEnd": "2025-10-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "계약서 특약사항 날인 누락 1건",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-10-15",
      "result": "시정요구",
      "nextCheckDate": "2026-04-15",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "HUWON001",
    "name": "후원 뉴코아 일산점(가맹)",
    "brand": "후원",
    "code": "HUWON-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-10-22"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-02-17",
      "estimatedAmount": "월 1.88억"
    },
    "revenueAchievement": {
      "ratio": 98,
      "actualAmount": "1.21억",
      "targetAmount": "1.23억",
      "trend": [
        99,
        99,
        103,
        101,
        106,
        98
      ],
      "periodStart": "2025-04-27",
      "periodEnd": "2025-10-13"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-04-08",
      "result": "적합",
      "nextCheckDate": "2025-10-07",
      "specialNote": ""
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "이서연",
      "date": "2026-06-10"
    }
  },
  {
    "id": "HUWON002",
    "name": "후원 뉴코아 평촌점(가맹)",
    "brand": "후원",
    "code": "HUWON-002",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-04-07",
      "estimatedAmount": "월 8,319만"
    },
    "revenueAchievement": {
      "ratio": 97,
      "actualAmount": "1.42억",
      "targetAmount": "1.46억",
      "trend": [
        94,
        97,
        92,
        93,
        90,
        97
      ],
      "periodStart": "2025-07-05",
      "periodEnd": "2026-03-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "면적 표기 오류 (계약서 vs 등기부)",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-19",
      "result": "적합",
      "nextCheckDate": "2026-01-17",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG001",
    "name": "반궁 이마트 연수점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-09-18"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-06-12",
      "estimatedAmount": "월 9,346만"
    },
    "revenueAchievement": {
      "ratio": 97,
      "actualAmount": "1.38억",
      "targetAmount": "1.43억",
      "trend": [
        90,
        105,
        105,
        102,
        102,
        97
      ],
      "periodStart": "2025-11-15",
      "periodEnd": "2026-10-16"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "268만원",
      "occurredDate": "2026-08-06",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-10-13",
      "result": "적합",
      "nextCheckDate": "2026-04-13",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG002",
    "name": "반궁 NC 수원터미널점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-002",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2023-08-30"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-03-25",
      "estimatedAmount": "월 1.65억"
    },
    "revenueAchievement": {
      "ratio": 51,
      "actualAmount": "3,695만",
      "targetAmount": "7,245만",
      "trend": [
        48,
        45,
        50,
        55,
        52,
        51
      ],
      "periodStart": "2025-03-30",
      "periodEnd": "2025-08-20"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-31",
      "result": "적합",
      "nextCheckDate": "2026-07-01",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG003",
    "name": "반궁 뉴코아 일산점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-003",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-09-22",
      "estimatedAmount": "월 1.49억"
    },
    "revenueAchievement": {
      "ratio": 110,
      "actualAmount": "1.91억",
      "targetAmount": "1.74억",
      "trend": [
        117,
        105,
        108,
        103,
        102,
        110
      ],
      "periodStart": "2025-03-20",
      "periodEnd": "2025-06-18"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-17",
      "result": "적합",
      "nextCheckDate": "2026-11-15",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG004",
    "name": "반궁 뉴코아 부천점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-004",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2022-02-05"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2025-08-20",
      "estimatedAmount": "월 1.86억"
    },
    "revenueAchievement": {
      "ratio": 98,
      "actualAmount": "1.14억",
      "targetAmount": "1.16억",
      "trend": [
        102,
        94,
        94,
        96,
        104,
        98
      ],
      "periodStart": "2025-02-26",
      "periodEnd": "2026-01-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-06-16",
      "result": "적합",
      "nextCheckDate": "2026-12-15",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "정하은",
      "date": "2026-07-04"
    }
  },
  {
    "id": "BANGUNG005",
    "name": "반궁 뉴코아 인천점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-005",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-12-30",
      "estimatedAmount": "월 6,933만"
    },
    "revenueAchievement": {
      "ratio": 42,
      "actualAmount": "1,979만",
      "targetAmount": "4,711만",
      "trend": [
        34,
        34,
        34,
        40,
        50,
        42
      ],
      "periodStart": "2025-11-26",
      "periodEnd": "2026-07-09"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-23",
      "result": "적합",
      "nextCheckDate": "2025-08-24",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "최지민",
      "date": "2026-08-09"
    }
  },
  {
    "id": "BANGUNG006",
    "name": "반궁 NC 야탑점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-006",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-02-13"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-03",
      "result": "적합",
      "nextCheckDate": "2026-02-01",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "정하은",
      "date": "2026-06-27"
    }
  },
  {
    "id": "BANGUNG007",
    "name": "반궁 뉴코아 강남점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-007",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2024-12-14",
      "estimatedAmount": "월 1.66억"
    },
    "revenueAchievement": {
      "ratio": 102,
      "actualAmount": "5,978만",
      "targetAmount": "5,860만",
      "trend": [
        103,
        101,
        105,
        102,
        108,
        102
      ],
      "periodStart": "2024-11-21",
      "periodEnd": "2025-06-14"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-31",
      "result": "적합",
      "nextCheckDate": "2026-07-01",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "정하은",
      "date": "2026-06-15"
    }
  },
  {
    "id": "BANGUNG008",
    "name": "반궁 2001 분당점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-008",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-09-21"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-09-04",
      "estimatedAmount": "월 5,242만"
    },
    "revenueAchievement": {
      "ratio": 69,
      "actualAmount": "1.26억",
      "targetAmount": "1.83억",
      "trend": [
        68,
        65,
        77,
        70,
        64,
        69
      ],
      "periodStart": "2024-02-13",
      "periodEnd": "2024-09-26"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-25",
      "result": "부적합",
      "nextCheckDate": "2025-11-23",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "이서연",
      "date": "2026-06-07"
    }
  },
  {
    "id": "BANGUNG009",
    "name": "반궁 이마트 만촌점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-009",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-09-24"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-03-24",
      "estimatedAmount": "월 7,270만"
    },
    "revenueAchievement": {
      "ratio": 115,
      "actualAmount": "1.17억",
      "targetAmount": "1.02억",
      "trend": [
        122,
        117,
        117,
        110,
        108,
        115
      ],
      "periodStart": "2025-03-30",
      "periodEnd": "2025-08-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "857만원",
      "occurredDate": "2026-08-17",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2026-07-01",
      "result": "적합",
      "nextCheckDate": "2026-12-30",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "박현우",
      "date": "2026-05-12"
    }
  },
  {
    "id": "BANGUNG010",
    "name": "반궁 이마트 천안점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-010",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2023-01-09"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-04-05",
      "estimatedAmount": "월 1.38억"
    },
    "revenueAchievement": {
      "ratio": 97,
      "actualAmount": "1.26억",
      "targetAmount": "1.3억",
      "trend": [
        101,
        97,
        100,
        97,
        93,
        97
      ],
      "periodStart": "2024-10-31",
      "periodEnd": "2025-06-17"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "434만원",
      "occurredDate": "2026-05-16",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-12",
      "result": "적합",
      "nextCheckDate": "2026-11-10",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "정하은",
      "date": "2026-08-15"
    }
  },
  {
    "id": "BANGUNG011",
    "name": "반궁 음성점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-011",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2022-05-28"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-02-09",
      "estimatedAmount": "월 5,834만"
    },
    "revenueAchievement": {
      "ratio": 105,
      "actualAmount": "1.1억",
      "targetAmount": "1.05억",
      "trend": [
        113,
        97,
        100,
        97,
        108,
        105
      ],
      "periodStart": "2025-04-18",
      "periodEnd": "2025-07-19"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "303만원",
      "occurredDate": "2026-08-13",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "lastCheckDate": "2025-09-08",
      "result": "적합",
      "nextCheckDate": "2026-03-09",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG012",
    "name": "반궁 홈플러스 센텀시티점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-012",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2024-03-07"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2023-07-14",
      "estimatedAmount": "월 1.18억"
    },
    "revenueAchievement": {
      "ratio": 84,
      "actualAmount": "1.54억",
      "targetAmount": "1.84억",
      "trend": [
        86,
        78,
        88,
        90,
        77,
        84
      ],
      "periodStart": "2024-02-15",
      "periodEnd": "2024-06-21"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "324만원",
      "occurredDate": "2026-07-01",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-17",
      "result": "적합",
      "nextCheckDate": "2025-08-18",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG013",
    "name": "반궁 애플 사상점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-013",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-09-16"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-04-08",
      "estimatedAmount": "월 1.66억"
    },
    "revenueAchievement": {
      "ratio": 117,
      "actualAmount": "1.09억",
      "targetAmount": "9,317만",
      "trend": [
        121,
        113,
        116,
        112,
        122,
        117
      ],
      "periodStart": "2024-06-15",
      "periodEnd": "2024-10-19"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-15",
      "result": "적합",
      "nextCheckDate": "2026-05-16",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG014",
    "name": "반궁 송도 트리플스트리트점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-014",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2025-09-06"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-06-25",
      "estimatedAmount": "월 5,750만"
    },
    "revenueAchievement": {
      "ratio": 83,
      "actualAmount": "1.6억",
      "targetAmount": "1.92억",
      "trend": [
        77,
        86,
        80,
        78,
        78,
        83
      ],
      "periodStart": "2025-08-05",
      "periodEnd": "2026-04-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-30",
      "result": "점검예정",
      "nextCheckDate": "2026-06-30",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG015",
    "name": "반궁 부천 신중동점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-015",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-10-24"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-02",
      "result": "적합",
      "nextCheckDate": "2025-12-31",
      "specialNote": "유통기한 표시 라벨 재정비 요청"
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "박현우",
      "date": "2026-05-11"
    }
  },
  {
    "id": "BANGUNG016",
    "name": "반궁 엔터식스 안양점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-016",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2026-05-18"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-05-16",
      "estimatedAmount": "월 5,070만"
    },
    "revenueAchievement": {
      "ratio": 63,
      "actualAmount": "1.25억",
      "targetAmount": "1.99억",
      "trend": [
        60,
        64,
        67,
        55,
        70,
        63
      ],
      "periodStart": "2024-12-18",
      "periodEnd": "2025-10-20"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-28",
      "result": "적합",
      "nextCheckDate": "2026-09-26",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG017",
    "name": "반궁 왕십리역사점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-017",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2022-06-28"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-06-02",
      "estimatedAmount": "월 1.1억"
    },
    "revenueAchievement": {
      "ratio": 51,
      "actualAmount": "8,343만",
      "targetAmount": "1.64억",
      "trend": [
        47,
        47,
        44,
        43,
        43,
        51
      ],
      "periodStart": "2024-09-17",
      "periodEnd": "2025-06-16"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-10-04",
      "result": "적합",
      "nextCheckDate": "2026-04-04",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG018",
    "name": "반궁 NC 대전유성점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-018",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2023-09-23",
      "estimatedAmount": "월 7,067만"
    },
    "revenueAchievement": {
      "ratio": 90,
      "actualAmount": "1.54억",
      "targetAmount": "1.71억",
      "trend": [
        93,
        98,
        86,
        93,
        84,
        90
      ],
      "periodStart": "2024-08-26",
      "periodEnd": "2025-04-19"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-08",
      "result": "부적합",
      "nextCheckDate": "2026-09-06",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG019",
    "name": "반궁 NC 송파점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-019",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2023-03-12"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "966만원",
      "occurredDate": "2026-06-23",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-29",
      "result": "적합",
      "nextCheckDate": "2025-11-27",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "정하은",
      "date": "2026-06-15"
    }
  },
  {
    "id": "BANGUNG020",
    "name": "반궁 NC 불광점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-020",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-03-30"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-09-13",
      "estimatedAmount": "월 1억"
    },
    "revenueAchievement": {
      "ratio": 111,
      "actualAmount": "8,388만",
      "targetAmount": "7,556만",
      "trend": [
        106,
        105,
        104,
        106,
        103,
        111
      ],
      "periodStart": "2024-10-21",
      "periodEnd": "2025-07-06"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-27",
      "result": "부적합",
      "nextCheckDate": "2025-09-25",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "최지민",
      "date": "2026-05-15"
    }
  },
  {
    "id": "BANGUNG021",
    "name": "반궁 가락점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-021",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "지하상가 구획 특수성 반영 지정",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2022-10-24"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-09",
      "result": "부적합",
      "nextCheckDate": "2026-10-08",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "김도윤",
      "date": "2026-06-13"
    }
  },
  {
    "id": "BANGUNG022",
    "name": "반궁 동아 쇼핑점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-022",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2025-11-10"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-03",
      "result": "적합",
      "nextCheckDate": "2026-02-01",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG023",
    "name": "반궁 NC 신구로점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-023",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2022-02-15"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2024-12-22",
      "estimatedAmount": "월 1.11억"
    },
    "revenueAchievement": {
      "ratio": 68,
      "actualAmount": "1.07억",
      "targetAmount": "1.58억",
      "trend": [
        72,
        75,
        65,
        75,
        73,
        68
      ],
      "periodStart": "2024-02-16",
      "periodEnd": "2024-12-08"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-24",
      "result": "적합",
      "nextCheckDate": "2026-07-25",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG024",
    "name": "반궁 인천 아인애비뉴점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-024",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "지하상가 구획 특수성 반영 지정",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-05-16"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2023-06-17",
      "estimatedAmount": "월 1.65억"
    },
    "revenueAchievement": {
      "ratio": 74,
      "actualAmount": "7,276만",
      "targetAmount": "9,833만",
      "trend": [
        82,
        75,
        77,
        76,
        66,
        74
      ],
      "periodStart": "2024-07-02",
      "periodEnd": "2025-01-04"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "계약서 특약사항 날인 누락 1건",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-12",
      "result": "시정요구",
      "nextCheckDate": "2026-09-10",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG025",
    "name": "반궁 리빙파워센터 인천논현점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-025",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2022-04-19",
      "estimatedAmount": "월 7,175만"
    },
    "revenueAchievement": {
      "ratio": 118,
      "actualAmount": "1.42억",
      "targetAmount": "1.21억",
      "trend": [
        113,
        120,
        114,
        120,
        125,
        118
      ],
      "periodStart": "2025-05-25",
      "periodEnd": "2026-01-18"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-22",
      "result": "부적합",
      "nextCheckDate": "2025-11-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG026",
    "name": "반궁 상계점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-026",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-06-04"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-01-23",
      "estimatedAmount": "월 5,725만"
    },
    "revenueAchievement": {
      "ratio": 56,
      "actualAmount": "8,331만",
      "targetAmount": "1.49억",
      "trend": [
        58,
        48,
        49,
        57,
        48,
        56
      ],
      "periodStart": "2025-02-10",
      "periodEnd": "2025-11-19"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-07-05",
      "result": "적합",
      "nextCheckDate": "2027-01-03",
      "specialNote": ""
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "정하은",
      "date": "2026-05-13"
    }
  },
  {
    "id": "BANGUNG027",
    "name": "반궁 홈플러스 작전점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-027",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-09-19"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2023-09-21",
      "estimatedAmount": "월 1.59억"
    },
    "revenueAchievement": {
      "ratio": 70,
      "actualAmount": "3,195만",
      "targetAmount": "4,565만",
      "trend": [
        77,
        63,
        78,
        65,
        74,
        70
      ],
      "periodStart": "2024-07-08",
      "periodEnd": "2025-04-30"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-09-26",
      "result": "시정요구",
      "nextCheckDate": "2026-03-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "이서연",
      "date": "2026-08-07"
    }
  },
  {
    "id": "BANGUNG028",
    "name": "반궁 목동 파라곤점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-028",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-01-21"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-12-10",
      "estimatedAmount": "월 1.03억"
    },
    "revenueAchievement": {
      "ratio": 42,
      "actualAmount": "5,727만",
      "targetAmount": "1.36억",
      "trend": [
        50,
        43,
        48,
        47,
        45,
        42
      ],
      "periodStart": "2025-09-01",
      "periodEnd": "2026-08-01"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-10-16",
      "result": "적합",
      "nextCheckDate": "2026-04-16",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "최지민",
      "date": "2026-05-26"
    }
  },
  {
    "id": "BANGUNG029",
    "name": "반궁 서울역점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-029",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-02-17",
      "result": "적합",
      "nextCheckDate": "2026-08-18",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG030",
    "name": "반궁 인천 길병원점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-030",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2022-06-27"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-02-19",
      "estimatedAmount": "월 8,109만"
    },
    "revenueAchievement": {
      "ratio": 114,
      "actualAmount": "1.75억",
      "targetAmount": "1.53억",
      "trend": [
        110,
        109,
        122,
        113,
        118,
        114
      ],
      "periodStart": "2024-11-28",
      "periodEnd": "2025-03-21"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-18",
      "result": "점검예정",
      "nextCheckDate": "2026-02-16",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "최지민",
      "date": "2026-07-09"
    }
  },
  {
    "id": "BANGUNG031",
    "name": "반궁 홈플러스 파주운정점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-031",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2026-03-27"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2026-01-21",
      "estimatedAmount": "월 1.02억"
    },
    "revenueAchievement": {
      "ratio": 109,
      "actualAmount": "1.71억",
      "targetAmount": "1.57억",
      "trend": [
        108,
        113,
        116,
        108,
        105,
        109
      ],
      "periodStart": "2025-11-22",
      "periodEnd": "2026-03-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-18",
      "result": "시정요구",
      "nextCheckDate": "2026-09-16",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG032",
    "name": "반궁 벨라시타 일산점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-032",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-01-13"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-12-26",
      "estimatedAmount": "월 1.08억"
    },
    "revenueAchievement": {
      "ratio": 113,
      "actualAmount": "1.11억",
      "targetAmount": "9,865만",
      "trend": [
        113,
        114,
        115,
        113,
        114,
        113
      ],
      "periodStart": "2024-01-28",
      "periodEnd": "2024-09-15"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "346만원",
      "occurredDate": "2026-07-31",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-16",
      "result": "적합",
      "nextCheckDate": "2026-01-14",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG033",
    "name": "반궁 길동점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-033",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-04-13"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2023-08-19",
      "estimatedAmount": "월 1.97억"
    },
    "revenueAchievement": {
      "ratio": 87,
      "actualAmount": "1.24억",
      "targetAmount": "1.43억",
      "trend": [
        93,
        94,
        88,
        92,
        91,
        87
      ],
      "periodStart": "2024-07-17",
      "periodEnd": "2025-06-04"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-06-01",
      "result": "부적합",
      "nextCheckDate": "2026-11-30",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "정하은",
      "date": "2026-05-16"
    }
  },
  {
    "id": "BANGUNG034",
    "name": "반궁 종각역점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-034",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2023-12-03"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2023-03-15",
      "estimatedAmount": "월 1.44억"
    },
    "revenueAchievement": {
      "ratio": 118,
      "actualAmount": "1.3억",
      "targetAmount": "1.1억",
      "trend": [
        113,
        117,
        123,
        118,
        117,
        118
      ],
      "periodStart": "2025-05-21",
      "periodEnd": "2026-05-19"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-30",
      "result": "점검예정",
      "nextCheckDate": "2026-09-28",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG035",
    "name": "반궁 판교 H스퀘어점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-035",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "지하상가 구획 특수성 반영 지정",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2022-09-16"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2022-02-08",
      "estimatedAmount": "월 1.37억"
    },
    "revenueAchievement": {
      "ratio": 98,
      "actualAmount": "1.81억",
      "targetAmount": "1.85억",
      "trend": [
        100,
        100,
        104,
        97,
        90,
        98
      ],
      "periodStart": "2024-08-22",
      "periodEnd": "2025-06-26"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-06-27",
      "result": "시정요구",
      "nextCheckDate": "2025-12-26",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "BANGUNG036",
    "name": "반궁 당산점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-036",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-07-30"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-12-23",
      "estimatedAmount": "월 1.79억"
    },
    "revenueAchievement": {
      "ratio": 94,
      "actualAmount": "3,940만",
      "targetAmount": "4,192만",
      "trend": [
        86,
        90,
        86,
        91,
        86,
        94
      ],
      "periodStart": "2025-10-16",
      "periodEnd": "2026-04-30"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-17",
      "result": "부적합",
      "nextCheckDate": "2026-05-18",
      "specialNote": ""
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "박현우",
      "date": "2026-05-19"
    }
  },
  {
    "id": "BANGUNG037",
    "name": "반궁 NC 고잔점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-037",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2023-07-30"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "608만원",
      "occurredDate": "2026-06-09",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-07",
      "result": "적합",
      "nextCheckDate": "2025-07-08",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "박현우",
      "date": "2026-05-05"
    }
  },
  {
    "id": "LUGO001",
    "name": "루고 대구이월드점 4층",
    "brand": "루고",
    "code": "LUGO-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2022-07-22",
      "estimatedAmount": "월 1.35억"
    },
    "revenueAchievement": {
      "ratio": 67,
      "actualAmount": "1.3억",
      "targetAmount": "1.93억",
      "trend": [
        74,
        72,
        69,
        64,
        61,
        67
      ],
      "periodStart": "2025-09-25",
      "periodEnd": "2026-05-26"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-18",
      "result": "적합",
      "nextCheckDate": "2026-02-16",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "최지민",
      "date": "2026-05-25"
    }
  },
  {
    "id": "LUGO002",
    "name": "루고 뉴코아 일산점 8층",
    "brand": "루고",
    "code": "LUGO-002",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-04-29"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2023-10-16",
      "estimatedAmount": "월 1.2억"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "3,279만",
      "targetAmount": "5,962만",
      "trend": [
        60,
        50,
        62,
        61,
        56,
        55
      ],
      "periodStart": "2025-08-24",
      "periodEnd": "2026-06-16"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-07-12",
      "result": "적합",
      "nextCheckDate": "2027-01-10",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "LUGO003",
    "name": "루고 뉴코아 인천점 9층",
    "brand": "루고",
    "code": "LUGO-003",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2023-07-07"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-07-18",
      "estimatedAmount": "월 7,658만"
    },
    "revenueAchievement": {
      "ratio": 80,
      "actualAmount": "9,903만",
      "targetAmount": "1.24억",
      "trend": [
        76,
        74,
        85,
        87,
        82,
        80
      ],
      "periodStart": "2024-08-12",
      "periodEnd": "2025-04-01"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-25",
      "result": "적합",
      "nextCheckDate": "2026-01-23",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "LUGO004",
    "name": "루고 NC 청주점 2층",
    "brand": "루고",
    "code": "LUGO-004",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2024-01-30"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-05-07",
      "estimatedAmount": "월 7,658만"
    },
    "revenueAchievement": {
      "ratio": 113,
      "actualAmount": "6,970만",
      "targetAmount": "6,168만",
      "trend": [
        117,
        106,
        117,
        116,
        111,
        113
      ],
      "periodStart": "2024-06-25",
      "periodEnd": "2024-11-09"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-07",
      "result": "적합",
      "nextCheckDate": "2026-05-08",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "LUGO005",
    "name": "루고 뉴코아 광명점 1층",
    "brand": "루고",
    "code": "LUGO-005",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-10-14",
      "result": "점검예정",
      "nextCheckDate": "2026-04-14",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "LUGO006",
    "name": "루고 NC 순천점 8층",
    "brand": "루고",
    "code": "LUGO-006",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2024-04-18"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2022-11-06",
      "estimatedAmount": "월 1.64억"
    },
    "revenueAchievement": {
      "ratio": 58,
      "actualAmount": "4,190만",
      "targetAmount": "7,224만",
      "trend": [
        53,
        66,
        54,
        51,
        62,
        58
      ],
      "periodStart": "2024-03-12",
      "periodEnd": "2025-02-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-10-01",
      "result": "적합",
      "nextCheckDate": "2026-04-01",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "정하은",
      "date": "2026-05-17"
    }
  },
  {
    "id": "LUGO007",
    "name": "루고 뉴코아 평촌점 9층",
    "brand": "루고",
    "code": "LUGO-007",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2023-12-31"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-26",
      "result": "시정요구",
      "nextCheckDate": "2026-01-24",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "ONLIFE001",
    "name": "온라이프 피자몰 NC 부산대점",
    "brand": "온라이프 피자몰",
    "code": "ONLIFE-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-11-11"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "임대차계약 갱신일 표기 오류",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,467만원",
      "occurredDate": "2026-08-11",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-25",
      "result": "적합",
      "nextCheckDate": "2025-11-23",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "ASIAM001",
    "name": "아시아문 뉴코아 평촌점(가맹)",
    "brand": "아시아문",
    "code": "ASIAM-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2023-04-23",
      "estimatedAmount": "월 1.83억"
    },
    "revenueAchievement": {
      "ratio": 91,
      "actualAmount": "4,507만",
      "targetAmount": "4,953만",
      "trend": [
        90,
        90,
        85,
        96,
        97,
        91
      ],
      "periodStart": "2025-04-23",
      "periodEnd": "2026-03-28"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-04",
      "result": "적합",
      "nextCheckDate": "2026-06-04",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "PERKN001",
    "name": "페르케노 뉴코아 부천점 5층",
    "brand": "페르케노",
    "code": "PERKN-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-09-02"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-22",
      "result": "적합",
      "nextCheckDate": "2025-09-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "PERKN002",
    "name": "페르케노 2001 중계점 8층",
    "brand": "페르케노",
    "code": "PERKN-002",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2022-09-18"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-11-30",
      "estimatedAmount": "월 8,133만"
    },
    "revenueAchievement": {
      "ratio": 83,
      "actualAmount": "1.3억",
      "targetAmount": "1.56억",
      "trend": [
        87,
        82,
        76,
        89,
        81,
        83
      ],
      "periodStart": "2026-01-16",
      "periodEnd": "2026-11-01"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-23",
      "result": "적합",
      "nextCheckDate": "2026-10-22",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "PERKN003",
    "name": "페르케노 롯데몰 수지점 1층",
    "brand": "페르케노",
    "code": "PERKN-003",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-07-07"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-16",
      "result": "적합",
      "nextCheckDate": "2025-09-14",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "김도윤",
      "date": "2026-07-29"
    }
  },
  {
    "id": "PERKN004",
    "name": "페르케노 NC 대전유성점 9층",
    "brand": "페르케노",
    "code": "PERKN-004",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-11-11"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2026-06-10",
      "estimatedAmount": "월 1.55억"
    },
    "revenueAchievement": {
      "ratio": 83,
      "actualAmount": "3,625만",
      "targetAmount": "4,367만",
      "trend": [
        91,
        88,
        82,
        86,
        81,
        83
      ],
      "periodStart": "2024-09-14",
      "periodEnd": "2024-12-16"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-20",
      "result": "적합",
      "nextCheckDate": "2026-01-18",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "정하은",
      "date": "2026-05-25"
    }
  },
  {
    "id": "PERKN005",
    "name": "페르케노 롯데마트권선점 2층",
    "brand": "페르케노",
    "code": "PERKN-005",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-02-12"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-05-14",
      "estimatedAmount": "월 1.57억"
    },
    "revenueAchievement": {
      "ratio": 109,
      "actualAmount": "1.16억",
      "targetAmount": "1.06억",
      "trend": [
        103,
        103,
        109,
        103,
        114,
        109
      ],
      "periodStart": "2026-01-10",
      "periodEnd": "2026-12-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-31",
      "result": "점검예정",
      "nextCheckDate": "2026-01-29",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "PERKN006",
    "name": "페르케노 엔터식스안양점 6층",
    "brand": "페르케노",
    "code": "PERKN-006",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2023-11-06"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-02-02",
      "estimatedAmount": "월 9,867만"
    },
    "revenueAchievement": {
      "ratio": 60,
      "actualAmount": "4,639만",
      "targetAmount": "7,731만",
      "trend": [
        58,
        66,
        54,
        56,
        66,
        60
      ],
      "periodStart": "2024-10-07",
      "periodEnd": "2025-04-03"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-07-16",
      "result": "시정요구",
      "nextCheckDate": "2027-01-14",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "PERKN007",
    "name": "페르케노 동탄점",
    "brand": "페르케노",
    "code": "PERKN-007",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-04-07"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-12-01",
      "estimatedAmount": "월 1.05억"
    },
    "revenueAchievement": {
      "ratio": 75,
      "actualAmount": "1.12억",
      "targetAmount": "1.49억",
      "trend": [
        74,
        70,
        76,
        76,
        81,
        75
      ],
      "periodStart": "2025-09-17",
      "periodEnd": "2026-05-17"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "333만원",
      "occurredDate": "2026-08-25",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-21",
      "result": "적합",
      "nextCheckDate": "2026-07-22",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "RIMINI001",
    "name": "리미니 롯데마트 양평점",
    "brand": "리미니",
    "code": "RIMINI-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-05-31"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-25",
      "result": "적합",
      "nextCheckDate": "2026-01-23",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "STEAK001",
    "name": "스테이크어스 뉴코아 평촌점",
    "brand": "스테이크어스",
    "code": "STEAK-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-06-09"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2022-04-28",
      "estimatedAmount": "월 9,926만"
    },
    "revenueAchievement": {
      "ratio": 48,
      "actualAmount": "9,227만",
      "targetAmount": "1.92억",
      "trend": [
        41,
        41,
        56,
        43,
        49,
        48
      ],
      "periodStart": "2025-01-26",
      "periodEnd": "2025-05-06"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-04",
      "result": "부적합",
      "nextCheckDate": "2026-02-02",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "STEAK002",
    "name": "스테이크어스 NC구로점",
    "brand": "스테이크어스",
    "code": "STEAK-002",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-01-24"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-04-23",
      "estimatedAmount": "월 1.14억"
    },
    "revenueAchievement": {
      "ratio": 97,
      "actualAmount": "4,125만",
      "targetAmount": "4,252만",
      "trend": [
        105,
        94,
        93,
        101,
        91,
        97
      ],
      "periodStart": "2025-10-25",
      "periodEnd": "2026-03-20"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-27",
      "result": "적합",
      "nextCheckDate": "2026-06-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "STEAK003",
    "name": "스테이크어스 이천일 분당점",
    "brand": "스테이크어스",
    "code": "STEAK-003",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-09-06"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-10-04",
      "estimatedAmount": "월 4,687만"
    },
    "revenueAchievement": {
      "ratio": 100,
      "actualAmount": "1.14억",
      "targetAmount": "1.14억",
      "trend": [
        97,
        108,
        96,
        99,
        92,
        100
      ],
      "periodStart": "2024-12-09",
      "periodEnd": "2025-03-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-04-21",
      "result": "시정요구",
      "nextCheckDate": "2025-10-20",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "최지민",
      "date": "2026-05-31"
    }
  },
  {
    "id": "STEAK004",
    "name": "스테이크어스 뉴코아 일산점",
    "brand": "스테이크어스",
    "code": "STEAK-004",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2026-02-08"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-26",
      "result": "적합",
      "nextCheckDate": "2026-09-24",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "이서연",
      "date": "2026-06-30"
    }
  },
  {
    "id": "STEAK005",
    "name": "스테이크어스 NC고잔점",
    "brand": "스테이크어스",
    "code": "STEAK-005",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-07-03"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2026-02-13",
      "estimatedAmount": "월 1.25억"
    },
    "revenueAchievement": {
      "ratio": 117,
      "actualAmount": "1.29억",
      "targetAmount": "1.1억",
      "trend": [
        120,
        121,
        124,
        109,
        113,
        117
      ],
      "periodStart": "2025-12-14",
      "periodEnd": "2026-06-23"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-23",
      "result": "시정요구",
      "nextCheckDate": "2025-07-24",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "STEAK006",
    "name": "스테이크어스 NC송파점",
    "brand": "스테이크어스",
    "code": "STEAK-006",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-07-04"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-05-12",
      "estimatedAmount": "월 1.8억"
    },
    "revenueAchievement": {
      "ratio": 41,
      "actualAmount": "3,532만",
      "targetAmount": "8,614만",
      "trend": [
        42,
        48,
        41,
        46,
        36,
        41
      ],
      "periodStart": "2024-01-16",
      "periodEnd": "2024-09-12"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-02-01",
      "result": "적합",
      "nextCheckDate": "2026-08-02",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "정하은",
      "date": "2026-07-28"
    }
  },
  {
    "id": "STEAK007",
    "name": "스테이크어스 이천일 중계점",
    "brand": "스테이크어스",
    "code": "STEAK-007",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2026-04-07"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-01-03",
      "estimatedAmount": "월 1억"
    },
    "revenueAchievement": {
      "ratio": 87,
      "actualAmount": "9,197만",
      "targetAmount": "1.06억",
      "trend": [
        88,
        82,
        79,
        88,
        79,
        87
      ],
      "periodStart": "2024-07-05",
      "periodEnd": "2025-02-15"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,472만원",
      "occurredDate": "2026-05-05",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-29",
      "result": "부적합",
      "nextCheckDate": "2025-11-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "STEAK008",
    "name": "스테이크어스 이마트 만촌점",
    "brand": "스테이크어스",
    "code": "STEAK-008",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2026-05-15"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-08-29",
      "estimatedAmount": "월 1.37억"
    },
    "revenueAchievement": {
      "ratio": 56,
      "actualAmount": "7,853만",
      "targetAmount": "1.4억",
      "trend": [
        50,
        62,
        61,
        61,
        59,
        56
      ],
      "periodStart": "2024-01-12",
      "periodEnd": "2024-09-30"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "321만원",
      "occurredDate": "2026-07-29",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-09-11",
      "result": "적합",
      "nextCheckDate": "2026-03-12",
      "specialNote": "유통기한 표시 라벨 재정비 요청"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "STEAK009",
    "name": "스테이크어스 이마트 천안점",
    "brand": "스테이크어스",
    "code": "STEAK-009",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-08",
      "result": "적합",
      "nextCheckDate": "2025-09-06",
      "specialNote": ""
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "김도윤",
      "date": "2026-06-26"
    }
  },
  {
    "id": "STEAK010",
    "name": "스테이크어스 애플 사상점",
    "brand": "스테이크어스",
    "code": "STEAK-010",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-09-16"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-10-16",
      "estimatedAmount": "월 1.41억"
    },
    "revenueAchievement": {
      "ratio": 96,
      "actualAmount": "1.05억",
      "targetAmount": "1.1억",
      "trend": [
        104,
        91,
        104,
        96,
        92,
        96
      ],
      "periodStart": "2025-01-12",
      "periodEnd": "2025-09-17"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-19",
      "result": "적합",
      "nextCheckDate": "2026-10-18",
      "specialNote": "유통기한 표시 라벨 재정비 요청"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "STEAK011",
    "name": "스테이크어스 롯데마트 양평점",
    "brand": "스테이크어스",
    "code": "STEAK-011",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-03-04"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-07-20",
      "estimatedAmount": "월 1.49억"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "9,518만",
      "targetAmount": "1.73억",
      "trend": [
        49,
        57,
        52,
        50,
        49,
        55
      ],
      "periodStart": "2024-06-27",
      "periodEnd": "2025-05-28"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-08",
      "result": "적합",
      "nextCheckDate": "2026-06-08",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE001",
    "name": "더카페 뉴코아 평촌점 B2층",
    "brand": "더카페",
    "code": "CAFE-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-03-05"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2022-07-20",
      "estimatedAmount": "월 1.06억"
    },
    "revenueAchievement": {
      "ratio": 70,
      "actualAmount": "6,501만",
      "targetAmount": "9,287만",
      "trend": [
        77,
        64,
        64,
        66,
        70,
        70
      ],
      "periodStart": "2024-02-08",
      "periodEnd": "2025-01-11"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-04-09",
      "result": "점검예정",
      "nextCheckDate": "2025-10-08",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE002",
    "name": "더카페 2001 안양점 B1층",
    "brand": "더카페",
    "code": "CAFE-002",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2026-08-16"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-04-21",
      "estimatedAmount": "월 6,147만"
    },
    "revenueAchievement": {
      "ratio": 71,
      "actualAmount": "4,828만",
      "targetAmount": "6,801만",
      "trend": [
        64,
        71,
        69,
        69,
        77,
        71
      ],
      "periodStart": "2024-12-20",
      "periodEnd": "2025-09-01"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-19",
      "result": "부적합",
      "nextCheckDate": "2025-08-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "김도윤",
      "date": "2026-05-30"
    }
  },
  {
    "id": "CAFE003",
    "name": "더카페 밀알점",
    "brand": "더카페",
    "code": "CAFE-003",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-06-07"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2023-03-22",
      "estimatedAmount": "월 1.1억"
    },
    "revenueAchievement": {
      "ratio": 97,
      "actualAmount": "1.88억",
      "targetAmount": "1.94억",
      "trend": [
        105,
        104,
        100,
        102,
        90,
        97
      ],
      "periodStart": "2024-08-29",
      "periodEnd": "2025-08-04"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-30",
      "result": "적합",
      "nextCheckDate": "2026-09-28",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "최지민",
      "date": "2026-07-22"
    }
  },
  {
    "id": "CAFE004",
    "name": "더카페 2001 부평점 4층",
    "brand": "더카페",
    "code": "CAFE-004",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2023-08-23"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-01-04",
      "estimatedAmount": "월 4,325만"
    },
    "revenueAchievement": {
      "ratio": 98,
      "actualAmount": "1.91억",
      "targetAmount": "1.95억",
      "trend": [
        93,
        101,
        102,
        105,
        99,
        98
      ],
      "periodStart": "2025-05-25",
      "periodEnd": "2026-05-20"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-09-21",
      "result": "적합",
      "nextCheckDate": "2026-03-22",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE005",
    "name": "더카페 뉴코아 동수원점 8층",
    "brand": "더카페",
    "code": "CAFE-005",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2025-11-05"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-08-06",
      "estimatedAmount": "월 1.81억"
    },
    "revenueAchievement": {
      "ratio": 78,
      "actualAmount": "1.5억",
      "targetAmount": "1.92억",
      "trend": [
        86,
        77,
        86,
        78,
        81,
        78
      ],
      "periodStart": "2025-02-16",
      "periodEnd": "2025-11-08"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-11",
      "result": "적합",
      "nextCheckDate": "2025-08-12",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE006",
    "name": "더카페 NC 송파점 3층",
    "brand": "더카페",
    "code": "CAFE-006",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2026-02-17"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-11-29",
      "estimatedAmount": "월 1.04억"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "2,441만",
      "targetAmount": "4,437만",
      "trend": [
        53,
        58,
        61,
        49,
        56,
        55
      ],
      "periodStart": "2025-05-11",
      "periodEnd": "2026-02-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-27",
      "result": "시정요구",
      "nextCheckDate": "2026-06-27",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE007",
    "name": "더카페 뉴코아 평촌점 8층",
    "brand": "더카페",
    "code": "CAFE-007",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-03-21"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-07-13",
      "estimatedAmount": "월 1.98억"
    },
    "revenueAchievement": {
      "ratio": 71,
      "actualAmount": "6,286만",
      "targetAmount": "8,854만",
      "trend": [
        65,
        63,
        70,
        73,
        78,
        71
      ],
      "periodStart": "2024-08-17",
      "periodEnd": "2025-06-07"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-06",
      "result": "적합",
      "nextCheckDate": "2025-11-04",
      "specialNote": "유통기한 표시 라벨 재정비 요청"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE008",
    "name": "더카페 인천논현점 3층",
    "brand": "더카페",
    "code": "CAFE-008",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2022-10-10"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-26",
      "result": "적합",
      "nextCheckDate": "2025-07-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE009",
    "name": "더카페 이마트 속초점 1층",
    "brand": "더카페",
    "code": "CAFE-009",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2022-11-03"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-12-06",
      "estimatedAmount": "월 1.07억"
    },
    "revenueAchievement": {
      "ratio": 107,
      "actualAmount": "2.06억",
      "targetAmount": "1.92억",
      "trend": [
        106,
        111,
        101,
        106,
        100,
        107
      ],
      "periodStart": "2024-11-29",
      "periodEnd": "2025-11-11"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-10-13",
      "result": "적합",
      "nextCheckDate": "2026-04-13",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE010",
    "name": "더카페 NC 송파점 2층",
    "brand": "더카페",
    "code": "CAFE-010",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-07-28"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-10-08",
      "estimatedAmount": "월 1.79억"
    },
    "revenueAchievement": {
      "ratio": 43,
      "actualAmount": "4,077만",
      "targetAmount": "9,482만",
      "trend": [
        35,
        35,
        42,
        47,
        42,
        43
      ],
      "periodStart": "2024-01-02",
      "periodEnd": "2024-05-28"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-06-17",
      "result": "적합",
      "nextCheckDate": "2025-12-16",
      "specialNote": ""
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "이서연",
      "date": "2026-05-23"
    }
  },
  {
    "id": "CAFE011",
    "name": "더카페 홍성터미널점",
    "brand": "더카페",
    "code": "CAFE-011",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2024-02-13"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-06-09",
      "estimatedAmount": "월 7,838만"
    },
    "revenueAchievement": {
      "ratio": 49,
      "actualAmount": "2,838만",
      "targetAmount": "5,792만",
      "trend": [
        43,
        51,
        49,
        53,
        47,
        49
      ],
      "periodStart": "2024-03-19",
      "periodEnd": "2025-02-28"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-07",
      "result": "점검예정",
      "nextCheckDate": "2026-02-05",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE012",
    "name": "더카페 이마트 충주점 1층",
    "brand": "더카페",
    "code": "CAFE-012",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-07-13",
      "estimatedAmount": "월 1.51억"
    },
    "revenueAchievement": {
      "ratio": 71,
      "actualAmount": "1.15억",
      "targetAmount": "1.62억",
      "trend": [
        65,
        71,
        70,
        77,
        78,
        71
      ],
      "periodStart": "2025-01-21",
      "periodEnd": "2025-04-24"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-20",
      "result": "부적합",
      "nextCheckDate": "2026-10-19",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE013",
    "name": "더카페 NC 대구엑스코점 2층",
    "brand": "더카페",
    "code": "CAFE-013",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-12-22"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-03-02",
      "estimatedAmount": "월 1.67억"
    },
    "revenueAchievement": {
      "ratio": 62,
      "actualAmount": "8,584만",
      "targetAmount": "1.38억",
      "trend": [
        61,
        60,
        69,
        58,
        58,
        62
      ],
      "periodStart": "2025-11-22",
      "periodEnd": "2026-10-20"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-13",
      "result": "적합",
      "nextCheckDate": "2026-02-11",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE014",
    "name": "더카페 NC 송파점 4층",
    "brand": "더카페",
    "code": "CAFE-014",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2022-01-09",
      "estimatedAmount": "월 1.79억"
    },
    "revenueAchievement": {
      "ratio": 81,
      "actualAmount": "3,685만",
      "targetAmount": "4,549만",
      "trend": [
        86,
        85,
        83,
        89,
        89,
        81
      ],
      "periodStart": "2024-12-17",
      "periodEnd": "2025-11-27"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "계약서 특약사항 날인 누락 1건",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-10-25",
      "result": "적합",
      "nextCheckDate": "2026-04-25",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE015",
    "name": "더카페NC대구포인포엑스코점",
    "brand": "더카페",
    "code": "CAFE-015",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-03-12"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2025-03-17",
      "estimatedAmount": "월 7,769만"
    },
    "revenueAchievement": {
      "ratio": 74,
      "actualAmount": "6,838만",
      "targetAmount": "9,241만",
      "trend": [
        79,
        77,
        69,
        82,
        78,
        74
      ],
      "periodStart": "2025-09-23",
      "periodEnd": "2026-07-18"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-24",
      "result": "적합",
      "nextCheckDate": "2025-08-25",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE016",
    "name": "더카페 가산우림점",
    "brand": "더카페",
    "code": "CAFE-016",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2026-03-15"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2024-10-25",
      "estimatedAmount": "월 1.96억"
    },
    "revenueAchievement": {
      "ratio": 107,
      "actualAmount": "1.78억",
      "targetAmount": "1.67억",
      "trend": [
        115,
        109,
        107,
        114,
        110,
        107
      ],
      "periodStart": "2025-05-11",
      "periodEnd": "2026-02-19"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-23",
      "result": "적합",
      "nextCheckDate": "2025-08-24",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE017",
    "name": "더카페 이마트 강릉점 3층",
    "brand": "더카페",
    "code": "CAFE-017",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-08-25"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-07-28",
      "estimatedAmount": "월 4,965만"
    },
    "revenueAchievement": {
      "ratio": 50,
      "actualAmount": "9,704만",
      "targetAmount": "1.94억",
      "trend": [
        52,
        58,
        45,
        55,
        46,
        50
      ],
      "periodStart": "2024-08-01",
      "periodEnd": "2024-11-30"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "112만원",
      "occurredDate": "2026-07-01",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-08",
      "result": "적합",
      "nextCheckDate": "2025-07-09",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE018",
    "name": "더카페 부천원종점",
    "brand": "더카페",
    "code": "CAFE-018",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2022-06-06"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-03-16",
      "estimatedAmount": "월 1.55억"
    },
    "revenueAchievement": {
      "ratio": 40,
      "actualAmount": "2,245만",
      "targetAmount": "5,612만",
      "trend": [
        32,
        39,
        46,
        48,
        32,
        40
      ],
      "periodStart": "2024-05-15",
      "periodEnd": "2024-12-05"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-20",
      "result": "적합",
      "nextCheckDate": "2026-07-21",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "이서연",
      "date": "2026-07-05"
    }
  },
  {
    "id": "CAFE019",
    "name": "더카페 NC 중앙로역점 2층",
    "brand": "더카페",
    "code": "CAFE-019",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-08-14"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-09-07",
      "estimatedAmount": "월 1.93억"
    },
    "revenueAchievement": {
      "ratio": 51,
      "actualAmount": "1.01억",
      "targetAmount": "1.99억",
      "trend": [
        54,
        44,
        57,
        46,
        47,
        51
      ],
      "periodStart": "2025-07-28",
      "periodEnd": "2026-04-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-16",
      "result": "적합",
      "nextCheckDate": "2025-09-14",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "최지민",
      "date": "2026-05-28"
    }
  },
  {
    "id": "CAFE020",
    "name": "더카페 이마트 구미점 1층",
    "brand": "더카페",
    "code": "CAFE-020",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-12-22"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-03-30",
      "estimatedAmount": "월 1.49억"
    },
    "revenueAchievement": {
      "ratio": 111,
      "actualAmount": "2.08억",
      "targetAmount": "1.87억",
      "trend": [
        114,
        106,
        111,
        104,
        115,
        111
      ],
      "periodStart": "2025-05-23",
      "periodEnd": "2026-03-20"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-20",
      "result": "적합",
      "nextCheckDate": "2026-06-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE021",
    "name": "더카페 NC 강서점 9층",
    "brand": "더카페",
    "code": "CAFE-021",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-05-12"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2022-09-18",
      "estimatedAmount": "월 7,217만"
    },
    "revenueAchievement": {
      "ratio": 64,
      "actualAmount": "2,849만",
      "targetAmount": "4,452만",
      "trend": [
        63,
        58,
        63,
        67,
        70,
        64
      ],
      "periodStart": "2025-08-02",
      "periodEnd": "2026-03-31"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,226만원",
      "occurredDate": "2026-08-14",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-18",
      "result": "적합",
      "nextCheckDate": "2026-07-19",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE022",
    "name": "더카페 홈플러스 춘천점 B1층",
    "brand": "더카페",
    "code": "CAFE-022",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2023-10-17",
      "estimatedAmount": "월 1.7억"
    },
    "revenueAchievement": {
      "ratio": 56,
      "actualAmount": "3,994만",
      "targetAmount": "7,132만",
      "trend": [
        53,
        50,
        59,
        59,
        49,
        56
      ],
      "periodStart": "2024-12-10",
      "periodEnd": "2025-04-22"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-30",
      "result": "적합",
      "nextCheckDate": "2026-01-28",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE023",
    "name": "더카페 NC 수원터미널점 2층",
    "brand": "더카페",
    "code": "CAFE-023",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2026-02-26"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-12-26",
      "estimatedAmount": "월 1.38억"
    },
    "revenueAchievement": {
      "ratio": 54,
      "actualAmount": "8,361만",
      "targetAmount": "1.55억",
      "trend": [
        55,
        58,
        56,
        48,
        51,
        54
      ],
      "periodStart": "2025-09-02",
      "periodEnd": "2026-02-21"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,145만원",
      "occurredDate": "2026-06-02",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-22",
      "result": "시정요구",
      "nextCheckDate": "2026-11-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE024",
    "name": "더카페 이마트 제천점 1층",
    "brand": "더카페",
    "code": "CAFE-024",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-04-10"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-12-02",
      "estimatedAmount": "월 1.38억"
    },
    "revenueAchievement": {
      "ratio": 63,
      "actualAmount": "1.12억",
      "targetAmount": "1.79억",
      "trend": [
        64,
        65,
        69,
        69,
        60,
        63
      ],
      "periodStart": "2025-02-07",
      "periodEnd": "2025-10-01"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "면적 표기 오류 (계약서 vs 등기부)",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-06-11",
      "result": "적합",
      "nextCheckDate": "2026-12-10",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE025",
    "name": "더카페 오산시청점",
    "brand": "더카페",
    "code": "CAFE-025",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2025-07-05"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-01-29",
      "estimatedAmount": "월 9,605만"
    },
    "revenueAchievement": {
      "ratio": 105,
      "actualAmount": "1.55억",
      "targetAmount": "1.47억",
      "trend": [
        111,
        108,
        102,
        102,
        101,
        105
      ],
      "periodStart": "2024-11-15",
      "periodEnd": "2025-09-12"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "계약서 특약사항 날인 누락 1건",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,456만원",
      "occurredDate": "2026-08-22",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "lastCheckDate": "2025-04-07",
      "result": "적합",
      "nextCheckDate": "2025-10-06",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE026",
    "name": "더카페 이마트 광산점 B1층",
    "brand": "더카페",
    "code": "CAFE-026",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-09-21",
      "estimatedAmount": "월 1.22억"
    },
    "revenueAchievement": {
      "ratio": 83,
      "actualAmount": "9,683만",
      "targetAmount": "1.17억",
      "trend": [
        79,
        87,
        87,
        76,
        76,
        83
      ],
      "periodStart": "2025-07-10",
      "periodEnd": "2026-06-28"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-10",
      "result": "적합",
      "nextCheckDate": "2025-11-08",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE027",
    "name": "더카페 이마트 동해점 1층",
    "brand": "더카페",
    "code": "CAFE-027",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-01-18"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-06-14",
      "estimatedAmount": "월 1.33억"
    },
    "revenueAchievement": {
      "ratio": 117,
      "actualAmount": "2.11억",
      "targetAmount": "1.8억",
      "trend": [
        111,
        116,
        115,
        120,
        115,
        117
      ],
      "periodStart": "2024-05-07",
      "periodEnd": "2024-09-30"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-25",
      "result": "적합",
      "nextCheckDate": "2026-02-23",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE028",
    "name": "더카페 이랜드 목포점",
    "brand": "더카페",
    "code": "CAFE-028",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-12-29"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-12-28",
      "estimatedAmount": "월 1.39억"
    },
    "revenueAchievement": {
      "ratio": 53,
      "actualAmount": "9,133만",
      "targetAmount": "1.72억",
      "trend": [
        50,
        49,
        50,
        45,
        51,
        53
      ],
      "periodStart": "2025-04-12",
      "periodEnd": "2026-03-02"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-01",
      "result": "적합",
      "nextCheckDate": "2025-08-02",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE029",
    "name": "더카페 영월고씨동굴점",
    "brand": "더카페",
    "code": "CAFE-029",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-10-19"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-09-03",
      "estimatedAmount": "월 1.12억"
    },
    "revenueAchievement": {
      "ratio": 78,
      "actualAmount": "1.3억",
      "targetAmount": "1.66억",
      "trend": [
        85,
        70,
        74,
        85,
        73,
        78
      ],
      "periodStart": "2026-01-23",
      "periodEnd": "2026-07-13"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "822만원",
      "occurredDate": "2026-07-18",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-24",
      "result": "적합",
      "nextCheckDate": "2026-10-23",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "박현우",
      "date": "2026-06-13"
    }
  },
  {
    "id": "CAFE030",
    "name": "더카페 한신교회점",
    "brand": "더카페",
    "code": "CAFE-030",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "상권 특성상 개별 도면 첨부 지정",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-10-27"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-05-11",
      "estimatedAmount": "월 6,685만"
    },
    "revenueAchievement": {
      "ratio": 80,
      "actualAmount": "9,520만",
      "targetAmount": "1.19억",
      "trend": [
        85,
        76,
        88,
        79,
        72,
        80
      ],
      "periodStart": "2024-05-24",
      "periodEnd": "2024-09-11"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "312만원",
      "occurredDate": "2026-06-23",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "lastCheckDate": "2026-02-27",
      "result": "적합",
      "nextCheckDate": "2026-08-28",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE031",
    "name": "더카페 나주점",
    "brand": "더카페",
    "code": "CAFE-031",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2023-06-20"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-07-11",
      "estimatedAmount": "월 1.96억"
    },
    "revenueAchievement": {
      "ratio": 58,
      "actualAmount": "3,667만",
      "targetAmount": "6,322만",
      "trend": [
        63,
        55,
        55,
        50,
        57,
        58
      ],
      "periodStart": "2024-11-01",
      "periodEnd": "2025-04-05"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-04-18",
      "result": "점검예정",
      "nextCheckDate": "2025-10-17",
      "specialNote": ""
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "정하은",
      "date": "2026-07-06"
    }
  },
  {
    "id": "CAFE032",
    "name": "더카페 가산이노플렉스점",
    "brand": "더카페",
    "code": "CAFE-032",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2024-07-12"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-11-17",
      "estimatedAmount": "월 4,264만"
    },
    "revenueAchievement": {
      "ratio": 79,
      "actualAmount": "8,317만",
      "targetAmount": "1.05억",
      "trend": [
        77,
        74,
        84,
        75,
        72,
        79
      ],
      "periodStart": "2025-08-18",
      "periodEnd": "2026-06-02"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-15",
      "result": "적합",
      "nextCheckDate": "2025-09-13",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE033",
    "name": "더카페 롯데마트 시흥점 2층",
    "brand": "더카페",
    "code": "CAFE-033",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-07-02"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2023-08-03",
      "estimatedAmount": "월 1.05억"
    },
    "revenueAchievement": {
      "ratio": 109,
      "actualAmount": "1.95억",
      "targetAmount": "1.79억",
      "trend": [
        116,
        109,
        107,
        110,
        102,
        109
      ],
      "periodStart": "2024-03-28",
      "periodEnd": "2024-08-22"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,056만원",
      "occurredDate": "2026-08-06",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-04",
      "result": "시정요구",
      "nextCheckDate": "2026-06-04",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE034",
    "name": "더카페 고양삼송점",
    "brand": "더카페",
    "code": "CAFE-034",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-10-31",
      "estimatedAmount": "월 1.24억"
    },
    "revenueAchievement": {
      "ratio": 96,
      "actualAmount": "1.25억",
      "targetAmount": "1.3억",
      "trend": [
        97,
        89,
        101,
        102,
        88,
        96
      ],
      "periodStart": "2025-07-25",
      "periodEnd": "2026-05-16"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-31",
      "result": "적합",
      "nextCheckDate": "2025-08-01",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "정하은",
      "date": "2026-08-01"
    }
  },
  {
    "id": "CAFE035",
    "name": "더카페 이마트 평촌점 2층",
    "brand": "더카페",
    "code": "CAFE-035",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2024-12-25"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2023-06-02",
      "estimatedAmount": "월 2억"
    },
    "revenueAchievement": {
      "ratio": 52,
      "actualAmount": "9,812만",
      "targetAmount": "1.89억",
      "trend": [
        53,
        47,
        49,
        58,
        54,
        52
      ],
      "periodStart": "2025-12-03",
      "periodEnd": "2026-11-04"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-06-03",
      "result": "적합",
      "nextCheckDate": "2025-12-02",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE036",
    "name": "더카페 이마트 파주점 1층",
    "brand": "더카페",
    "code": "CAFE-036",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2022-04-02",
      "estimatedAmount": "월 1.93억"
    },
    "revenueAchievement": {
      "ratio": 44,
      "actualAmount": "5,770만",
      "targetAmount": "1.31억",
      "trend": [
        49,
        48,
        51,
        48,
        41,
        44
      ],
      "periodStart": "2025-05-08",
      "periodEnd": "2026-04-26"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-15",
      "result": "적합",
      "nextCheckDate": "2025-08-16",
      "specialNote": ""
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "최지민",
      "date": "2026-05-05"
    }
  },
  {
    "id": "CAFE037",
    "name": "더카페 성지스타위드점",
    "brand": "더카페",
    "code": "CAFE-037",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-02-12"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-19",
      "result": "적합",
      "nextCheckDate": "2026-10-18",
      "specialNote": ""
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "박현우",
      "date": "2026-08-03"
    }
  },
  {
    "id": "CAFE038",
    "name": "더카페 뉴코아 창원점 B1층",
    "brand": "더카페",
    "code": "CAFE-038",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2022-07-11"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2024-05-26",
      "estimatedAmount": "월 4,518만"
    },
    "revenueAchievement": {
      "ratio": 91,
      "actualAmount": "1.5억",
      "targetAmount": "1.65억",
      "trend": [
        85,
        85,
        95,
        86,
        98,
        91
      ],
      "periodStart": "2025-02-19",
      "periodEnd": "2025-12-19"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,199만원",
      "occurredDate": "2026-06-30",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-08",
      "result": "적합",
      "nextCheckDate": "2025-09-06",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE039",
    "name": "더카페 화성송산점",
    "brand": "더카페",
    "code": "CAFE-039",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2022-06-24"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2022-02-20",
      "estimatedAmount": "월 1.79억"
    },
    "revenueAchievement": {
      "ratio": 86,
      "actualAmount": "4,069만",
      "targetAmount": "4,732만",
      "trend": [
        86,
        90,
        79,
        87,
        88,
        86
      ],
      "periodStart": "2025-01-21",
      "periodEnd": "2025-07-22"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-24",
      "result": "시정요구",
      "nextCheckDate": "2025-07-25",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "이서연",
      "date": "2026-07-12"
    }
  },
  {
    "id": "CAFE040",
    "name": "더카페 서수원하나로마트점 B1층",
    "brand": "더카페",
    "code": "CAFE-040",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-10-05"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-07-08",
      "estimatedAmount": "월 1.47억"
    },
    "revenueAchievement": {
      "ratio": 42,
      "actualAmount": "6,947만",
      "targetAmount": "1.65억",
      "trend": [
        47,
        34,
        48,
        35,
        45,
        42
      ],
      "periodStart": "2024-09-24",
      "periodEnd": "2024-12-26"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-26",
      "result": "적합",
      "nextCheckDate": "2026-11-24",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE041",
    "name": "더카페 뉴코아 부천점 1층",
    "brand": "더카페",
    "code": "CAFE-041",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-16",
      "result": "적합",
      "nextCheckDate": "2025-09-14",
      "specialNote": ""
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "정하은",
      "date": "2026-08-17"
    }
  },
  {
    "id": "CAFE042",
    "name": "더카페 이마트 대전복합터미널점 3층",
    "brand": "더카페",
    "code": "CAFE-042",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2023-04-14",
      "estimatedAmount": "월 1.2억"
    },
    "revenueAchievement": {
      "ratio": 116,
      "actualAmount": "7,965만",
      "targetAmount": "6,866만",
      "trend": [
        118,
        124,
        116,
        108,
        111,
        116
      ],
      "periodStart": "2024-03-09",
      "periodEnd": "2025-02-21"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-20",
      "result": "시정요구",
      "nextCheckDate": "2026-05-21",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE043",
    "name": "더카페 뉴코아 일산점 B1층",
    "brand": "더카페",
    "code": "CAFE-043",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-10-09",
      "estimatedAmount": "월 4,949만"
    },
    "revenueAchievement": {
      "ratio": 64,
      "actualAmount": "6,128만",
      "targetAmount": "9,576만",
      "trend": [
        65,
        61,
        69,
        65,
        56,
        64
      ],
      "periodStart": "2024-09-04",
      "periodEnd": "2025-07-18"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-06-26",
      "result": "적합",
      "nextCheckDate": "2025-12-25",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE044",
    "name": "더카페 유성영풍문고점 3층",
    "brand": "더카페",
    "code": "CAFE-044",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2024-11-11"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2026-02-03",
      "estimatedAmount": "월 1.2억"
    },
    "revenueAchievement": {
      "ratio": 74,
      "actualAmount": "9,192만",
      "targetAmount": "1.24억",
      "trend": [
        79,
        74,
        82,
        78,
        67,
        74
      ],
      "periodStart": "2025-12-16",
      "periodEnd": "2026-11-14"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "면적 표기 오류 (계약서 vs 등기부)",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-06-29",
      "result": "시정요구",
      "nextCheckDate": "2025-12-28",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE045",
    "name": "더카페 제천천남점",
    "brand": "더카페",
    "code": "CAFE-045",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2025-06-27"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-06-30",
      "estimatedAmount": "월 1.49억"
    },
    "revenueAchievement": {
      "ratio": 95,
      "actualAmount": "1.81억",
      "targetAmount": "1.91억",
      "trend": [
        94,
        90,
        90,
        94,
        97,
        95
      ],
      "periodStart": "2025-03-19",
      "periodEnd": "2026-02-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-05",
      "result": "적합",
      "nextCheckDate": "2025-09-03",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE046",
    "name": "더카페 NC 중앙로역점 5층",
    "brand": "더카페",
    "code": "CAFE-046",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "직접입력",
      "scopeText": "상권 특성상 개별 도면 첨부 지정",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-02-03"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-06-06",
      "result": "적합",
      "nextCheckDate": "2026-12-05",
      "specialNote": ""
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "최지민",
      "date": "2026-07-14"
    }
  },
  {
    "id": "CAFE047",
    "name": "더카페 독산점",
    "brand": "더카페",
    "code": "CAFE-047",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2026-03-21"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-30",
      "result": "적합",
      "nextCheckDate": "2026-11-28",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE048",
    "name": "더카페 송파가락점",
    "brand": "더카페",
    "code": "CAFE-048",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2023-11-04"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-03",
      "result": "적합",
      "nextCheckDate": "2025-11-01",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "정하은",
      "date": "2026-08-11"
    }
  },
  {
    "id": "CAFE049",
    "name": "더카페 2001 천호점 5층",
    "brand": "더카페",
    "code": "CAFE-049",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-24",
      "result": "적합",
      "nextCheckDate": "2025-08-25",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "박현우",
      "date": "2026-05-18"
    }
  },
  {
    "id": "CAFE050",
    "name": "더카페 뉴코아 동수원점 9층",
    "brand": "더카페",
    "code": "CAFE-050",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-06-29"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2025-02-14",
      "estimatedAmount": "월 7,621만"
    },
    "revenueAchievement": {
      "ratio": 68,
      "actualAmount": "7,803만",
      "targetAmount": "1.15억",
      "trend": [
        60,
        67,
        69,
        63,
        64,
        68
      ],
      "periodStart": "2025-02-24",
      "periodEnd": "2025-08-23"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "면적 표기 오류 (계약서 vs 등기부)",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-29",
      "result": "적합",
      "nextCheckDate": "2026-01-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "정하은",
      "date": "2026-07-09"
    }
  },
  {
    "id": "CAFE051",
    "name": "더카페 가산이앤씨8차점",
    "brand": "더카페",
    "code": "CAFE-051",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2023-04-18"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-05-12",
      "estimatedAmount": "월 1억"
    },
    "revenueAchievement": {
      "ratio": 100,
      "actualAmount": "1.36억",
      "targetAmount": "1.36억",
      "trend": [
        106,
        108,
        103,
        98,
        108,
        100
      ],
      "periodStart": "2025-08-26",
      "periodEnd": "2026-08-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-31",
      "result": "적합",
      "nextCheckDate": "2025-09-29",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE052",
    "name": "더카페 뉴코아 순천점 1층",
    "brand": "더카페",
    "code": "CAFE-052",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2024-03-02",
      "estimatedAmount": "월 1.05억"
    },
    "revenueAchievement": {
      "ratio": 60,
      "actualAmount": "1.12억",
      "targetAmount": "1.87억",
      "trend": [
        58,
        58,
        68,
        59,
        59,
        60
      ],
      "periodStart": "2024-11-05",
      "periodEnd": "2025-11-02"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "719만원",
      "occurredDate": "2026-06-03",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "lastCheckDate": "2026-07-18",
      "result": "적합",
      "nextCheckDate": "2027-01-16",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE053",
    "name": "더카페 NC 불광점 8층",
    "brand": "더카페",
    "code": "CAFE-053",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2022-03-12"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-04-19",
      "estimatedAmount": "월 1.84억"
    },
    "revenueAchievement": {
      "ratio": 113,
      "actualAmount": "5,920만",
      "targetAmount": "5,239만",
      "trend": [
        119,
        117,
        106,
        112,
        112,
        113
      ],
      "periodStart": "2025-10-03",
      "periodEnd": "2026-08-10"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-02-16",
      "result": "시정요구",
      "nextCheckDate": "2026-08-17",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE054",
    "name": "더카페 NC 송파점 4층(영관)",
    "brand": "더카페",
    "code": "CAFE-054",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-01-13"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-12-03",
      "estimatedAmount": "월 7,502만"
    },
    "revenueAchievement": {
      "ratio": 41,
      "actualAmount": "5,889만",
      "targetAmount": "1.44억",
      "trend": [
        44,
        42,
        42,
        44,
        40,
        41
      ],
      "periodStart": "2024-04-18",
      "periodEnd": "2025-01-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-06",
      "result": "적합",
      "nextCheckDate": "2026-09-04",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE055",
    "name": "더카페 롯데마트 영종도점 2층",
    "brand": "더카페",
    "code": "CAFE-055",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-11-02"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2025-06-21",
      "estimatedAmount": "월 4,823만"
    },
    "revenueAchievement": {
      "ratio": 104,
      "actualAmount": "1.01억",
      "targetAmount": "9,760만",
      "trend": [
        96,
        112,
        101,
        112,
        99,
        104
      ],
      "periodStart": "2024-04-25",
      "periodEnd": "2024-09-23"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-30",
      "result": "시정요구",
      "nextCheckDate": "2025-07-31",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE056",
    "name": "더카페 인천논현역점",
    "brand": "더카페",
    "code": "CAFE-056",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-07-29"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-11-10",
      "estimatedAmount": "월 1.63억"
    },
    "revenueAchievement": {
      "ratio": 104,
      "actualAmount": "8,566만",
      "targetAmount": "8,237만",
      "trend": [
        107,
        99,
        104,
        97,
        97,
        104
      ],
      "periodStart": "2024-09-22",
      "periodEnd": "2025-02-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-30",
      "result": "적합",
      "nextCheckDate": "2026-10-29",
      "specialNote": "유통기한 표시 라벨 재정비 요청"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE057",
    "name": "더카페 종각역점",
    "brand": "더카페",
    "code": "CAFE-057",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2022-04-28"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-18",
      "result": "적합",
      "nextCheckDate": "2025-08-19",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE058",
    "name": "더카페 뉴코아 강남점 3층",
    "brand": "더카페",
    "code": "CAFE-058",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-11-18"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2026-01-01",
      "estimatedAmount": "월 1.91억"
    },
    "revenueAchievement": {
      "ratio": 84,
      "actualAmount": "8,919만",
      "targetAmount": "1.06억",
      "trend": [
        83,
        88,
        92,
        82,
        85,
        84
      ],
      "periodStart": "2024-09-06",
      "periodEnd": "2024-12-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-05",
      "result": "부적합",
      "nextCheckDate": "2026-07-06",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE059",
    "name": "더카페 엔터식스안양점6층",
    "brand": "더카페",
    "code": "CAFE-059",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-10-25",
      "estimatedAmount": "월 1.8억"
    },
    "revenueAchievement": {
      "ratio": 64,
      "actualAmount": "5,962만",
      "targetAmount": "9,316만",
      "trend": [
        69,
        62,
        70,
        61,
        56,
        64
      ],
      "periodStart": "2024-11-27",
      "periodEnd": "2025-05-23"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-01",
      "result": "시정요구",
      "nextCheckDate": "2026-10-30",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE060",
    "name": "더카페 NC 해운대점 7층",
    "brand": "더카페",
    "code": "CAFE-060",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2026-02-20",
      "estimatedAmount": "월 1.83억"
    },
    "revenueAchievement": {
      "ratio": 109,
      "actualAmount": "1.58억",
      "targetAmount": "1.45억",
      "trend": [
        108,
        101,
        115,
        116,
        111,
        109
      ],
      "periodStart": "2025-03-14",
      "periodEnd": "2025-11-09"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-02",
      "result": "부적합",
      "nextCheckDate": "2026-01-31",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "박현우",
      "date": "2026-05-06"
    }
  },
  {
    "id": "CAFE061",
    "name": "더카페 롯데마트 권선점",
    "brand": "더카페",
    "code": "CAFE-061",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-08-05"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-11-18",
      "estimatedAmount": "월 1.56억"
    },
    "revenueAchievement": {
      "ratio": 110,
      "actualAmount": "5,169만",
      "targetAmount": "4,699만",
      "trend": [
        109,
        102,
        114,
        117,
        105,
        110
      ],
      "periodStart": "2025-04-16",
      "periodEnd": "2026-03-02"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-29",
      "result": "시정요구",
      "nextCheckDate": "2026-02-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE062",
    "name": "더카페 영도중앙점",
    "brand": "더카페",
    "code": "CAFE-062",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-11-09"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2023-06-15",
      "estimatedAmount": "월 1.89억"
    },
    "revenueAchievement": {
      "ratio": 98,
      "actualAmount": "1.15억",
      "targetAmount": "1.17억",
      "trend": [
        92,
        95,
        105,
        93,
        90,
        98
      ],
      "periodStart": "2025-07-08",
      "periodEnd": "2026-05-02"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-09-21",
      "result": "적합",
      "nextCheckDate": "2026-03-22",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "최지민",
      "date": "2026-06-03"
    }
  },
  {
    "id": "CAFE063",
    "name": "더카페 강릉중앙점",
    "brand": "더카페",
    "code": "CAFE-063",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2023-04-14"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-16",
      "result": "적합",
      "nextCheckDate": "2025-07-17",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE064",
    "name": "더카페 신동백두산위브점",
    "brand": "더카페",
    "code": "CAFE-064",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2022-04-30"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-07-24",
      "estimatedAmount": "월 1.4억"
    },
    "revenueAchievement": {
      "ratio": 115,
      "actualAmount": "1.54억",
      "targetAmount": "1.34억",
      "trend": [
        115,
        116,
        111,
        112,
        113,
        115
      ],
      "periodStart": "2025-06-28",
      "periodEnd": "2026-04-06"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-02-22",
      "result": "적합",
      "nextCheckDate": "2026-08-23",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "박현우",
      "date": "2026-06-16"
    }
  },
  {
    "id": "CAFE065",
    "name": "더카페 뉴코아 인천점 1층",
    "brand": "더카페",
    "code": "CAFE-065",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-11-30"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-06-12",
      "estimatedAmount": "월 1.82억"
    },
    "revenueAchievement": {
      "ratio": 64,
      "actualAmount": "5,861만",
      "targetAmount": "9,158만",
      "trend": [
        62,
        60,
        60,
        61,
        56,
        64
      ],
      "periodStart": "2024-02-12",
      "periodEnd": "2025-01-27"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-07-01",
      "result": "적합",
      "nextCheckDate": "2026-12-30",
      "specialNote": ""
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "박현우",
      "date": "2026-08-10"
    }
  },
  {
    "id": "CAFE066",
    "name": "더카페 천호점",
    "brand": "더카페",
    "code": "CAFE-066",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2023-08-28"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-10-09",
      "estimatedAmount": "월 6,708만"
    },
    "revenueAchievement": {
      "ratio": 65,
      "actualAmount": "6,329만",
      "targetAmount": "9,738만",
      "trend": [
        58,
        72,
        65,
        58,
        73,
        65
      ],
      "periodStart": "2026-01-16",
      "periodEnd": "2026-05-28"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-21",
      "result": "적합",
      "nextCheckDate": "2026-01-19",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE067",
    "name": "더카페 동아쇼핑 대구점 5층",
    "brand": "더카페",
    "code": "CAFE-067",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2026-07-23"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-11-05",
      "estimatedAmount": "월 1.97억"
    },
    "revenueAchievement": {
      "ratio": 51,
      "actualAmount": "6,317만",
      "targetAmount": "1.24억",
      "trend": [
        51,
        55,
        49,
        47,
        43,
        51
      ],
      "periodStart": "2025-11-14",
      "periodEnd": "2026-03-05"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-22",
      "result": "적합",
      "nextCheckDate": "2025-09-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "박현우",
      "date": "2026-06-13"
    }
  },
  {
    "id": "CAFE068",
    "name": "더카페 대륭테크노타운5차점",
    "brand": "더카페",
    "code": "CAFE-068",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-06-26"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-02-23",
      "estimatedAmount": "월 1.51억"
    },
    "revenueAchievement": {
      "ratio": 42,
      "actualAmount": "7,741만",
      "targetAmount": "1.84억",
      "trend": [
        44,
        35,
        39,
        37,
        39,
        42
      ],
      "periodStart": "2024-03-07",
      "periodEnd": "2024-06-30"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-06",
      "result": "적합",
      "nextCheckDate": "2026-01-04",
      "specialNote": ""
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "김도윤",
      "date": "2026-08-16"
    }
  },
  {
    "id": "CAFE069",
    "name": "더카페 NC 대전유성점 9층",
    "brand": "더카페",
    "code": "CAFE-069",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "상권 특성상 개별 도면 첨부 지정",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2023-03-21"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-05",
      "result": "시정요구",
      "nextCheckDate": "2026-05-06",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE070",
    "name": "더카페 뉴코아 괴정점 B1층",
    "brand": "더카페",
    "code": "CAFE-070",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-01-27"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-11-01",
      "estimatedAmount": "월 1.74억"
    },
    "revenueAchievement": {
      "ratio": 56,
      "actualAmount": "9,033만",
      "targetAmount": "1.61억",
      "trend": [
        62,
        61,
        48,
        56,
        55,
        56
      ],
      "periodStart": "2025-03-25",
      "periodEnd": "2025-08-12"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-01",
      "result": "적합",
      "nextCheckDate": "2026-09-30",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE071",
    "name": "더카페 파주월드타워9차점",
    "brand": "더카페",
    "code": "CAFE-071",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2023-12-11"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-03-13",
      "estimatedAmount": "월 1.91억"
    },
    "revenueAchievement": {
      "ratio": 73,
      "actualAmount": "1.39억",
      "targetAmount": "1.91억",
      "trend": [
        68,
        67,
        73,
        67,
        72,
        73
      ],
      "periodStart": "2024-04-06",
      "periodEnd": "2024-12-20"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,313만원",
      "occurredDate": "2026-08-22",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-27",
      "result": "시정요구",
      "nextCheckDate": "2025-08-28",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "정하은",
      "date": "2026-07-21"
    }
  },
  {
    "id": "CAFE072",
    "name": "더카페 수색장로교회점",
    "brand": "더카페",
    "code": "CAFE-072",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2026-06-05"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-01-11",
      "estimatedAmount": "월 7,634만"
    },
    "revenueAchievement": {
      "ratio": 51,
      "actualAmount": "9,417만",
      "targetAmount": "1.85억",
      "trend": [
        52,
        47,
        53,
        45,
        58,
        51
      ],
      "periodStart": "2025-08-18",
      "periodEnd": "2026-03-18"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-02",
      "result": "적합",
      "nextCheckDate": "2025-08-31",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE073",
    "name": "더카페 청라커낼웨이점",
    "brand": "더카페",
    "code": "CAFE-073",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-04-11"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2026-01-24",
      "estimatedAmount": "월 1.05억"
    },
    "revenueAchievement": {
      "ratio": 103,
      "actualAmount": "2.03억",
      "targetAmount": "1.97억",
      "trend": [
        106,
        106,
        106,
        106,
        101,
        103
      ],
      "periodStart": "2024-08-16",
      "periodEnd": "2025-02-01"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-04-28",
      "result": "적합",
      "nextCheckDate": "2025-10-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE074",
    "name": "더카페 미사현대3차점",
    "brand": "더카페",
    "code": "CAFE-074",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-12-17",
      "estimatedAmount": "월 4,333만"
    },
    "revenueAchievement": {
      "ratio": 54,
      "actualAmount": "1.06억",
      "targetAmount": "1.97억",
      "trend": [
        55,
        51,
        50,
        56,
        50,
        54
      ],
      "periodStart": "2024-08-03",
      "periodEnd": "2025-01-18"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-06-09",
      "result": "시정요구",
      "nextCheckDate": "2025-12-08",
      "specialNote": "유통기한 표시 라벨 재정비 요청"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE075",
    "name": "더카페 NC 불광점 7층",
    "brand": "더카페",
    "code": "CAFE-075",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2023-07-28"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-19",
      "result": "적합",
      "nextCheckDate": "2025-08-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE076",
    "name": "더카페 원흥역점",
    "brand": "더카페",
    "code": "CAFE-076",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2023-05-19"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-11-07",
      "estimatedAmount": "월 1.69억"
    },
    "revenueAchievement": {
      "ratio": 117,
      "actualAmount": "6,868만",
      "targetAmount": "5,870만",
      "trend": [
        122,
        109,
        119,
        116,
        121,
        117
      ],
      "periodStart": "2024-04-15",
      "periodEnd": "2024-12-07"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-04-26",
      "result": "적합",
      "nextCheckDate": "2025-10-25",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "김도윤",
      "date": "2026-05-10"
    }
  },
  {
    "id": "CAFE077",
    "name": "더카페 NC 야탑점 7층",
    "brand": "더카페",
    "code": "CAFE-077",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2022-05-04"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-02-27",
      "estimatedAmount": "월 8,509만"
    },
    "revenueAchievement": {
      "ratio": 116,
      "actualAmount": "2.1억",
      "targetAmount": "1.81억",
      "trend": [
        123,
        113,
        113,
        124,
        109,
        116
      ],
      "periodStart": "2024-10-19",
      "periodEnd": "2025-07-23"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-26",
      "result": "적합",
      "nextCheckDate": "2026-05-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "이서연",
      "date": "2026-05-12"
    }
  },
  {
    "id": "CAFE078",
    "name": "더카페 가산웰츠밸리점",
    "brand": "더카페",
    "code": "CAFE-078",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2023-06-03"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-05",
      "result": "적합",
      "nextCheckDate": "2026-01-03",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "이서연",
      "date": "2026-05-14"
    }
  },
  {
    "id": "CAFE079",
    "name": "더카페 이마트 하남점 1층",
    "brand": "더카페",
    "code": "CAFE-079",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2022-12-04"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2022-07-15",
      "estimatedAmount": "월 1.24억"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "8,532만",
      "targetAmount": "1.55억",
      "trend": [
        49,
        60,
        56,
        63,
        51,
        55
      ],
      "periodStart": "2025-11-13",
      "periodEnd": "2026-05-13"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-28",
      "result": "적합",
      "nextCheckDate": "2026-10-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "김도윤",
      "date": "2026-07-12"
    }
  },
  {
    "id": "CAFE080",
    "name": "더카페 롯데마트 잠실점 6층",
    "brand": "더카페",
    "code": "CAFE-080",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-02-29"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2022-08-22",
      "estimatedAmount": "월 1.52억"
    },
    "revenueAchievement": {
      "ratio": 103,
      "actualAmount": "7,614만",
      "targetAmount": "7,392만",
      "trend": [
        103,
        97,
        98,
        95,
        104,
        103
      ],
      "periodStart": "2025-11-18",
      "periodEnd": "2026-04-21"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-15",
      "result": "적합",
      "nextCheckDate": "2025-09-13",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE081",
    "name": "더카페 망포방죽공원점",
    "brand": "더카페",
    "code": "CAFE-081",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-06-15"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-04-01",
      "estimatedAmount": "월 1.86억"
    },
    "revenueAchievement": {
      "ratio": 76,
      "actualAmount": "6,369만",
      "targetAmount": "8,380만",
      "trend": [
        76,
        84,
        79,
        81,
        78,
        76
      ],
      "periodStart": "2025-04-15",
      "periodEnd": "2026-01-01"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-13",
      "result": "점검예정",
      "nextCheckDate": "2026-10-12",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE082",
    "name": "더카페 중계은행사거리점",
    "brand": "더카페",
    "code": "CAFE-082",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2023-02-11",
      "estimatedAmount": "월 7,596만"
    },
    "revenueAchievement": {
      "ratio": 84,
      "actualAmount": "8,673만",
      "targetAmount": "1.03억",
      "trend": [
        92,
        77,
        77,
        87,
        91,
        84
      ],
      "periodStart": "2024-12-21",
      "periodEnd": "2025-05-02"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-06-15",
      "result": "적합",
      "nextCheckDate": "2026-12-14",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE083",
    "name": "더카페 라운지 동탄점",
    "brand": "더카페",
    "code": "CAFE-083",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-09-30",
      "estimatedAmount": "월 6,620만"
    },
    "revenueAchievement": {
      "ratio": 67,
      "actualAmount": "2,814만",
      "targetAmount": "4,200만",
      "trend": [
        59,
        59,
        72,
        63,
        61,
        67
      ],
      "periodStart": "2024-07-06",
      "periodEnd": "2025-05-11"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-23",
      "result": "적합",
      "nextCheckDate": "2026-05-24",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE084",
    "name": "더카페 애플사상점 2층",
    "brand": "더카페",
    "code": "CAFE-084",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-03-03"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-04-12",
      "estimatedAmount": "월 1.95억"
    },
    "revenueAchievement": {
      "ratio": 103,
      "actualAmount": "1.43억",
      "targetAmount": "1.39억",
      "trend": [
        95,
        110,
        105,
        108,
        96,
        103
      ],
      "periodStart": "2024-11-14",
      "periodEnd": "2025-05-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-25",
      "result": "적합",
      "nextCheckDate": "2025-09-23",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE085",
    "name": "더카페 성대시장점",
    "brand": "더카페",
    "code": "CAFE-085",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2025-10-26"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-01-25",
      "estimatedAmount": "월 1.97억"
    },
    "revenueAchievement": {
      "ratio": 47,
      "actualAmount": "3,054만",
      "targetAmount": "6,498만",
      "trend": [
        44,
        46,
        39,
        41,
        51,
        47
      ],
      "periodStart": "2025-07-26",
      "periodEnd": "2026-07-07"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-03",
      "result": "적합",
      "nextCheckDate": "2026-02-01",
      "specialNote": ""
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "김도윤",
      "date": "2026-07-12"
    }
  },
  {
    "id": "CAFE086",
    "name": "더카페 오금점",
    "brand": "더카페",
    "code": "CAFE-086",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2025-02-11"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2022-01-18",
      "estimatedAmount": "월 6,785만"
    },
    "revenueAchievement": {
      "ratio": 58,
      "actualAmount": "8,306만",
      "targetAmount": "1.43억",
      "trend": [
        57,
        62,
        56,
        51,
        55,
        58
      ],
      "periodStart": "2024-05-22",
      "periodEnd": "2025-02-08"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-10-07",
      "result": "시정요구",
      "nextCheckDate": "2026-04-07",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "김도윤",
      "date": "2026-07-02"
    }
  },
  {
    "id": "CAFE087",
    "name": "더카페 뉴코아 평택점 9층",
    "brand": "더카페",
    "code": "CAFE-087",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-12-10"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2022-01-08",
      "estimatedAmount": "월 1.16억"
    },
    "revenueAchievement": {
      "ratio": 47,
      "actualAmount": "5,765만",
      "targetAmount": "1.23억",
      "trend": [
        39,
        45,
        53,
        52,
        47,
        47
      ],
      "periodStart": "2024-12-24",
      "periodEnd": "2025-05-15"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-07",
      "result": "적합",
      "nextCheckDate": "2026-11-05",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE088",
    "name": "더카페 라운지 제주 서귀포점",
    "brand": "더카페",
    "code": "CAFE-088",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "지하상가 구획 특수성 반영 지정",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2022-04-13"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2022-10-28",
      "estimatedAmount": "월 9,540만"
    },
    "revenueAchievement": {
      "ratio": 73,
      "actualAmount": "6,322만",
      "targetAmount": "8,660만",
      "trend": [
        74,
        79,
        80,
        66,
        73,
        73
      ],
      "periodStart": "2024-04-06",
      "periodEnd": "2024-10-06"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-04",
      "result": "점검예정",
      "nextCheckDate": "2026-01-02",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE089",
    "name": "더카페 죽도시장점",
    "brand": "더카페",
    "code": "CAFE-089",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-09",
      "result": "점검예정",
      "nextCheckDate": "2025-07-10",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE090",
    "name": "더카페 NC 안산고잔점 5층",
    "brand": "더카페",
    "code": "CAFE-090",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-09-26"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-04-19",
      "estimatedAmount": "월 7,497만"
    },
    "revenueAchievement": {
      "ratio": 53,
      "actualAmount": "6,225만",
      "targetAmount": "1.17억",
      "trend": [
        60,
        60,
        46,
        58,
        47,
        53
      ],
      "periodStart": "2024-11-15",
      "periodEnd": "2025-08-18"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "574만원",
      "occurredDate": "2026-05-23",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-24",
      "result": "부적합",
      "nextCheckDate": "2026-01-22",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE091",
    "name": "더카페 진해연리지점",
    "brand": "더카페",
    "code": "CAFE-091",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-03-08"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-08-18",
      "estimatedAmount": "월 1.02억"
    },
    "revenueAchievement": {
      "ratio": 41,
      "actualAmount": "3,043만",
      "targetAmount": "7,422만",
      "trend": [
        46,
        36,
        39,
        40,
        33,
        41
      ],
      "periodStart": "2024-11-30",
      "periodEnd": "2025-10-08"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-28",
      "result": "적합",
      "nextCheckDate": "2026-02-26",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE092",
    "name": "더카페 뉴코아 산본점 1층",
    "brand": "더카페",
    "code": "CAFE-092",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2022-04-09",
      "estimatedAmount": "월 5,090만"
    },
    "revenueAchievement": {
      "ratio": 67,
      "actualAmount": "1.26억",
      "targetAmount": "1.88억",
      "trend": [
        68,
        59,
        64,
        74,
        69,
        67
      ],
      "periodStart": "2025-03-28",
      "periodEnd": "2025-11-24"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-06",
      "result": "시정요구",
      "nextCheckDate": "2025-09-04",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "김도윤",
      "date": "2026-08-16"
    }
  },
  {
    "id": "CAFE093",
    "name": "더카페 광명성애병원점",
    "brand": "더카페",
    "code": "CAFE-093",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-07-13"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-06-25",
      "result": "적합",
      "nextCheckDate": "2025-12-24",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE094",
    "name": "더카페 용문사거리점",
    "brand": "더카페",
    "code": "CAFE-094",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미입력",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-16",
      "result": "부적합",
      "nextCheckDate": "2026-06-16",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE095",
    "name": "더카페 대구83타워점 77층",
    "brand": "더카페",
    "code": "CAFE-095",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-07-15"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2023-02-19",
      "estimatedAmount": "월 6,060만"
    },
    "revenueAchievement": {
      "ratio": 107,
      "actualAmount": "1.11억",
      "targetAmount": "1.04억",
      "trend": [
        107,
        113,
        107,
        112,
        113,
        107
      ],
      "periodStart": "2024-11-04",
      "periodEnd": "2025-08-10"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "140만원",
      "occurredDate": "2026-05-17",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-10",
      "result": "적합",
      "nextCheckDate": "2026-09-08",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "최지민",
      "date": "2026-06-23"
    }
  },
  {
    "id": "CAFE096",
    "name": "더카페 신내역점",
    "brand": "더카페",
    "code": "CAFE-096",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2022-08-08"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-06-06",
      "estimatedAmount": "월 1.89억"
    },
    "revenueAchievement": {
      "ratio": 105,
      "actualAmount": "1.85억",
      "targetAmount": "1.76억",
      "trend": [
        99,
        106,
        112,
        97,
        100,
        105
      ],
      "periodStart": "2024-01-05",
      "periodEnd": "2024-06-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-02",
      "result": "적합",
      "nextCheckDate": "2026-06-02",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE097",
    "name": "더카페 화성병점점",
    "brand": "더카페",
    "code": "CAFE-097",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2023-10-30"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2023-02-15",
      "estimatedAmount": "월 1.02억"
    },
    "revenueAchievement": {
      "ratio": 109,
      "actualAmount": "2.16억",
      "targetAmount": "1.98억",
      "trend": [
        114,
        107,
        114,
        104,
        114,
        109
      ],
      "periodStart": "2024-12-26",
      "periodEnd": "2025-03-26"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-02-02",
      "result": "적합",
      "nextCheckDate": "2026-08-03",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "정하은",
      "date": "2026-07-03"
    }
  },
  {
    "id": "CAFE098",
    "name": "더카페 야탑도촌점",
    "brand": "더카페",
    "code": "CAFE-098",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-08-25",
      "estimatedAmount": "월 5,100만"
    },
    "revenueAchievement": {
      "ratio": 111,
      "actualAmount": "1.36억",
      "targetAmount": "1.22억",
      "trend": [
        119,
        111,
        105,
        112,
        107,
        111
      ],
      "periodStart": "2024-02-11",
      "periodEnd": "2024-07-08"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-14",
      "result": "적합",
      "nextCheckDate": "2026-07-15",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "최지민",
      "date": "2026-05-15"
    }
  },
  {
    "id": "CAFE099",
    "name": "더카페 대덕테크노밸리점",
    "brand": "더카페",
    "code": "CAFE-099",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "상권 특성상 개별 도면 첨부 지정",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2026-01-21"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-05-15",
      "estimatedAmount": "월 6,915만"
    },
    "revenueAchievement": {
      "ratio": 94,
      "actualAmount": "4,311만",
      "targetAmount": "4,587만",
      "trend": [
        99,
        93,
        89,
        95,
        93,
        94
      ],
      "periodStart": "2025-07-08",
      "periodEnd": "2025-11-23"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "287만원",
      "occurredDate": "2026-07-09",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-12-20",
      "result": "적합",
      "nextCheckDate": "2026-06-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "정하은",
      "date": "2026-07-25"
    }
  },
  {
    "id": "CAFE100",
    "name": "더카페 수원이노플렉스점",
    "brand": "더카페",
    "code": "CAFE-100",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2023-12-10"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-01-05",
      "estimatedAmount": "월 1.29억"
    },
    "revenueAchievement": {
      "ratio": 48,
      "actualAmount": "2,242만",
      "targetAmount": "4,670만",
      "trend": [
        42,
        44,
        49,
        45,
        48,
        48
      ],
      "periodStart": "2025-08-07",
      "periodEnd": "2026-08-05"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-26",
      "result": "시정요구",
      "nextCheckDate": "2025-07-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE101",
    "name": "더카페 2001 분당점 B2층",
    "brand": "더카페",
    "code": "CAFE-101",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "1층 매장 전용면적 기준 별도 협의",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-12-13"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-07-30",
      "estimatedAmount": "월 1.64억"
    },
    "revenueAchievement": {
      "ratio": 60,
      "actualAmount": "8,634만",
      "targetAmount": "1.44억",
      "trend": [
        65,
        54,
        55,
        68,
        57,
        60
      ],
      "periodStart": "2025-01-23",
      "periodEnd": "2025-09-26"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-01",
      "result": "시정요구",
      "nextCheckDate": "2025-08-02",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE102",
    "name": "더카페 대구동서변점",
    "brand": "더카페",
    "code": "CAFE-102",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2023-05-25"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-11-20",
      "estimatedAmount": "월 1.1억"
    },
    "revenueAchievement": {
      "ratio": 110,
      "actualAmount": "9,253만",
      "targetAmount": "8,412만",
      "trend": [
        108,
        105,
        103,
        110,
        103,
        110
      ],
      "periodStart": "2025-05-26",
      "periodEnd": "2025-12-27"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-05",
      "result": "시정요구",
      "nextCheckDate": "2026-11-03",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE103",
    "name": "더카페 거제옥포점",
    "brand": "더카페",
    "code": "CAFE-103",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-01-10"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-09-13",
      "estimatedAmount": "월 6,983만"
    },
    "revenueAchievement": {
      "ratio": 116,
      "actualAmount": "2.17억",
      "targetAmount": "1.87억",
      "trend": [
        117,
        113,
        112,
        112,
        113,
        116
      ],
      "periodStart": "2024-10-27",
      "periodEnd": "2025-08-06"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-04-20",
      "result": "적합",
      "nextCheckDate": "2025-10-19",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE104",
    "name": "더카페 NC 충장점 2층",
    "brand": "더카페",
    "code": "CAFE-104",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-10-28"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-04-05",
      "estimatedAmount": "월 7,995만"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "7,646만",
      "targetAmount": "1.39억",
      "trend": [
        63,
        63,
        58,
        56,
        63,
        55
      ],
      "periodStart": "2024-04-24",
      "periodEnd": "2025-02-03"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-30",
      "result": "점검예정",
      "nextCheckDate": "2026-07-31",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE105",
    "name": "더카페 서울숲SKV1점",
    "brand": "더카페",
    "code": "CAFE-105",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2023-04-04"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2022-02-04",
      "estimatedAmount": "월 7,428만"
    },
    "revenueAchievement": {
      "ratio": 104,
      "actualAmount": "1.9억",
      "targetAmount": "1.83억",
      "trend": [
        107,
        96,
        102,
        97,
        99,
        104
      ],
      "periodStart": "2025-10-26",
      "periodEnd": "2026-03-11"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "계약서 특약사항 날인 누락 1건",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-13",
      "result": "적합",
      "nextCheckDate": "2026-09-11",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE106",
    "name": "더카페 구로전화국사거리점",
    "brand": "더카페",
    "code": "CAFE-106",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-01-24"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-24",
      "result": "점검예정",
      "nextCheckDate": "2026-07-25",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "정하은",
      "date": "2026-07-12"
    }
  },
  {
    "id": "CAFE107",
    "name": "더카페 상봉역점",
    "brand": "더카페",
    "code": "CAFE-107",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-06-02"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-01-21",
      "estimatedAmount": "월 1.45억"
    },
    "revenueAchievement": {
      "ratio": 104,
      "actualAmount": "1.05억",
      "targetAmount": "1.01억",
      "trend": [
        107,
        102,
        105,
        112,
        98,
        104
      ],
      "periodStart": "2024-12-26",
      "periodEnd": "2025-03-26"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "면적 표기 오류 (계약서 vs 등기부)",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "287만원",
      "occurredDate": "2026-06-08",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-16",
      "result": "적합",
      "nextCheckDate": "2026-01-14",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE108",
    "name": "더카페 서전주 CGV점",
    "brand": "더카페",
    "code": "CAFE-108",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2022-03-30",
      "estimatedAmount": "월 5,907만"
    },
    "revenueAchievement": {
      "ratio": 89,
      "actualAmount": "6,515만",
      "targetAmount": "7,321만",
      "trend": [
        83,
        83,
        92,
        88,
        81,
        89
      ],
      "periodStart": "2024-03-23",
      "periodEnd": "2024-12-18"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-24",
      "result": "적합",
      "nextCheckDate": "2026-01-22",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE109",
    "name": "더카페 대구호산점",
    "brand": "더카페",
    "code": "CAFE-109",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-09-07"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2022-02-12",
      "estimatedAmount": "월 7,914만"
    },
    "revenueAchievement": {
      "ratio": 52,
      "actualAmount": "6,587만",
      "targetAmount": "1.27억",
      "trend": [
        47,
        55,
        46,
        53,
        45,
        52
      ],
      "periodStart": "2025-09-26",
      "periodEnd": "2026-08-06"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-08-21",
      "result": "부적합",
      "nextCheckDate": "2026-02-19",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE110",
    "name": "더카페 목동달빛거리점",
    "brand": "더카페",
    "code": "CAFE-110",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-03-22"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-06-15",
      "estimatedAmount": "월 9,360만"
    },
    "revenueAchievement": {
      "ratio": 117,
      "actualAmount": "1.05억",
      "targetAmount": "8,987만",
      "trend": [
        125,
        112,
        117,
        113,
        122,
        117
      ],
      "periodStart": "2024-10-23",
      "periodEnd": "2025-05-02"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "863만원",
      "occurredDate": "2026-06-03",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-15",
      "result": "시정요구",
      "nextCheckDate": "2026-05-16",
      "specialNote": "유통기한 표시 라벨 재정비 요청"
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "정하은",
      "date": "2026-05-14"
    }
  },
  {
    "id": "CAFE111",
    "name": "더카페 NC 불광점 B1층",
    "brand": "더카페",
    "code": "CAFE-111",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-04-14"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-07-04",
      "estimatedAmount": "월 1.73억"
    },
    "revenueAchievement": {
      "ratio": 45,
      "actualAmount": "3,756만",
      "targetAmount": "8,348만",
      "trend": [
        52,
        40,
        41,
        38,
        43,
        45
      ],
      "periodStart": "2024-07-10",
      "periodEnd": "2025-05-19"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-04-18",
      "result": "부적합",
      "nextCheckDate": "2025-10-17",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "김도윤",
      "date": "2026-07-15"
    }
  },
  {
    "id": "CAFE112",
    "name": "더카페 라운지 현대백화점충청점 B1층",
    "brand": "더카페",
    "code": "CAFE-112",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2024-12-21"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-18",
      "result": "시정요구",
      "nextCheckDate": "2026-11-16",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE113",
    "name": "더카페 NC 신구로점 6층",
    "brand": "더카페",
    "code": "CAFE-113",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2025-02-10"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-02-06",
      "estimatedAmount": "월 1.63억"
    },
    "revenueAchievement": {
      "ratio": 62,
      "actualAmount": "6,986만",
      "targetAmount": "1.13억",
      "trend": [
        65,
        68,
        68,
        63,
        56,
        62
      ],
      "periodStart": "2024-07-07",
      "periodEnd": "2024-11-15"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-15",
      "result": "적합",
      "nextCheckDate": "2026-01-13",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE114",
    "name": "더카페 성결대점",
    "brand": "더카페",
    "code": "CAFE-114",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2022-11-22"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2026-03-16",
      "estimatedAmount": "월 1.52억"
    },
    "revenueAchievement": {
      "ratio": 41,
      "actualAmount": "2,721만",
      "targetAmount": "6,638만",
      "trend": [
        46,
        38,
        41,
        39,
        36,
        41
      ],
      "periodStart": "2025-09-06",
      "periodEnd": "2026-04-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-03-24",
      "result": "부적합",
      "nextCheckDate": "2026-09-22",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "이서연",
      "date": "2026-05-15"
    }
  },
  {
    "id": "CAFE115",
    "name": "더카페 부산초량점",
    "brand": "더카페",
    "code": "CAFE-115",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2022-01-12",
      "estimatedAmount": "월 1.11억"
    },
    "revenueAchievement": {
      "ratio": 45,
      "actualAmount": "4,086만",
      "targetAmount": "9,081만",
      "trend": [
        50,
        39,
        40,
        53,
        50,
        45
      ],
      "periodStart": "2025-03-20",
      "periodEnd": "2026-03-08"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-09-08",
      "result": "시정요구",
      "nextCheckDate": "2026-03-09",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "박현우",
      "date": "2026-07-20"
    }
  },
  {
    "id": "CAFE116",
    "name": "더카페 동아쇼핑 수성점 7층",
    "brand": "더카페",
    "code": "CAFE-116",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2022-05-30"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-06-09",
      "estimatedAmount": "월 8,150만"
    },
    "revenueAchievement": {
      "ratio": 47,
      "actualAmount": "4,106만",
      "targetAmount": "8,737만",
      "trend": [
        46,
        40,
        51,
        55,
        50,
        47
      ],
      "periodStart": "2025-11-07",
      "periodEnd": "2026-09-11"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-06-02",
      "result": "부적합",
      "nextCheckDate": "2025-12-01",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE117",
    "name": "더카페 김포반다비점 2층",
    "brand": "더카페",
    "code": "CAFE-117",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2024-07-19"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-03-21",
      "estimatedAmount": "월 5,150만"
    },
    "revenueAchievement": {
      "ratio": 58,
      "actualAmount": "6,020만",
      "targetAmount": "1.04억",
      "trend": [
        54,
        64,
        52,
        56,
        66,
        58
      ],
      "periodStart": "2025-07-14",
      "periodEnd": "2025-12-31"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-07-24",
      "result": "적합",
      "nextCheckDate": "2026-01-22",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE118",
    "name": "더카페 공덕데시앙점",
    "brand": "더카페",
    "code": "CAFE-118",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-06-25"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2025-12-22",
      "estimatedAmount": "월 8,940만"
    },
    "revenueAchievement": {
      "ratio": 77,
      "actualAmount": "7,917만",
      "targetAmount": "1.03억",
      "trend": [
        84,
        75,
        82,
        76,
        83,
        77
      ],
      "periodStart": "2024-02-13",
      "periodEnd": "2024-11-16"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-15",
      "result": "적합",
      "nextCheckDate": "2026-07-16",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE119",
    "name": "더카페 뉴코아 창원점 5층",
    "brand": "더카페",
    "code": "CAFE-119",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "상권 재조사 결과 반영 대기",
      "setDate": "2023-02-21"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-06-20",
      "estimatedAmount": "월 6,819만"
    },
    "revenueAchievement": {
      "ratio": 84,
      "actualAmount": "4,855만",
      "targetAmount": "5,779만",
      "trend": [
        88,
        79,
        81,
        77,
        87,
        84
      ],
      "periodStart": "2025-01-01",
      "periodEnd": "2025-12-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-06-26",
      "result": "적합",
      "nextCheckDate": "2026-12-25",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE120",
    "name": "더카페 원주관설치악고점",
    "brand": "더카페",
    "code": "CAFE-120",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2022-11-23"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-08-17",
      "estimatedAmount": "월 1.53억"
    },
    "revenueAchievement": {
      "ratio": 64,
      "actualAmount": "6,412만",
      "targetAmount": "1억",
      "trend": [
        60,
        69,
        71,
        63,
        67,
        64
      ],
      "periodStart": "2025-08-14",
      "periodEnd": "2026-04-22"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-16",
      "result": "부적합",
      "nextCheckDate": "2025-11-14",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE121",
    "name": "더카페 뉴코아 덕천점 6층",
    "brand": "더카페",
    "code": "CAFE-121",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2022-10-27",
      "estimatedAmount": "월 6,313만"
    },
    "revenueAchievement": {
      "ratio": 99,
      "actualAmount": "1.06억",
      "targetAmount": "1.07억",
      "trend": [
        99,
        97,
        98,
        93,
        91,
        99
      ],
      "periodStart": "2024-02-12",
      "periodEnd": "2024-10-08"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "950만원",
      "occurredDate": "2026-07-11",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2026-07-11",
      "result": "시정요구",
      "nextCheckDate": "2027-01-09",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "이서연",
      "date": "2026-08-01"
    }
  },
  {
    "id": "CAFE122",
    "name": "더카페 NC 안산고잔점 B1층",
    "brand": "더카페",
    "code": "CAFE-122",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-06-26"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-09-20",
      "estimatedAmount": "월 1.57억"
    },
    "revenueAchievement": {
      "ratio": 83,
      "actualAmount": "1.6억",
      "targetAmount": "1.93억",
      "trend": [
        82,
        77,
        88,
        79,
        75,
        83
      ],
      "periodStart": "2024-09-30",
      "periodEnd": "2025-02-05"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-24",
      "result": "적합",
      "nextCheckDate": "2025-11-22",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE123",
    "name": "더카페 마곡점",
    "brand": "더카페",
    "code": "CAFE-123",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-10-24"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
      "calcDate": "2024-03-03",
      "estimatedAmount": "월 1.6억"
    },
    "revenueAchievement": {
      "ratio": 70,
      "actualAmount": "9,602만",
      "targetAmount": "1.37억",
      "trend": [
        78,
        63,
        71,
        63,
        65,
        70
      ],
      "periodStart": "2025-07-28",
      "periodEnd": "2026-04-27"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-25",
      "result": "시정요구",
      "nextCheckDate": "2025-11-23",
      "specialNote": ""
    },
    "etc": {
      "memo": "고객 민원 1건 접수, 처리 완료.",
      "author": "정하은",
      "date": "2026-05-26"
    }
  },
  {
    "id": "CAFE124",
    "name": "더카페 서현LG에클라트점",
    "brand": "더카페",
    "code": "CAFE-124",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-11-10"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-05-03",
      "estimatedAmount": "월 1.69억"
    },
    "revenueAchievement": {
      "ratio": 88,
      "actualAmount": "3,778만",
      "targetAmount": "4,294만",
      "trend": [
        87,
        95,
        80,
        95,
        83,
        88
      ],
      "periodStart": "2024-08-13",
      "periodEnd": "2024-11-25"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-13",
      "result": "시정요구",
      "nextCheckDate": "2025-11-11",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE125",
    "name": "더카페 김포양곡점",
    "brand": "더카페",
    "code": "CAFE-125",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "상권 특성상 개별 도면 첨부 지정",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2025-06-19"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-10-28",
      "estimatedAmount": "월 1.03억"
    },
    "revenueAchievement": {
      "ratio": 97,
      "actualAmount": "1.56억",
      "targetAmount": "1.61억",
      "trend": [
        93,
        105,
        93,
        94,
        90,
        97
      ],
      "periodStart": "2025-06-22",
      "periodEnd": "2025-11-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-02-06",
      "result": "시정요구",
      "nextCheckDate": "2026-08-07",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE126",
    "name": "더카페 상도점",
    "brand": "더카페",
    "code": "CAFE-126",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-01-20"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-11-02",
      "estimatedAmount": "월 7,108만"
    },
    "revenueAchievement": {
      "ratio": 98,
      "actualAmount": "1.22억",
      "targetAmount": "1.25억",
      "trend": [
        104,
        94,
        90,
        104,
        91,
        98
      ],
      "periodStart": "2024-04-05",
      "periodEnd": "2025-02-28"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "172만원",
      "occurredDate": "2026-05-27",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "lastCheckDate": "2025-09-02",
      "result": "시정요구",
      "nextCheckDate": "2026-03-03",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE127",
    "name": "더카페 분당샛별점",
    "brand": "더카페",
    "code": "CAFE-127",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "지하상가 구획 특수성 반영 지정",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-06-15"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-08-17",
      "estimatedAmount": "월 6,362만"
    },
    "revenueAchievement": {
      "ratio": 79,
      "actualAmount": "1.49억",
      "targetAmount": "1.89억",
      "trend": [
        77,
        84,
        82,
        74,
        73,
        79
      ],
      "periodStart": "2025-06-13",
      "periodEnd": "2026-05-04"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-05-24",
      "result": "적합",
      "nextCheckDate": "2025-11-22",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "CAFE128",
    "name": "더카페 여의도백화점점",
    "brand": "더카페",
    "code": "CAFE-128",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-07-15"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-12-02",
      "estimatedAmount": "월 1.52억"
    },
    "revenueAchievement": {
      "ratio": 45,
      "actualAmount": "7,560만",
      "targetAmount": "1.68억",
      "trend": [
        50,
        42,
        38,
        41,
        49,
        45
      ],
      "periodStart": "2024-03-08",
      "periodEnd": "2024-08-04"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-06-01",
      "result": "적합",
      "nextCheckDate": "2026-11-30",
      "specialNote": ""
    },
    "etc": {
      "memo": "인근 경쟁점 출점으로 매출 영향 모니터링 중.",
      "author": "이서연",
      "date": "2026-07-12"
    }
  },
  {
    "id": "CAFE129",
    "name": "더카페 영등포구청점",
    "brand": "더카페",
    "code": "CAFE-129",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2026-04-24"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-10-30",
      "estimatedAmount": "월 1.16억"
    },
    "revenueAchievement": {
      "ratio": 68,
      "actualAmount": "4,716만",
      "targetAmount": "6,936만",
      "trend": [
        60,
        67,
        64,
        68,
        60,
        68
      ],
      "periodStart": "2025-10-16",
      "periodEnd": "2026-08-14"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-09-07",
      "result": "시정요구",
      "nextCheckDate": "2026-03-08",
      "specialNote": "개인위생 점검표 작성 누락 확인"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "TERU001",
    "name": "테루 NC 신구로점(가맹)",
    "brand": "테루",
    "code": "TERU-001",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2022-01-20"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-02-27",
      "result": "적합",
      "nextCheckDate": "2025-08-28",
      "specialNote": ""
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "이서연",
      "date": "2026-05-19"
    }
  },
  {
    "id": "TERU002",
    "name": "테루 이마트 통영점(가맹)",
    "brand": "테루",
    "code": "TERU-002",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2026-05-20"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2022-03-31",
      "estimatedAmount": "월 6,332만"
    },
    "revenueAchievement": {
      "ratio": 98,
      "actualAmount": "9,795만",
      "targetAmount": "9,994만",
      "trend": [
        105,
        104,
        105,
        103,
        92,
        98
      ],
      "periodStart": "2024-05-25",
      "periodEnd": "2025-04-30"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-05-31",
      "result": "적합",
      "nextCheckDate": "2026-11-29",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "TERU003",
    "name": "테루 뉴코아 부천점(가맹)",
    "brand": "테루",
    "code": "TERU-003",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-06-03",
      "estimatedAmount": "월 1.85억"
    },
    "revenueAchievement": {
      "ratio": 64,
      "actualAmount": "3,776만",
      "targetAmount": "5,899만",
      "trend": [
        64,
        57,
        66,
        62,
        60,
        64
      ],
      "periodStart": "2025-06-22",
      "periodEnd": "2025-12-09"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-02-12",
      "result": "적합",
      "nextCheckDate": "2026-08-13",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "리뉴얼 공사 예정, 임시 휴업 협의 중.",
      "author": "김도윤",
      "date": "2026-05-11"
    }
  },
  {
    "id": "TERU004",
    "name": "테루 뉴코아 인천점(가맹)",
    "brand": "테루",
    "code": "TERU-004",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "인근 재건축 이슈로 상권 변동 모니터링 중",
      "setDate": "2024-03-29"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-07-09",
      "estimatedAmount": "월 8,158만"
    },
    "revenueAchievement": {
      "ratio": 67,
      "actualAmount": "1.07억",
      "targetAmount": "1.6억",
      "trend": [
        66,
        65,
        74,
        69,
        74,
        67
      ],
      "periodStart": "2025-09-03",
      "periodEnd": "2025-12-31"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-01-27",
      "result": "적합",
      "nextCheckDate": "2026-07-28",
      "specialNote": "조리구역 방충 설비 보완 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "TERU005",
    "name": "테루 NC 수원터미널점(가맹)",
    "brand": "테루",
    "code": "TERU-005",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미입력",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2022-04-27"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": null,
      "actualAmount": "-",
      "targetAmount": "-",
      "trend": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "periodStart": "-",
      "periodEnd": "-"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-23",
      "result": "적합",
      "nextCheckDate": "2026-10-22",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "TERU006",
    "name": "테루 이마트 성서점(가맹)",
    "brand": "테루",
    "code": "TERU-006",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2022-12-28",
      "estimatedAmount": "월 1.31억"
    },
    "revenueAchievement": {
      "ratio": 77,
      "actualAmount": "1.53억",
      "targetAmount": "1.99억",
      "trend": [
        82,
        80,
        71,
        78,
        78,
        77
      ],
      "periodStart": "2025-03-23",
      "periodEnd": "2025-10-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-01-20",
      "result": "시정요구",
      "nextCheckDate": "2025-07-21",
      "specialNote": "유통기한 표시 라벨 재정비 요청"
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "김도윤",
      "date": "2026-07-31"
    }
  },
  {
    "id": "TERU007",
    "name": "테루 이마트 천안점(가맹)",
    "brand": "테루",
    "code": "TERU-007",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2023-08-08"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-01-29",
      "estimatedAmount": "월 6,698만"
    },
    "revenueAchievement": {
      "ratio": 112,
      "actualAmount": "5,086만",
      "targetAmount": "4,541만",
      "trend": [
        109,
        110,
        112,
        113,
        105,
        112
      ],
      "periodStart": "2025-05-27",
      "periodEnd": "2026-05-05"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,426만원",
      "occurredDate": "2026-08-04",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "lastCheckDate": "2025-03-22",
      "result": "적합",
      "nextCheckDate": "2025-09-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "TERU008",
    "name": "테루 이마트 만촌점(가맹)",
    "brand": "테루",
    "code": "TERU-008",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "직접입력",
      "noteText": "동일 건물 내 타 브랜드 입점 예정",
      "setDate": "2025-12-19"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2023-06-18",
      "estimatedAmount": "월 6,843만"
    },
    "revenueAchievement": {
      "ratio": 105,
      "actualAmount": "5,756만",
      "targetAmount": "5,482만",
      "trend": [
        107,
        111,
        100,
        111,
        109,
        105
      ],
      "periodStart": "2025-08-25",
      "periodEnd": "2026-02-11"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-06-22",
      "result": "시정요구",
      "nextCheckDate": "2025-12-21",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "TERU009",
    "name": "테루 NC 불광점(가맹)",
    "brand": "테루",
    "code": "TERU-009",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-09-16"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-08-09",
      "estimatedAmount": "월 1.31억"
    },
    "revenueAchievement": {
      "ratio": 102,
      "actualAmount": "8,412만",
      "targetAmount": "8,247만",
      "trend": [
        105,
        105,
        105,
        97,
        109,
        102
      ],
      "periodStart": "2024-09-22",
      "periodEnd": "2025-06-03"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-04-29",
      "result": "적합",
      "nextCheckDate": "2026-10-28",
      "specialNote": ""
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "이서연",
      "date": "2026-07-01"
    }
  },
  {
    "id": "TERU010",
    "name": "테루 NC 야탑점(가맹)",
    "brand": "테루",
    "code": "TERU-010",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-10-24"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2023-11-23",
      "estimatedAmount": "월 1.48억"
    },
    "revenueAchievement": {
      "ratio": 117,
      "actualAmount": "1.85억",
      "targetAmount": "1.58억",
      "trend": [
        116,
        109,
        117,
        115,
        112,
        117
      ],
      "periodStart": "2024-04-16",
      "periodEnd": "2024-09-12"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-16",
      "result": "적합",
      "nextCheckDate": "2026-05-17",
      "specialNote": ""
    },
    "etc": {
      "memo": "주말 매출 집중, 평일 인력 재배치 검토 중.",
      "author": "정하은",
      "date": "2026-07-10"
    }
  },
  {
    "id": "TERU011",
    "name": "테루 홈플러스 방학점(가맹)",
    "brand": "테루",
    "code": "TERU-011",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "미설정",
      "scopeType": "-",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2022-07-18",
      "estimatedAmount": "월 4,710만"
    },
    "revenueAchievement": {
      "ratio": 68,
      "actualAmount": "1.1억",
      "targetAmount": "1.61억",
      "trend": [
        71,
        76,
        63,
        75,
        68,
        68
      ],
      "periodStart": "2024-08-25",
      "periodEnd": "2025-07-29"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2026-06-21",
      "result": "적합",
      "nextCheckDate": "2026-12-20",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "TERU012",
    "name": "테루 뉴코아 일산점(가맹)",
    "brand": "테루",
    "code": "TERU-012",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-09-07"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2023-09-28",
      "estimatedAmount": "월 1.63억"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "7,610만",
      "targetAmount": "1.38억",
      "trend": [
        60,
        58,
        48,
        47,
        60,
        55
      ],
      "periodStart": "2024-06-05",
      "periodEnd": "2025-04-18"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "lastCheckDate": "2025-11-17",
      "result": "부적합",
      "nextCheckDate": "2026-05-18",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "점주 변경 예정, 승계 절차 진행 중.",
      "author": "정하은",
      "date": "2026-06-23"
    }
  }
];
