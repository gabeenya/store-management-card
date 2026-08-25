// 초기 데모/폴백 데이터 — 실제 데이터는 Supabase에서 로드됨 (app.js의 loadFromSupabase 참고)
let stores = [
  {
    "id": "ONLIFE001",
    "name": "온라이프 피자몰 NC 부산대점",
    "brand": "피자몰",
    "code": "ONLIFE-001",
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
      "ratio": 88,
      "actualAmount": "9,673만",
      "targetAmount": "1.1억",
      "trend": [
        87,
        90,
        91,
        87,
        84,
        88
      ],
      "periodStart": "2024-07-26",
      "periodEnd": "2025-06-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "208만원",
      "occurredDate": "2026-06-10",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-11-13",
      "nextCheckDate": "2026-11-06",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 33,
      "actualAmount": "3,634만",
      "targetAmount": "1.1억",
      "trend": [
        36,
        39,
        35,
        31,
        34,
        33
      ],
      "periodStart": "2024-11-01",
      "periodEnd": "2025-09-08"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "295만원",
      "occurredDate": "2026-01-15",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-10-24",
      "nextCheckDate": "2026-11-08",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.",
      "author": "정하은",
      "date": "2026-08-17"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-06-15"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2026-04-24",
      "estimatedAmount": "월 1.39억"
    },
    "revenueAchievement": {
      "ratio": 66,
      "actualAmount": "747만",
      "targetAmount": "1,132만",
      "trend": [
        61,
        66,
        70,
        71,
        72,
        66
      ],
      "periodStart": "2025-10-24",
      "periodEnd": "2026-07-04"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "199만원",
      "occurredDate": "2026-02-14",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-06-04",
      "nextCheckDate": "2026-12-24",
      "specialNote": "조리대 정리정돈 미흡"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "박도현",
      "date": "2026-08-22"
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
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 117,
      "actualAmount": "1.38억",
      "targetAmount": "1.18억",
      "trend": [
        112,
        117,
        113,
        115,
        116,
        117
      ],
      "periodStart": "2025-09-26",
      "periodEnd": "2026-08-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "603만원",
      "occurredDate": "2025-11-12",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-08-05",
      "nextCheckDate": "2026-12-18",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "정하은",
      "date": "2026-08-25"
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
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-05-02"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 72,
      "actualAmount": "2,944만",
      "targetAmount": "4,089만",
      "trend": [
        84,
        78,
        79,
        81,
        75,
        72
      ],
      "periodStart": "2025-02-25",
      "periodEnd": "2025-10-21"
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
      "result": "시정요구",
      "lastCheckDate": "2026-04-28",
      "nextCheckDate": "2026-11-28",
      "specialNote": "조리대 정리정돈 미흡"
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-11-27"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2024-12-27",
      "estimatedAmount": "월 1.55억"
    },
    "revenueAchievement": {
      "ratio": 79,
      "actualAmount": "1.33억",
      "targetAmount": "1.69억",
      "trend": [
        68,
        71,
        72,
        76,
        76,
        79
      ],
      "periodStart": "2025-08-05",
      "periodEnd": "2026-07-21"
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
      "result": "시정요구",
      "lastCheckDate": "2026-04-25",
      "nextCheckDate": "2026-10-12",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-01-24"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 122,
      "actualAmount": "1.21억",
      "targetAmount": "9,877만",
      "trend": [
        126,
        121,
        123,
        124,
        119,
        122
      ],
      "periodStart": "2025-10-04",
      "periodEnd": "2026-05-25"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,659만원",
      "occurredDate": "2026-06-05",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-27",
      "nextCheckDate": "2026-12-13",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-02-16"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-10-13",
      "estimatedAmount": "월 8,595만"
    },
    "revenueAchievement": {
      "ratio": 88,
      "actualAmount": "1.52억",
      "targetAmount": "1.73억",
      "trend": [
        90,
        90,
        87,
        85,
        89,
        88
      ],
      "periodStart": "2025-01-17",
      "periodEnd": "2025-09-05"
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
      "result": "적합",
      "lastCheckDate": "2025-09-15",
      "nextCheckDate": "2027-01-12",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "ratio": 82,
      "actualAmount": "1.34억",
      "targetAmount": "1.64억",
      "trend": [
        75,
        78,
        78,
        84,
        84,
        82
      ],
      "periodStart": "2025-03-10",
      "periodEnd": "2025-10-23"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "862만원",
      "occurredDate": "2026-04-10",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2025-08-28",
      "nextCheckDate": "2026-11-06",
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
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-08-22",
      "estimatedAmount": "월 1.66억"
    },
    "revenueAchievement": {
      "ratio": 81,
      "actualAmount": "5,791만",
      "targetAmount": "7,149만",
      "trend": [
        89,
        89,
        86,
        82,
        82,
        81
      ],
      "periodStart": "2025-07-02",
      "periodEnd": "2025-12-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "임대차계약 갱신일 표기 오류",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,559만원",
      "occurredDate": "2026-08-19",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-17",
      "nextCheckDate": "2026-10-13",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "calcDate": "2026-02-24",
      "estimatedAmount": "월 1.29억"
    },
    "revenueAchievement": {
      "ratio": 122,
      "actualAmount": "2.68억",
      "targetAmount": "2.2억",
      "trend": [
        108,
        114,
        114,
        116,
        120,
        122
      ],
      "periodStart": "2025-06-24",
      "periodEnd": "2026-03-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,189만원",
      "occurredDate": "2026-08-19",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-10-29",
      "nextCheckDate": "2026-12-31",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "ratio": 26,
      "actualAmount": "4,443만",
      "targetAmount": "1.71억",
      "trend": [
        13,
        15,
        13,
        22,
        22,
        26
      ],
      "periodStart": "2024-07-15",
      "periodEnd": "2025-07-15"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "172만원",
      "occurredDate": "2026-05-11",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-07-19",
      "nextCheckDate": "2027-01-13",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
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
      "calcDate": "2025-01-23",
      "estimatedAmount": "월 2,737만"
    },
    "revenueAchievement": {
      "ratio": 30,
      "actualAmount": "6,471만",
      "targetAmount": "2.16억",
      "trend": [
        18,
        18,
        21,
        22,
        27,
        30
      ],
      "periodStart": "2025-02-12",
      "periodEnd": "2025-12-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,315만원",
      "occurredDate": "2025-12-13",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-05-14",
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
    "id": "BANGUNG027",
    "name": "반궁 홈플러스 작전점(가맹)",
    "brand": "반궁",
    "code": "BANGUNG-027",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-11-10"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-12-08",
      "estimatedAmount": "월 1.67억"
    },
    "revenueAchievement": {
      "ratio": 25,
      "actualAmount": "1,728만",
      "targetAmount": "6,910만",
      "trend": [
        22,
        27,
        28,
        27,
        26,
        25
      ],
      "periodStart": "2025-04-18",
      "periodEnd": "2026-03-20"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "701만원",
      "occurredDate": "2026-05-05",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-08-11",
      "nextCheckDate": "2026-11-05",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-09-10"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2024-07-31",
      "estimatedAmount": "월 936만"
    },
    "revenueAchievement": {
      "ratio": 80,
      "actualAmount": "1,794만",
      "targetAmount": "2,243만",
      "trend": [
        81,
        85,
        80,
        82,
        79,
        80
      ],
      "periodStart": "2025-10-18",
      "periodEnd": "2026-08-11"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "438만원",
      "occurredDate": "2026-06-09",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-04-16",
      "nextCheckDate": "2027-02-21",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "calcDate": "2026-03-20",
      "estimatedAmount": "월 1.37억"
    },
    "revenueAchievement": {
      "ratio": 87,
      "actualAmount": "4,017만",
      "targetAmount": "4,617만",
      "trend": [
        82,
        84,
        87,
        85,
        88,
        87
      ],
      "periodStart": "2025-02-11",
      "periodEnd": "2025-12-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,773만원",
      "occurredDate": "2026-08-11",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-09-18",
      "nextCheckDate": "2026-10-25",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-05-09"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 93,
      "actualAmount": "1.07억",
      "targetAmount": "1.15억",
      "trend": [
        91,
        89,
        92,
        96,
        98,
        93
      ],
      "periodStart": "2024-10-29",
      "periodEnd": "2025-10-17"
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
      "result": "점검예정",
      "lastCheckDate": "2026-07-11",
      "nextCheckDate": "2026-12-19",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "calcDate": "2025-08-24",
      "estimatedAmount": "월 1.12억"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "9,524만",
      "targetAmount": "1.73억",
      "trend": [
        49,
        46,
        44,
        52,
        51,
        55
      ],
      "periodStart": "2024-12-14",
      "periodEnd": "2025-11-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "226만원",
      "occurredDate": "2026-08-13",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-10-22",
      "nextCheckDate": "2026-11-11",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-05-11"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-05-30",
      "estimatedAmount": "월 1.36억"
    },
    "revenueAchievement": {
      "ratio": 93,
      "actualAmount": "1.54억",
      "targetAmount": "1.65억",
      "trend": [
        78,
        84,
        90,
        92,
        91,
        93
      ],
      "periodStart": "2024-12-24",
      "periodEnd": "2025-09-30"
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
      "result": "시정요구",
      "lastCheckDate": "2026-01-16",
      "nextCheckDate": "2026-10-23",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "ratio": 25,
      "actualAmount": "1,262만",
      "targetAmount": "5,049만",
      "trend": [
        25,
        27,
        26,
        29,
        31,
        25
      ],
      "periodStart": "2025-03-23",
      "periodEnd": "2026-02-11"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "임대차계약 갱신일 표기 오류",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "305만원",
      "occurredDate": "2026-06-14",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-09-09",
      "nextCheckDate": "2026-10-26",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "매출 부진 및 계약 관리 항목 다수 위험 상태. 현장 점검 필요.",
      "author": "박도현",
      "date": "2026-08-07"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-07-03"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 72,
      "actualAmount": "1.1억",
      "targetAmount": "1.53억",
      "trend": [
        77,
        79,
        78,
        72,
        73,
        72
      ],
      "periodStart": "2024-08-08",
      "periodEnd": "2025-07-02"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,345만원",
      "occurredDate": "2026-03-26",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2025-11-04",
      "nextCheckDate": "2026-12-11",
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-09-25"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2024-11-24",
      "estimatedAmount": "월 2,305만"
    },
    "revenueAchievement": {
      "ratio": 113,
      "actualAmount": "812만",
      "targetAmount": "719만",
      "trend": [
        100,
        107,
        104,
        105,
        105,
        113
      ],
      "periodStart": "2025-01-08",
      "periodEnd": "2025-08-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "407만원",
      "occurredDate": "2026-01-21",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-04-01",
      "nextCheckDate": "2027-03-09",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2026-01-05"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 71,
      "actualAmount": "9,831만",
      "targetAmount": "1.38억",
      "trend": [
        59,
        57,
        60,
        61,
        66,
        71
      ],
      "periodStart": "2025-05-15",
      "periodEnd": "2025-11-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,751만원",
      "occurredDate": "2026-01-13",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-05-28",
      "nextCheckDate": "2026-12-27",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-02-12"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-04-13",
      "estimatedAmount": "월 1.33억"
    },
    "revenueAchievement": {
      "ratio": 49,
      "actualAmount": "5,057만",
      "targetAmount": "1.03억",
      "trend": [
        48,
        45,
        42,
        46,
        50,
        49
      ],
      "periodStart": "2025-01-14",
      "periodEnd": "2025-12-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,186만원",
      "occurredDate": "2026-06-10",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-05-28",
      "nextCheckDate": "2026-10-14",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-06-20"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2024-04-14",
      "estimatedAmount": "월 1.62억"
    },
    "revenueAchievement": {
      "ratio": 35,
      "actualAmount": "6,719만",
      "targetAmount": "1.92억",
      "trend": [
        25,
        30,
        30,
        32,
        36,
        35
      ],
      "periodStart": "2025-12-23",
      "periodEnd": "2026-06-27"
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
      "result": "부적합",
      "lastCheckDate": "2025-11-11",
      "nextCheckDate": "2026-11-24",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-10-07"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 86,
      "actualAmount": "9,318만",
      "targetAmount": "1.08억",
      "trend": [
        86,
        85,
        83,
        82,
        87,
        86
      ],
      "periodStart": "2025-06-12",
      "periodEnd": "2026-04-30"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "185만원",
      "occurredDate": "2026-04-17",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-06-29",
      "nextCheckDate": "2027-01-25",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "calcDate": "2025-06-26",
      "estimatedAmount": "월 1.5억"
    },
    "revenueAchievement": {
      "ratio": 71,
      "actualAmount": "1.34억",
      "targetAmount": "1.88억",
      "trend": [
        86,
        79,
        76,
        78,
        75,
        71
      ],
      "periodStart": "2024-12-26",
      "periodEnd": "2025-09-23"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,115만원",
      "occurredDate": "2026-03-13",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-04-16",
      "nextCheckDate": "2026-12-01",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-04-01"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2024-04-01",
      "estimatedAmount": "월 1.08억"
    },
    "revenueAchievement": {
      "ratio": 30,
      "actualAmount": "3,046만",
      "targetAmount": "1.02억",
      "trend": [
        28,
        27,
        31,
        32,
        28,
        30
      ],
      "periodStart": "2025-09-08",
      "periodEnd": "2026-06-26"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "459만원",
      "occurredDate": "2026-08-05",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-05-06",
      "nextCheckDate": "2026-12-27",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2026-02-05"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 64,
      "actualAmount": "7,172만",
      "targetAmount": "1.12억",
      "trend": [
        51,
        57,
        62,
        61,
        58,
        64
      ],
      "periodStart": "2024-07-06",
      "periodEnd": "2025-05-12"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "365만원",
      "occurredDate": "2025-10-17",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-14",
      "nextCheckDate": "2027-03-08",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "이수민",
      "date": "2026-08-15"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-10-16"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2026-06-14",
      "estimatedAmount": "월 1.15억"
    },
    "revenueAchievement": {
      "ratio": 32,
      "actualAmount": "528만",
      "targetAmount": "1,651만",
      "trend": [
        25,
        23,
        25,
        29,
        34,
        32
      ],
      "periodStart": "2024-08-27",
      "periodEnd": "2025-08-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,250만원",
      "occurredDate": "2026-07-23",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-02-12",
      "nextCheckDate": "2026-12-28",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.",
      "author": "이수민",
      "date": "2026-08-22"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-11-07"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-09-26",
      "estimatedAmount": "월 7,234만"
    },
    "revenueAchievement": {
      "ratio": 91,
      "actualAmount": "5,308만",
      "targetAmount": "5,833만",
      "trend": [
        100,
        101,
        96,
        92,
        95,
        91
      ],
      "periodStart": "2025-07-11",
      "periodEnd": "2026-04-08"
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
      "result": "점검예정",
      "lastCheckDate": "2026-07-28",
      "nextCheckDate": "2027-02-22",
      "specialNote": ""
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-11-24"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 86,
      "actualAmount": "1.35억",
      "targetAmount": "1.57억",
      "trend": [
        95,
        96,
        97,
        89,
        85,
        86
      ],
      "periodStart": "2025-07-23",
      "periodEnd": "2026-07-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "417만원",
      "occurredDate": "2026-08-11",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-02-26",
      "nextCheckDate": "2026-10-04",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-06-04"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2024-10-08",
      "estimatedAmount": "월 7,593만"
    },
    "revenueAchievement": {
      "ratio": 84,
      "actualAmount": "3,615만",
      "targetAmount": "4,304만",
      "trend": [
        75,
        74,
        72,
        78,
        77,
        84
      ],
      "periodStart": "2025-06-03",
      "periodEnd": "2025-12-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,167만원",
      "occurredDate": "2026-07-31",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-06-01",
      "nextCheckDate": "2027-01-17",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "ratio": 36,
      "actualAmount": "4,147만",
      "targetAmount": "1.15억",
      "trend": [
        43,
        44,
        44,
        43,
        44,
        36
      ],
      "periodStart": "2025-03-28",
      "periodEnd": "2025-10-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "822만원",
      "occurredDate": "2026-05-04",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-05-25",
      "nextCheckDate": "2026-10-26",
      "specialNote": "조리대 정리정돈 미흡"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-10-02"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-06-15",
      "estimatedAmount": "월 1.15억"
    },
    "revenueAchievement": {
      "ratio": 76,
      "actualAmount": "1.05억",
      "targetAmount": "1.39억",
      "trend": [
        72,
        74,
        70,
        73,
        76,
        76
      ],
      "periodStart": "2025-05-06",
      "periodEnd": "2026-01-02"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,519만원",
      "occurredDate": "2026-08-02",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-06-29",
      "nextCheckDate": "2027-01-26",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "ratio": 30,
      "actualAmount": "6,571만",
      "targetAmount": "2.19억",
      "trend": [
        34,
        32,
        28,
        24,
        30,
        30
      ],
      "periodStart": "2025-08-20",
      "periodEnd": "2026-08-10"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "424만원",
      "occurredDate": "2026-05-04",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-08-25",
      "nextCheckDate": "2027-02-01",
      "specialNote": "조리대 정리정돈 미흡"
    },
    "etc": {
      "memo": "매출 부진 및 계약 관리 항목 다수 위험 상태. 현장 점검 필요.",
      "author": "이수민",
      "date": "2026-08-19"
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-04-06"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-10-30",
      "estimatedAmount": "월 2,652만"
    },
    "revenueAchievement": {
      "ratio": 92,
      "actualAmount": "1.94억",
      "targetAmount": "2.11억",
      "trend": [
        85,
        83,
        89,
        87,
        86,
        92
      ],
      "periodStart": "2024-11-08",
      "periodEnd": "2025-05-31"
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
      "result": "적합",
      "lastCheckDate": "2025-08-18",
      "nextCheckDate": "2026-10-15",
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
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-07-01"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2024-11-11",
      "estimatedAmount": "월 1.48억"
    },
    "revenueAchievement": {
      "ratio": 95,
      "actualAmount": "1.8억",
      "targetAmount": "1.9억",
      "trend": [
        90,
        90,
        91,
        93,
        96,
        95
      ],
      "periodStart": "2024-11-16",
      "periodEnd": "2025-09-30"
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
      "result": "시정요구",
      "lastCheckDate": "2026-06-18",
      "nextCheckDate": "2026-12-02",
      "specialNote": "조리대 정리정돈 미흡"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
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
      "ratio": 48,
      "actualAmount": "9,361만",
      "targetAmount": "1.95억",
      "trend": [
        38,
        39,
        41,
        42,
        43,
        48
      ],
      "periodStart": "2024-11-30",
      "periodEnd": "2025-11-17"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,459만원",
      "occurredDate": "2026-04-13",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2025-12-25",
      "nextCheckDate": "2027-02-21",
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-11-08"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2026-05-07",
      "estimatedAmount": "월 1.06억"
    },
    "revenueAchievement": {
      "ratio": 32,
      "actualAmount": "1,375만",
      "targetAmount": "4,296만",
      "trend": [
        42,
        39,
        34,
        38,
        31,
        32
      ],
      "periodStart": "2024-09-13",
      "periodEnd": "2025-04-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "995만원",
      "occurredDate": "2026-02-11",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-04-14",
      "nextCheckDate": "2027-03-13",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2026-04-15"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 35,
      "actualAmount": "6,268만",
      "targetAmount": "1.79억",
      "trend": [
        44,
        46,
        40,
        38,
        37,
        35
      ],
      "periodStart": "2024-12-29",
      "periodEnd": "2025-07-05"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "558만원",
      "occurredDate": "2025-10-22",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-04-23",
      "nextCheckDate": "2027-01-09",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "정하은",
      "date": "2026-08-13"
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
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-10-11"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 25,
      "actualAmount": "3,427만",
      "targetAmount": "1.37억",
      "trend": [
        18,
        21,
        23,
        24,
        25,
        25
      ],
      "periodStart": "2025-08-31",
      "periodEnd": "2026-04-28"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,594만원",
      "occurredDate": "2026-07-20",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-06-13",
      "nextCheckDate": "2026-11-17",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 75,
      "actualAmount": "7,028만",
      "targetAmount": "9,371만",
      "trend": [
        63,
        63,
        69,
        70,
        76,
        75
      ],
      "periodStart": "2025-01-14",
      "periodEnd": "2025-12-09"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,103만원",
      "occurredDate": "2026-08-25",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-06-06",
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
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-08-15",
      "estimatedAmount": "월 4,384만"
    },
    "revenueAchievement": {
      "ratio": 54,
      "actualAmount": "840만",
      "targetAmount": "1,556만",
      "trend": [
        66,
        65,
        63,
        59,
        58,
        54
      ],
      "periodStart": "2025-10-27",
      "periodEnd": "2026-07-02"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "560만원",
      "occurredDate": "2025-12-18",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-08",
      "nextCheckDate": "2027-01-07",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-09-10"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-06-15",
      "estimatedAmount": "월 1.24억"
    },
    "revenueAchievement": {
      "ratio": 112,
      "actualAmount": "1.23억",
      "targetAmount": "1.09억",
      "trend": [
        107,
        109,
        107,
        110,
        113,
        112
      ],
      "periodStart": "2024-11-04",
      "periodEnd": "2025-05-25"
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
      "result": "적합",
      "lastCheckDate": "2026-04-19",
      "nextCheckDate": "2026-09-27",
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
      "status": "재검토필요",
      "calcDate": "2024-04-27",
      "estimatedAmount": "월 1.56억"
    },
    "revenueAchievement": {
      "ratio": 62,
      "actualAmount": "1,799만",
      "targetAmount": "2,901만",
      "trend": [
        63,
        66,
        66,
        68,
        63,
        62
      ],
      "periodStart": "2025-03-22",
      "periodEnd": "2026-02-06"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,630만원",
      "occurredDate": "2026-05-01",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-12-25",
      "nextCheckDate": "2027-02-01",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-03-10"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-02-06",
      "estimatedAmount": "월 7,341만"
    },
    "revenueAchievement": {
      "ratio": 100,
      "actualAmount": "1.22억",
      "targetAmount": "1.22억",
      "trend": [
        103,
        101,
        105,
        99,
        103,
        100
      ],
      "periodStart": "2024-06-26",
      "periodEnd": "2025-04-23"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "163만원",
      "occurredDate": "2026-06-14",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-06-23",
      "nextCheckDate": "2027-02-04",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-08-23"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-04-08",
      "estimatedAmount": "월 1,231만"
    },
    "revenueAchievement": {
      "ratio": 79,
      "actualAmount": "9,218만",
      "targetAmount": "1.17억",
      "trend": [
        64,
        63,
        66,
        71,
        74,
        79
      ],
      "periodStart": "2025-08-24",
      "periodEnd": "2026-08-16"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "988만원",
      "occurredDate": "2026-08-21",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-03-13",
      "nextCheckDate": "2026-12-16",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-04-30"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 31,
      "actualAmount": "855만",
      "targetAmount": "2,758만",
      "trend": [
        19,
        17,
        17,
        23,
        25,
        31
      ],
      "periodStart": "2024-09-20",
      "periodEnd": "2025-06-23"
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
      "result": "시정요구",
      "lastCheckDate": "2025-11-24",
      "nextCheckDate": "2026-11-15",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-10-16"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-05-29",
      "estimatedAmount": "월 1,270만"
    },
    "revenueAchievement": {
      "ratio": 120,
      "actualAmount": "1.44억",
      "targetAmount": "1.2억",
      "trend": [
        135,
        129,
        128,
        125,
        121,
        120
      ],
      "periodStart": "2025-12-11",
      "periodEnd": "2026-06-14"
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
      "result": "적합",
      "lastCheckDate": "2026-05-31",
      "nextCheckDate": "2027-02-28",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "calcDate": "2025-10-31",
      "estimatedAmount": "월 1.65억"
    },
    "revenueAchievement": {
      "ratio": 95,
      "actualAmount": "1.15억",
      "targetAmount": "1.21억",
      "trend": [
        83,
        87,
        87,
        88,
        95,
        95
      ],
      "periodStart": "2025-05-12",
      "periodEnd": "2025-12-26"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "132만원",
      "occurredDate": "2026-08-12",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-09-15",
      "nextCheckDate": "2026-10-30",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-10-12"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 111,
      "actualAmount": "1.58억",
      "targetAmount": "1.42억",
      "trend": [
        124,
        124,
        124,
        124,
        118,
        111
      ],
      "periodStart": "2025-09-30",
      "periodEnd": "2026-04-15"
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
      "result": "점검예정",
      "lastCheckDate": "2025-12-22",
      "nextCheckDate": "2026-10-15",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-08-20"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-05-23",
      "estimatedAmount": "월 9,436만"
    },
    "revenueAchievement": {
      "ratio": 46,
      "actualAmount": "4,624만",
      "targetAmount": "1.01억",
      "trend": [
        46,
        49,
        44,
        47,
        50,
        46
      ],
      "periodStart": "2024-10-29",
      "periodEnd": "2025-07-03"
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
      "result": "시정요구",
      "lastCheckDate": "2025-12-17",
      "nextCheckDate": "2026-11-20",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-02-11"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-04-09",
      "estimatedAmount": "월 1.1억"
    },
    "revenueAchievement": {
      "ratio": 64,
      "actualAmount": "6,831만",
      "targetAmount": "1.07억",
      "trend": [
        62,
        65,
        65,
        65,
        63,
        64
      ],
      "periodStart": "2025-09-03",
      "periodEnd": "2026-05-31"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "979만원",
      "occurredDate": "2026-05-16",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-05-28",
      "nextCheckDate": "2026-12-27",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 45,
      "actualAmount": "9,093만",
      "targetAmount": "2.02억",
      "trend": [
        60,
        60,
        59,
        51,
        51,
        45
      ],
      "periodStart": "2026-01-27",
      "periodEnd": "2026-08-12"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "195만원",
      "occurredDate": "2026-01-20",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-10-25",
      "nextCheckDate": "2027-02-25",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "전 항목 위험 상태로 즉시 현장 점검 및 계약 해지 검토 대상.",
      "author": "박도현",
      "date": "2026-08-14"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-09-18"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 72,
      "actualAmount": "6,764만",
      "targetAmount": "9,394만",
      "trend": [
        66,
        69,
        72,
        68,
        70,
        72
      ],
      "periodStart": "2024-12-13",
      "periodEnd": "2025-07-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "122만원",
      "occurredDate": "2026-08-02",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2026-01-20",
      "nextCheckDate": "2026-11-29",
      "specialNote": ""
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-09-02"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 100,
      "actualAmount": "1억",
      "targetAmount": "1억",
      "trend": [
        111,
        108,
        105,
        104,
        103,
        100
      ],
      "periodStart": "2025-08-04",
      "periodEnd": "2026-06-17"
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
      "result": "시정요구",
      "lastCheckDate": "2025-09-09",
      "nextCheckDate": "2026-12-11",
      "specialNote": "조리대 정리정돈 미흡"
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
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-02-13"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 111,
      "actualAmount": "1.37억",
      "targetAmount": "1.23억",
      "trend": [
        112,
        109,
        107,
        109,
        108,
        111
      ],
      "periodStart": "2024-10-09",
      "periodEnd": "2025-08-14"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,648만원",
      "occurredDate": "2026-01-24",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-09-04",
      "nextCheckDate": "2027-02-25",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "ratio": 57,
      "actualAmount": "1.18억",
      "targetAmount": "2.06억",
      "trend": [
        51,
        55,
        54,
        53,
        52,
        57
      ],
      "periodStart": "2025-10-17",
      "periodEnd": "2026-07-24"
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
      "result": "시정요구",
      "lastCheckDate": "2026-03-14",
      "nextCheckDate": "2026-11-02",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-08-20"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-05-03",
      "estimatedAmount": "월 1.72억"
    },
    "revenueAchievement": {
      "ratio": 118,
      "actualAmount": "1.5억",
      "targetAmount": "1.27억",
      "trend": [
        115,
        116,
        120,
        122,
        117,
        118
      ],
      "periodStart": "2025-10-18",
      "periodEnd": "2026-06-20"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "658만원",
      "occurredDate": "2026-08-07",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-04-08",
      "nextCheckDate": "2027-02-07",
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
      "ratio": 64,
      "actualAmount": "9,959만",
      "targetAmount": "1.56억",
      "trend": [
        58,
        57,
        59,
        61,
        63,
        64
      ],
      "periodStart": "2025-07-13",
      "periodEnd": "2026-03-03"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,467만원",
      "occurredDate": "2026-01-28",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-10-12",
      "nextCheckDate": "2026-10-07",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "전 항목 위험 상태로 즉시 현장 점검 및 계약 해지 검토 대상.",
      "author": "정하은",
      "date": "2026-08-07"
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
      "calcDate": "2026-03-12",
      "estimatedAmount": "월 5,361만"
    },
    "revenueAchievement": {
      "ratio": 95,
      "actualAmount": "1.81억",
      "targetAmount": "1.9억",
      "trend": [
        91,
        94,
        93,
        91,
        91,
        95
      ],
      "periodStart": "2025-01-27",
      "periodEnd": "2025-12-20"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,137만원",
      "occurredDate": "2026-03-10",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-07-11",
      "nextCheckDate": "2026-11-20",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-12-30"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-01-23",
      "estimatedAmount": "월 1.36억"
    },
    "revenueAchievement": {
      "ratio": 105,
      "actualAmount": "1.23억",
      "targetAmount": "1.17억",
      "trend": [
        91,
        95,
        97,
        101,
        100,
        105
      ],
      "periodStart": "2024-12-28",
      "periodEnd": "2025-10-07"
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
      "result": "적합",
      "lastCheckDate": "2026-03-24",
      "nextCheckDate": "2026-10-04",
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-08-28"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2024-04-14",
      "estimatedAmount": "월 1.18억"
    },
    "revenueAchievement": {
      "ratio": 76,
      "actualAmount": "1.43억",
      "targetAmount": "1.88억",
      "trend": [
        78,
        81,
        80,
        81,
        75,
        76
      ],
      "periodStart": "2025-04-12",
      "periodEnd": "2025-12-04"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,206만원",
      "occurredDate": "2026-08-08",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2026-06-24",
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
    "id": "CAFE064",
    "name": "더카페 신동백두산위브점",
    "brand": "더카페",
    "code": "CAFE-064",
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
      "calcDate": "2025-02-04",
      "estimatedAmount": "월 1.32억"
    },
    "revenueAchievement": {
      "ratio": 71,
      "actualAmount": "7,498만",
      "targetAmount": "1.06억",
      "trend": [
        79,
        76,
        71,
        73,
        73,
        71
      ],
      "periodStart": "2025-05-23",
      "periodEnd": "2026-04-12"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "809만원",
      "occurredDate": "2026-04-17",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-07-17",
      "nextCheckDate": "2027-03-14",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "박도현",
      "date": "2026-08-14"
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
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-01-10"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 81,
      "actualAmount": "1.7억",
      "targetAmount": "2.1억",
      "trend": [
        93,
        90,
        89,
        89,
        86,
        81
      ],
      "periodStart": "2024-12-31",
      "periodEnd": "2025-09-14"
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
      "result": "부적합",
      "lastCheckDate": "2025-07-24",
      "nextCheckDate": "2026-12-22",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "ratio": 114,
      "actualAmount": "2,185만",
      "targetAmount": "1,917만",
      "trend": [
        108,
        108,
        108,
        108,
        115,
        114
      ],
      "periodStart": "2024-12-26",
      "periodEnd": "2025-11-08"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,546만원",
      "occurredDate": "2025-11-22",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-03-23",
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
    "id": "CAFE129",
    "name": "더카페 영등포구청점",
    "brand": "더카페",
    "code": "CAFE-129",
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
      "ratio": 115,
      "actualAmount": "1,440만",
      "targetAmount": "1,252만",
      "trend": [
        100,
        99,
        104,
        112,
        113,
        115
      ],
      "periodStart": "2024-12-08",
      "periodEnd": "2025-09-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "155만원",
      "occurredDate": "2026-03-05",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-04-16",
      "nextCheckDate": "2026-12-12",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-12-30"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-12-26",
      "estimatedAmount": "월 3,272만"
    },
    "revenueAchievement": {
      "ratio": 107,
      "actualAmount": "916만",
      "targetAmount": "856만",
      "trend": [
        106,
        109,
        109,
        108,
        111,
        107
      ],
      "periodStart": "2025-01-18",
      "periodEnd": "2025-12-14"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "734만원",
      "occurredDate": "2026-08-25",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-05-04",
      "nextCheckDate": "2027-02-20",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-10-22"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 49,
      "actualAmount": "2,220만",
      "targetAmount": "4,530만",
      "trend": [
        40,
        45,
        43,
        42,
        49,
        49
      ],
      "periodStart": "2025-04-25",
      "periodEnd": "2025-12-27"
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
      "result": "점검예정",
      "lastCheckDate": "2025-09-01",
      "nextCheckDate": "2027-01-05",
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
      "calcDate": "2026-03-08",
      "estimatedAmount": "월 1.56억"
    },
    "revenueAchievement": {
      "ratio": 50,
      "actualAmount": "5,754만",
      "targetAmount": "1.15억",
      "trend": [
        42,
        43,
        45,
        46,
        45,
        50
      ],
      "periodStart": "2024-07-10",
      "periodEnd": "2025-06-05"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,593만원",
      "occurredDate": "2026-05-15",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2025-11-05",
      "nextCheckDate": "2026-10-11",
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
      "calcDate": "2026-05-05",
      "estimatedAmount": "월 1.57억"
    },
    "revenueAchievement": {
      "ratio": 101,
      "actualAmount": "1.24억",
      "targetAmount": "1.23억",
      "trend": [
        98,
        101,
        104,
        101,
        100,
        101
      ],
      "periodStart": "2025-01-03",
      "periodEnd": "2025-10-12"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,310만원",
      "occurredDate": "2026-01-31",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-02-07",
      "nextCheckDate": "2026-11-06",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "ratio": 105,
      "actualAmount": "1억",
      "targetAmount": "9,565만",
      "trend": [
        106,
        104,
        106,
        102,
        100,
        105
      ],
      "periodStart": "2024-09-16",
      "periodEnd": "2025-06-20"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "111만원",
      "occurredDate": "2026-08-05",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-11",
      "nextCheckDate": "2026-12-23",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-03-24"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2024-07-06",
      "estimatedAmount": "월 9,339만"
    },
    "revenueAchievement": {
      "ratio": 78,
      "actualAmount": "4,276만",
      "targetAmount": "5,482만",
      "trend": [
        64,
        69,
        68,
        70,
        76,
        78
      ],
      "periodStart": "2025-07-18",
      "periodEnd": "2026-01-14"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,580만원",
      "occurredDate": "2026-08-17",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-05-27",
      "nextCheckDate": "2027-02-12",
      "specialNote": "조리대 정리정돈 미흡"
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
      "calcDate": "2025-10-20",
      "estimatedAmount": "월 1.61억"
    },
    "revenueAchievement": {
      "ratio": 45,
      "actualAmount": "5,011만",
      "targetAmount": "1.11억",
      "trend": [
        43,
        45,
        42,
        44,
        42,
        45
      ],
      "periodStart": "2025-05-23",
      "periodEnd": "2026-02-27"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "641만원",
      "occurredDate": "2026-07-29",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2025-12-20",
      "nextCheckDate": "2027-02-09",
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
      "calcDate": "2025-07-02",
      "estimatedAmount": "월 1,486만"
    },
    "revenueAchievement": {
      "ratio": 38,
      "actualAmount": "3,861만",
      "targetAmount": "1.02억",
      "trend": [
        43,
        38,
        42,
        43,
        40,
        38
      ],
      "periodStart": "2024-05-06",
      "periodEnd": "2025-04-26"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-08-05",
      "nextCheckDate": "2027-02-28",
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-01-15"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 31,
      "actualAmount": "250만",
      "targetAmount": "808만",
      "trend": [
        39,
        39,
        33,
        35,
        34,
        31
      ],
      "periodStart": "2025-11-16",
      "periodEnd": "2026-06-17"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "645만원",
      "occurredDate": "2026-02-27",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-07-23",
      "nextCheckDate": "2027-01-07",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "ratio": 53,
      "actualAmount": "5,489만",
      "targetAmount": "1.04억",
      "trend": [
        60,
        55,
        58,
        52,
        55,
        53
      ],
      "periodStart": "2025-07-10",
      "periodEnd": "2026-05-31"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "382만원",
      "occurredDate": "2026-03-10",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-06-23",
      "nextCheckDate": "2027-02-14",
      "specialNote": ""
    },
    "etc": {
      "memo": "매출 부진 및 계약 관리 항목 다수 위험 상태. 현장 점검 필요.",
      "author": "박도현",
      "date": "2026-08-19"
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
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-11-17"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-05-03",
      "estimatedAmount": "월 4,105만"
    },
    "revenueAchievement": {
      "ratio": 121,
      "actualAmount": "1.07억",
      "targetAmount": "8,867만",
      "trend": [
        111,
        111,
        118,
        120,
        118,
        121
      ],
      "periodStart": "2024-10-09",
      "periodEnd": "2025-07-17"
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
      "result": "적합",
      "lastCheckDate": "2026-02-05",
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
    "id": "CAFE125",
    "name": "더카페 김포양곡점",
    "brand": "더카페",
    "code": "CAFE-125",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-05-23"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 58,
      "actualAmount": "1.21억",
      "targetAmount": "2.09억",
      "trend": [
        49,
        48,
        54,
        57,
        60,
        58
      ],
      "periodStart": "2025-02-10",
      "periodEnd": "2025-08-27"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "320만원",
      "occurredDate": "2025-12-13",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-06-05",
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
    "id": "CAFE093",
    "name": "더카페 광명성애병원점",
    "brand": "더카페",
    "code": "CAFE-093",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-11-10"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-09-20",
      "estimatedAmount": "월 8,374만"
    },
    "revenueAchievement": {
      "ratio": 72,
      "actualAmount": "1.47억",
      "targetAmount": "2.05억",
      "trend": [
        61,
        66,
        66,
        68,
        68,
        72
      ],
      "periodStart": "2025-11-30",
      "periodEnd": "2026-07-30"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,099만원",
      "occurredDate": "2026-08-22",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-07-12",
      "nextCheckDate": "2027-01-09",
      "specialNote": "조리대 정리정돈 미흡"
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
      "ratio": 104,
      "actualAmount": "1.01억",
      "targetAmount": "9,716만",
      "trend": [
        99,
        99,
        102,
        106,
        108,
        104
      ],
      "periodStart": "2025-11-09",
      "periodEnd": "2026-07-05"
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
      "result": "적합",
      "lastCheckDate": "2026-07-02",
      "nextCheckDate": "2026-10-19",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  },
  {
    "id": "DAGUO001",
    "name": "다구오 2001 분당점(가맹)",
    "brand": "다구오",
    "code": "DAGUO-001",
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
      "ratio": 67,
      "actualAmount": "5,946만",
      "targetAmount": "8,875만",
      "trend": [
        60,
        58,
        60,
        62,
        66,
        67
      ],
      "periodStart": "2025-07-02",
      "periodEnd": "2026-04-26"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,669만원",
      "occurredDate": "2026-08-24",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-08-21",
      "nextCheckDate": "2026-11-24",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "매출 부진 및 계약 관리 항목 다수 위험 상태. 현장 점검 필요.",
      "author": "이수민",
      "date": "2026-08-24"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-01-01"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-07-08",
      "estimatedAmount": "월 5,244만"
    },
    "revenueAchievement": {
      "ratio": 81,
      "actualAmount": "1.59억",
      "targetAmount": "1.97억",
      "trend": [
        96,
        90,
        88,
        87,
        80,
        81
      ],
      "periodStart": "2024-11-24",
      "periodEnd": "2025-09-27"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "263만원",
      "occurredDate": "2026-08-03",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-31",
      "nextCheckDate": "2026-10-03",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 87,
      "actualAmount": "2,194만",
      "targetAmount": "2,522만",
      "trend": [
        95,
        89,
        89,
        84,
        85,
        87
      ],
      "periodStart": "2025-01-18",
      "periodEnd": "2025-12-09"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,322만원",
      "occurredDate": "2026-03-29",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-07-26",
      "nextCheckDate": "2026-11-30",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-06-22",
      "estimatedAmount": "월 4,771만"
    },
    "revenueAchievement": {
      "ratio": 45,
      "actualAmount": "6,376만",
      "targetAmount": "1.42억",
      "trend": [
        43,
        43,
        43,
        47,
        42,
        45
      ],
      "periodStart": "2024-09-15",
      "periodEnd": "2025-06-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,655만원",
      "occurredDate": "2026-08-02",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-10",
      "nextCheckDate": "2027-03-06",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "이수민",
      "date": "2026-08-25"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-04-27"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2026-04-14",
      "estimatedAmount": "월 7,607만"
    },
    "revenueAchievement": {
      "ratio": 115,
      "actualAmount": "688만",
      "targetAmount": "598만",
      "trend": [
        100,
        100,
        100,
        107,
        108,
        115
      ],
      "periodStart": "2025-08-13",
      "periodEnd": "2026-06-10"
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
      "result": "부적합",
      "lastCheckDate": "2026-01-01",
      "nextCheckDate": "2026-09-30",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-09-10"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-12-27",
      "estimatedAmount": "월 1,029만"
    },
    "revenueAchievement": {
      "ratio": 32,
      "actualAmount": "876만",
      "targetAmount": "2,739만",
      "trend": [
        34,
        33,
        36,
        33,
        33,
        32
      ],
      "periodStart": "2025-01-06",
      "periodEnd": "2025-09-07"
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
      "result": "적합",
      "lastCheckDate": "2026-05-16",
      "nextCheckDate": "2027-02-28",
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-04-12"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 95,
      "actualAmount": "3,288만",
      "targetAmount": "3,461만",
      "trend": [
        110,
        106,
        104,
        98,
        94,
        95
      ],
      "periodStart": "2025-07-11",
      "periodEnd": "2026-05-18"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "807만원",
      "occurredDate": "2026-07-28",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-30",
      "nextCheckDate": "2026-12-26",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-02-01"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "4,219만",
      "targetAmount": "7,671만",
      "trend": [
        41,
        41,
        40,
        46,
        48,
        55
      ],
      "periodStart": "2025-12-17",
      "periodEnd": "2026-06-16"
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
      "result": "부적합",
      "lastCheckDate": "2026-06-16",
      "nextCheckDate": "2026-10-25",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-02-25"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 64,
      "actualAmount": "5,490만",
      "targetAmount": "8,578만",
      "trend": [
        60,
        61,
        65,
        66,
        69,
        64
      ],
      "periodStart": "2025-05-15",
      "periodEnd": "2026-04-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,206만원",
      "occurredDate": "2026-05-03",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-23",
      "nextCheckDate": "2026-10-10",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-08-01"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2026-02-01",
      "estimatedAmount": "월 535만"
    },
    "revenueAchievement": {
      "ratio": 63,
      "actualAmount": "4,479만",
      "targetAmount": "7,109만",
      "trend": [
        73,
        70,
        66,
        68,
        63,
        63
      ],
      "periodStart": "2025-08-10",
      "periodEnd": "2026-06-08"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,445만원",
      "occurredDate": "2025-12-17",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-09-21",
      "nextCheckDate": "2027-02-06",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-05-24"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-07-22",
      "estimatedAmount": "월 7,606만"
    },
    "revenueAchievement": {
      "ratio": 88,
      "actualAmount": "1.81억",
      "targetAmount": "2.06억",
      "trend": [
        87,
        84,
        82,
        83,
        82,
        88
      ],
      "periodStart": "2025-05-11",
      "periodEnd": "2026-04-26"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,436만원",
      "occurredDate": "2026-08-10",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-06-17",
      "nextCheckDate": "2027-02-26",
      "specialNote": "조리대 정리정돈 미흡"
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
      "ratio": 62,
      "actualAmount": "4,685만",
      "targetAmount": "7,557만",
      "trend": [
        61,
        63,
        62,
        63,
        63,
        62
      ],
      "periodStart": "2024-12-25",
      "periodEnd": "2025-09-30"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,271만원",
      "occurredDate": "2026-03-23",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-10-19",
      "nextCheckDate": "2026-11-05",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "전 항목 위험 상태로 즉시 현장 점검 및 계약 해지 검토 대상.",
      "author": "이수민",
      "date": "2026-08-24"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-01-01"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-01-02",
      "estimatedAmount": "월 7,499만"
    },
    "revenueAchievement": {
      "ratio": 74,
      "actualAmount": "2,365만",
      "targetAmount": "3,196만",
      "trend": [
        64,
        70,
        71,
        70,
        73,
        74
      ],
      "periodStart": "2025-05-14",
      "periodEnd": "2026-03-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,790만원",
      "occurredDate": "2026-08-01",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-08-09",
      "nextCheckDate": "2026-12-12",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "calcDate": "2024-03-16",
      "estimatedAmount": "월 2,800만"
    },
    "revenueAchievement": {
      "ratio": 68,
      "actualAmount": "4,791만",
      "targetAmount": "7,045만",
      "trend": [
        55,
        54,
        56,
        58,
        66,
        68
      ],
      "periodStart": "2024-10-01",
      "periodEnd": "2025-05-31"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "임대차계약 갱신일 표기 오류",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-08-26",
      "nextCheckDate": "2026-11-20",
      "specialNote": "조리대 정리정돈 미흡"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-06-20"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-03-10",
      "estimatedAmount": "월 9,605만"
    },
    "revenueAchievement": {
      "ratio": 70,
      "actualAmount": "1.2억",
      "targetAmount": "1.72억",
      "trend": [
        59,
        61,
        67,
        68,
        71,
        70
      ],
      "periodStart": "2024-08-24",
      "periodEnd": "2025-04-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "175만원",
      "occurredDate": "2026-01-09",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-12-18",
      "nextCheckDate": "2026-11-26",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "ratio": 65,
      "actualAmount": "1.25억",
      "targetAmount": "1.93억",
      "trend": [
        52,
        58,
        61,
        67,
        65,
        65
      ],
      "periodStart": "2025-04-14",
      "periodEnd": "2025-10-31"
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
      "result": "부적합",
      "lastCheckDate": "2025-10-07",
      "nextCheckDate": "2026-11-10",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "매출 부진 및 계약 관리 항목 다수 위험 상태. 현장 점검 필요.",
      "author": "박도현",
      "date": "2026-08-08"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-12-31"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2026-03-25",
      "estimatedAmount": "월 1,575만"
    },
    "revenueAchievement": {
      "ratio": 82,
      "actualAmount": "1.14억",
      "targetAmount": "1.39억",
      "trend": [
        69,
        71,
        71,
        71,
        74,
        82
      ],
      "periodStart": "2025-10-01",
      "periodEnd": "2026-05-25"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "916만원",
      "occurredDate": "2026-08-12",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2025-09-12",
      "nextCheckDate": "2026-11-08",
      "specialNote": ""
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
      "calcDate": "2025-04-15",
      "estimatedAmount": "월 1.42억"
    },
    "revenueAchievement": {
      "ratio": 25,
      "actualAmount": "2,717만",
      "targetAmount": "1.09억",
      "trend": [
        31,
        30,
        30,
        28,
        31,
        25
      ],
      "periodStart": "2025-07-10",
      "periodEnd": "2026-03-10"
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
      "result": "부적합",
      "lastCheckDate": "2026-05-07",
      "nextCheckDate": "2027-02-04",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-05-02"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2024-03-29",
      "estimatedAmount": "월 1.51억"
    },
    "revenueAchievement": {
      "ratio": 104,
      "actualAmount": "9,368만",
      "targetAmount": "9,008만",
      "trend": [
        99,
        103,
        104,
        106,
        105,
        104
      ],
      "periodStart": "2025-07-17",
      "periodEnd": "2026-05-16"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,453만원",
      "occurredDate": "2026-08-09",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-02-19",
      "nextCheckDate": "2027-03-08",
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2026-03-29"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2024-09-19",
      "estimatedAmount": "월 3,468만"
    },
    "revenueAchievement": {
      "ratio": 41,
      "actualAmount": "1,549만",
      "targetAmount": "3,778만",
      "trend": [
        45,
        43,
        41,
        41,
        37,
        41
      ],
      "periodStart": "2025-06-28",
      "periodEnd": "2026-01-02"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,311만원",
      "occurredDate": "2026-01-23",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-04-09",
      "nextCheckDate": "2026-10-01",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "이수민",
      "date": "2026-08-06"
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
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 84,
      "actualAmount": "3,814만",
      "targetAmount": "4,540만",
      "trend": [
        78,
        76,
        76,
        77,
        82,
        84
      ],
      "periodStart": "2024-09-11",
      "periodEnd": "2025-04-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "694만원",
      "occurredDate": "2026-04-11",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2025-09-06",
      "nextCheckDate": "2026-10-08",
      "specialNote": ""
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.",
      "author": "이수민",
      "date": "2026-08-25"
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
      "ratio": 27,
      "actualAmount": "5,076만",
      "targetAmount": "1.88억",
      "trend": [
        40,
        33,
        33,
        34,
        33,
        27
      ],
      "periodStart": "2025-07-15",
      "periodEnd": "2026-07-04"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "885만원",
      "occurredDate": "2026-05-12",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-01-09",
      "nextCheckDate": "2027-01-18",
      "specialNote": "조리대 정리정돈 미흡"
    },
    "etc": {
      "memo": "매출 부진 및 계약 관리 항목 다수 위험 상태. 현장 점검 필요.",
      "author": "이수민",
      "date": "2026-08-18"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-02-14"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-04-20",
      "estimatedAmount": "월 1.47억"
    },
    "revenueAchievement": {
      "ratio": 28,
      "actualAmount": "6,146만",
      "targetAmount": "2.2억",
      "trend": [
        21,
        24,
        22,
        28,
        25,
        28
      ],
      "periodStart": "2024-08-13",
      "periodEnd": "2025-05-16"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,186만원",
      "occurredDate": "2026-05-13",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-22",
      "nextCheckDate": "2027-01-24",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
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
      "calcDate": "2026-04-26",
      "estimatedAmount": "월 7,257만"
    },
    "revenueAchievement": {
      "ratio": 77,
      "actualAmount": "1.6억",
      "targetAmount": "2.08억",
      "trend": [
        62,
        63,
        67,
        72,
        71,
        77
      ],
      "periodStart": "2025-03-13",
      "periodEnd": "2025-09-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,120만원",
      "occurredDate": "2026-08-10",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-01-26",
      "nextCheckDate": "2026-10-19",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "ratio": 87,
      "actualAmount": "8,636만",
      "targetAmount": "9,926만",
      "trend": [
        75,
        81,
        85,
        83,
        84,
        87
      ],
      "periodStart": "2024-10-23",
      "periodEnd": "2025-05-04"
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
      "result": "부적합",
      "lastCheckDate": "2025-08-21",
      "nextCheckDate": "2026-10-01",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "calcDate": "2024-12-13",
      "estimatedAmount": "월 1.54억"
    },
    "revenueAchievement": {
      "ratio": 86,
      "actualAmount": "7,750만",
      "targetAmount": "9,012만",
      "trend": [
        82,
        81,
        81,
        80,
        86,
        86
      ],
      "periodStart": "2025-05-12",
      "periodEnd": "2026-03-09"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,032만원",
      "occurredDate": "2025-11-12",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-07-25",
      "nextCheckDate": "2026-10-15",
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
      "calcDate": "2024-12-02",
      "estimatedAmount": "월 7,935만"
    },
    "revenueAchievement": {
      "ratio": 89,
      "actualAmount": "6,753만",
      "targetAmount": "7,588만",
      "trend": [
        95,
        93,
        91,
        87,
        86,
        89
      ],
      "periodStart": "2025-08-14",
      "periodEnd": "2026-04-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,564만원",
      "occurredDate": "2026-08-14",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-11-21",
      "nextCheckDate": "2027-02-07",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-03-02"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-03-14",
      "estimatedAmount": "월 4,621만"
    },
    "revenueAchievement": {
      "ratio": 80,
      "actualAmount": "5,377만",
      "targetAmount": "6,721만",
      "trend": [
        91,
        86,
        82,
        86,
        79,
        80
      ],
      "periodStart": "2025-08-11",
      "periodEnd": "2026-05-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "187만원",
      "occurredDate": "2026-08-11",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-06-19",
      "nextCheckDate": "2027-01-10",
      "specialNote": "조리대 정리정돈 미흡"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2026-05-06"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 75,
      "actualAmount": "9,947만",
      "targetAmount": "1.33억",
      "trend": [
        82,
        77,
        79,
        82,
        81,
        75
      ],
      "periodStart": "2024-12-25",
      "periodEnd": "2025-12-14"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,665만원",
      "occurredDate": "2026-03-22",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-04-13",
      "nextCheckDate": "2026-12-30",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "calcDate": "2026-01-09",
      "estimatedAmount": "월 1,746만"
    },
    "revenueAchievement": {
      "ratio": 76,
      "actualAmount": "7,788만",
      "targetAmount": "1.02억",
      "trend": [
        88,
        89,
        82,
        82,
        76,
        76
      ],
      "periodStart": "2024-12-31",
      "periodEnd": "2025-08-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,606만원",
      "occurredDate": "2026-04-10",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-04-16",
      "nextCheckDate": "2026-09-26",
      "specialNote": "조리대 정리정돈 미흡"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-09-06"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2026-04-20",
      "estimatedAmount": "월 1.46억"
    },
    "revenueAchievement": {
      "ratio": 88,
      "actualAmount": "1.77억",
      "targetAmount": "2.02억",
      "trend": [
        95,
        94,
        94,
        95,
        90,
        88
      ],
      "periodStart": "2025-01-29",
      "periodEnd": "2025-11-15"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,015만원",
      "occurredDate": "2026-06-19",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-11-14",
      "nextCheckDate": "2027-02-01",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-08-01"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-09-12",
      "estimatedAmount": "월 4,147만"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "373만",
      "targetAmount": "678만",
      "trend": [
        69,
        66,
        60,
        63,
        61,
        55
      ],
      "periodStart": "2026-01-24",
      "periodEnd": "2026-07-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "790만원",
      "occurredDate": "2026-08-14",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-04-14",
      "nextCheckDate": "2026-11-10",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-04-19"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 115,
      "actualAmount": "2.05억",
      "targetAmount": "1.78억",
      "trend": [
        105,
        103,
        107,
        107,
        109,
        115
      ],
      "periodStart": "2024-11-05",
      "periodEnd": "2025-07-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "611만원",
      "occurredDate": "2026-08-17",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-07-05",
      "nextCheckDate": "2027-01-09",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "calcDate": "2024-03-18",
      "estimatedAmount": "월 1.52억"
    },
    "revenueAchievement": {
      "ratio": 87,
      "actualAmount": "2,053만",
      "targetAmount": "2,360만",
      "trend": [
        82,
        86,
        88,
        86,
        85,
        87
      ],
      "periodStart": "2025-02-10",
      "periodEnd": "2025-11-18"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "598만원",
      "occurredDate": "2026-07-14",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-26",
      "nextCheckDate": "2026-12-09",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "매출 부진 및 계약 관리 항목 다수 위험 상태. 현장 점검 필요.",
      "author": "이수민",
      "date": "2026-08-19"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-07-27"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2025-08-05",
      "estimatedAmount": "월 1.43억"
    },
    "revenueAchievement": {
      "ratio": 73,
      "actualAmount": "4,083만",
      "targetAmount": "5,593만",
      "trend": [
        83,
        82,
        83,
        83,
        75,
        73
      ],
      "periodStart": "2025-01-15",
      "periodEnd": "2025-09-18"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,397만원",
      "occurredDate": "2026-07-28",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-10",
      "nextCheckDate": "2026-12-27",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-03-20"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-06-15",
      "estimatedAmount": "월 640만"
    },
    "revenueAchievement": {
      "ratio": 70,
      "actualAmount": "1.05억",
      "targetAmount": "1.5억",
      "trend": [
        83,
        77,
        76,
        75,
        71,
        70
      ],
      "periodStart": "2025-03-24",
      "periodEnd": "2025-12-16"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,622만원",
      "occurredDate": "2026-08-23",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-03-29",
      "nextCheckDate": "2027-02-09",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "ratio": 48,
      "actualAmount": "3,777만",
      "targetAmount": "7,869만",
      "trend": [
        58,
        53,
        51,
        53,
        51,
        48
      ],
      "periodStart": "2025-03-23",
      "periodEnd": "2026-02-23"
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
      "result": "부적합",
      "lastCheckDate": "2025-09-01",
      "nextCheckDate": "2027-01-08",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
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
      "calcDate": "2024-12-14",
      "estimatedAmount": "월 5,762만"
    },
    "revenueAchievement": {
      "ratio": 38,
      "actualAmount": "7,488만",
      "targetAmount": "1.97억",
      "trend": [
        24,
        30,
        32,
        30,
        30,
        38
      ],
      "periodStart": "2024-12-19",
      "periodEnd": "2025-12-18"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "708만원",
      "occurredDate": "2026-08-11",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2026-02-26",
      "nextCheckDate": "2026-11-09",
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
      "calcDate": "2025-10-23",
      "estimatedAmount": "월 1.27억"
    },
    "revenueAchievement": {
      "ratio": 112,
      "actualAmount": "1.62억",
      "targetAmount": "1.44억",
      "trend": [
        122,
        120,
        115,
        112,
        115,
        112
      ],
      "periodStart": "2025-08-22",
      "periodEnd": "2026-05-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,761만원",
      "occurredDate": "2026-08-24",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-01-21",
      "nextCheckDate": "2027-03-02",
      "specialNote": "조리대 정리정돈 미흡"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-09-28"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 74,
      "actualAmount": "1.5억",
      "targetAmount": "2.02억",
      "trend": [
        86,
        88,
        83,
        83,
        78,
        74
      ],
      "periodStart": "2024-07-25",
      "periodEnd": "2025-07-21"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,396만원",
      "occurredDate": "2026-08-24",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-11-03",
      "nextCheckDate": "2026-09-30",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "ratio": 64,
      "actualAmount": "1.38억",
      "targetAmount": "2.15억",
      "trend": [
        74,
        75,
        69,
        64,
        67,
        64
      ],
      "periodStart": "2025-12-10",
      "periodEnd": "2026-06-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "514만원",
      "occurredDate": "2026-04-19",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-04-06",
      "nextCheckDate": "2027-01-03",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-02-24"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 85,
      "actualAmount": "3,370만",
      "targetAmount": "3,965만",
      "trend": [
        100,
        95,
        97,
        92,
        91,
        85
      ],
      "periodStart": "2024-10-22",
      "periodEnd": "2025-08-17"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "583만원",
      "occurredDate": "2026-03-04",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-10-26",
      "nextCheckDate": "2026-10-15",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-10-31"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2024-12-24",
      "estimatedAmount": "월 857만"
    },
    "revenueAchievement": {
      "ratio": 109,
      "actualAmount": "2.12억",
      "targetAmount": "1.95억",
      "trend": [
        107,
        104,
        104,
        105,
        106,
        109
      ],
      "periodStart": "2024-10-03",
      "periodEnd": "2025-09-30"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,702만원",
      "occurredDate": "2026-08-05",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-05-02",
      "nextCheckDate": "2027-02-08",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-03-17"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 71,
      "actualAmount": "7,219만",
      "targetAmount": "1.02억",
      "trend": [
        69,
        73,
        77,
        75,
        70,
        71
      ],
      "periodStart": "2025-06-08",
      "periodEnd": "2026-03-28"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,558만원",
      "occurredDate": "2026-08-09",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-11-05",
      "nextCheckDate": "2027-03-04",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "calcDate": "2024-05-11",
      "estimatedAmount": "월 9,308만"
    },
    "revenueAchievement": {
      "ratio": 73,
      "actualAmount": "1.27억",
      "targetAmount": "1.74억",
      "trend": [
        66,
        67,
        65,
        69,
        72,
        73
      ],
      "periodStart": "2025-07-05",
      "periodEnd": "2026-06-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "임대차계약 갱신일 표기 오류",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-09-13",
      "nextCheckDate": "2027-01-27",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "calcDate": "2024-07-02",
      "estimatedAmount": "월 5,554만"
    },
    "revenueAchievement": {
      "ratio": 74,
      "actualAmount": "5,810만",
      "targetAmount": "7,852만",
      "trend": [
        63,
        62,
        62,
        64,
        70,
        74
      ],
      "periodStart": "2025-08-11",
      "periodEnd": "2026-05-14"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "206만원",
      "occurredDate": "2026-08-20",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-06-06",
      "nextCheckDate": "2026-12-23",
      "specialNote": "조리대 정리정돈 미흡"
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
      "ratio": 25,
      "actualAmount": "2,163만",
      "targetAmount": "8,652만",
      "trend": [
        16,
        21,
        23,
        26,
        27,
        25
      ],
      "periodStart": "2025-10-25",
      "periodEnd": "2026-04-30"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "714만원",
      "occurredDate": "2026-03-09",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-08-15",
      "nextCheckDate": "2027-02-14",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.",
      "author": "정하은",
      "date": "2026-08-10"
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
      "ratio": 29,
      "actualAmount": "871만",
      "targetAmount": "3,003만",
      "trend": [
        37,
        36,
        39,
        33,
        35,
        29
      ],
      "periodStart": "2025-07-30",
      "periodEnd": "2026-07-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "294만원",
      "occurredDate": "2026-03-16",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-06-05",
      "nextCheckDate": "2027-01-26",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "종합 위험도 최고 수준, 본사 긴급 개입 필요.",
      "author": "정하은",
      "date": "2026-08-22"
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
      "ratio": 118,
      "actualAmount": "2.01억",
      "targetAmount": "1.7억",
      "trend": [
        126,
        125,
        123,
        119,
        121,
        118
      ],
      "periodStart": "2025-07-31",
      "periodEnd": "2026-06-26"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,181만원",
      "occurredDate": "2026-05-03",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2025-07-24",
      "nextCheckDate": "2026-10-20",
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-11-21"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2025-06-16",
      "estimatedAmount": "월 2,754만"
    },
    "revenueAchievement": {
      "ratio": 69,
      "actualAmount": "1.41억",
      "targetAmount": "2.04억",
      "trend": [
        62,
        64,
        62,
        60,
        62,
        69
      ],
      "periodStart": "2025-03-09",
      "periodEnd": "2025-12-23"
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
      "result": "시정요구",
      "lastCheckDate": "2026-06-03",
      "nextCheckDate": "2026-12-21",
      "specialNote": "조리대 정리정돈 미흡"
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
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-06-27"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2026-06-26",
      "estimatedAmount": "월 3,138만"
    },
    "revenueAchievement": {
      "ratio": 44,
      "actualAmount": "6,802만",
      "targetAmount": "1.55억",
      "trend": [
        29,
        34,
        39,
        39,
        46,
        44
      ],
      "periodStart": "2024-07-29",
      "periodEnd": "2025-06-02"
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
      "result": "적합",
      "lastCheckDate": "2026-05-10",
      "nextCheckDate": "2026-10-06",
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
      "calcDate": "2025-02-28",
      "estimatedAmount": "월 1.15억"
    },
    "revenueAchievement": {
      "ratio": 36,
      "actualAmount": "4,443만",
      "targetAmount": "1.23억",
      "trend": [
        36,
        40,
        35,
        38,
        39,
        36
      ],
      "periodStart": "2024-11-19",
      "periodEnd": "2025-07-21"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "503만원",
      "occurredDate": "2026-06-13",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-10-13",
      "nextCheckDate": "2027-01-11",
      "specialNote": "조리대 정리정돈 미흡"
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
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-09-21"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2025-01-26",
      "estimatedAmount": "월 1.14억"
    },
    "revenueAchievement": {
      "ratio": 81,
      "actualAmount": "1.41억",
      "targetAmount": "1.74억",
      "trend": [
        94,
        93,
        90,
        87,
        87,
        81
      ],
      "periodStart": "2025-02-03",
      "periodEnd": "2025-08-12"
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
      "occurredDate": "2026-08-06",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-11-30",
      "nextCheckDate": "2026-10-30",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "ratio": 50,
      "actualAmount": "7,391만",
      "targetAmount": "1.48억",
      "trend": [
        37,
        38,
        39,
        38,
        48,
        50
      ],
      "periodStart": "2025-08-30",
      "periodEnd": "2026-08-13"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "715만원",
      "occurredDate": "2026-05-04",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2026-06-21",
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
    "id": "CAFE020",
    "name": "더카페 이마트 구미점 1층",
    "brand": "더카페",
    "code": "CAFE-020",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-08-06"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-11-01",
      "estimatedAmount": "월 1.57억"
    },
    "revenueAchievement": {
      "ratio": 78,
      "actualAmount": "8,071만",
      "targetAmount": "1.03억",
      "trend": [
        69,
        67,
        68,
        69,
        75,
        78
      ],
      "periodStart": "2024-12-11",
      "periodEnd": "2025-06-15"
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
      "result": "적합",
      "lastCheckDate": "2025-09-29",
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-08-02"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2026-04-07",
      "estimatedAmount": "월 3,782만"
    },
    "revenueAchievement": {
      "ratio": 121,
      "actualAmount": "2.44억",
      "targetAmount": "2.02억",
      "trend": [
        108,
        110,
        109,
        110,
        115,
        121
      ],
      "periodStart": "2024-12-06",
      "periodEnd": "2025-11-07"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,524만원",
      "occurredDate": "2026-08-09",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-12-17",
      "nextCheckDate": "2026-10-14",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-03-31"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2026-06-20",
      "estimatedAmount": "월 1.18억"
    },
    "revenueAchievement": {
      "ratio": 38,
      "actualAmount": "1,284만",
      "targetAmount": "3,379만",
      "trend": [
        24,
        27,
        31,
        35,
        41,
        38
      ],
      "periodStart": "2024-11-30",
      "periodEnd": "2025-07-21"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "987만원",
      "occurredDate": "2026-08-07",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-04-11",
      "nextCheckDate": "2027-02-10",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2026-01-18"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 40,
      "actualAmount": "2,073만",
      "targetAmount": "5,183만",
      "trend": [
        28,
        27,
        35,
        37,
        43,
        40
      ],
      "periodStart": "2025-09-24",
      "periodEnd": "2026-06-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "745만원",
      "occurredDate": "2026-02-19",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-12-18",
      "nextCheckDate": "2026-11-23",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-01-07"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 27,
      "actualAmount": "1,030만",
      "targetAmount": "3,814만",
      "trend": [
        23,
        23,
        21,
        23,
        27,
        27
      ],
      "periodStart": "2024-11-22",
      "periodEnd": "2025-07-01"
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
      "result": "점검예정",
      "lastCheckDate": "2026-06-01",
      "nextCheckDate": "2026-10-03",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "ratio": 25,
      "actualAmount": "1,113만",
      "targetAmount": "4,450만",
      "trend": [
        25,
        29,
        26,
        22,
        19,
        25
      ],
      "periodStart": "2024-05-18",
      "periodEnd": "2025-05-02"
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
      "result": "부적합",
      "lastCheckDate": "2025-11-04",
      "nextCheckDate": "2027-02-15",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "박도현",
      "date": "2026-08-15"
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
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-01-30"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2024-12-19",
      "estimatedAmount": "월 1,999만"
    },
    "revenueAchievement": {
      "ratio": 115,
      "actualAmount": "1.95억",
      "targetAmount": "1.69억",
      "trend": [
        106,
        110,
        112,
        116,
        114,
        115
      ],
      "periodStart": "2026-01-20",
      "periodEnd": "2026-08-07"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "268만원",
      "occurredDate": "2025-12-13",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-07-06",
      "nextCheckDate": "2027-02-04",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "ratio": 85,
      "actualAmount": "1.3억",
      "targetAmount": "1.53억",
      "trend": [
        70,
        70,
        75,
        80,
        84,
        85
      ],
      "periodStart": "2024-08-11",
      "periodEnd": "2025-06-23"
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
      "result": "시정요구",
      "lastCheckDate": "2025-11-15",
      "nextCheckDate": "2026-11-07",
      "specialNote": "조리대 정리정돈 미흡"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-02-10"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2024-10-16",
      "estimatedAmount": "월 1.42억"
    },
    "revenueAchievement": {
      "ratio": 62,
      "actualAmount": "8,082만",
      "targetAmount": "1.3억",
      "trend": [
        73,
        68,
        65,
        60,
        63,
        62
      ],
      "periodStart": "2025-05-20",
      "periodEnd": "2025-12-04"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "846만원",
      "occurredDate": "2026-07-18",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-10-11",
      "nextCheckDate": "2027-01-26",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "ratio": 49,
      "actualAmount": "1,123만",
      "targetAmount": "2,292만",
      "trend": [
        37,
        41,
        40,
        44,
        47,
        49
      ],
      "periodStart": "2024-12-03",
      "periodEnd": "2025-10-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "300만원",
      "occurredDate": "2026-08-17",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-10-14",
      "nextCheckDate": "2027-01-09",
      "specialNote": "조리대 정리정돈 미흡"
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.",
      "author": "정하은",
      "date": "2026-08-06"
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
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 49,
      "actualAmount": "8,737만",
      "targetAmount": "1.78억",
      "trend": [
        43,
        44,
        44,
        43,
        50,
        49
      ],
      "periodStart": "2025-05-30",
      "periodEnd": "2026-01-15"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,750만원",
      "occurredDate": "2026-06-24",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-06-04",
      "nextCheckDate": "2026-12-18",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2022-11-13"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-07-10",
      "estimatedAmount": "월 1.73억"
    },
    "revenueAchievement": {
      "ratio": 27,
      "actualAmount": "4,655만",
      "targetAmount": "1.72억",
      "trend": [
        14,
        15,
        21,
        25,
        28,
        27
      ],
      "periodStart": "2025-06-09",
      "periodEnd": "2026-02-03"
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
      "result": "부적합",
      "lastCheckDate": "2025-08-25",
      "nextCheckDate": "2027-01-27",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "noteType": "영업지역 침해 있음",
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
      "ratio": 79,
      "actualAmount": "8,075만",
      "targetAmount": "1.02억",
      "trend": [
        83,
        83,
        86,
        86,
        81,
        79
      ],
      "periodStart": "2025-07-12",
      "periodEnd": "2026-06-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,458만원",
      "occurredDate": "2026-07-31",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-07-15",
      "nextCheckDate": "2026-12-03",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-12-23"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2024-08-29",
      "estimatedAmount": "월 1.4억"
    },
    "revenueAchievement": {
      "ratio": 51,
      "actualAmount": "7,116만",
      "targetAmount": "1.4억",
      "trend": [
        47,
        52,
        52,
        50,
        52,
        51
      ],
      "periodStart": "2025-10-18",
      "periodEnd": "2026-06-03"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,159만원",
      "occurredDate": "2025-10-14",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-07-22",
      "nextCheckDate": "2027-01-16",
      "specialNote": "조리대 정리정돈 미흡"
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
      "ratio": 26,
      "actualAmount": "5,484만",
      "targetAmount": "2.11억",
      "trend": [
        31,
        31,
        34,
        32,
        33,
        26
      ],
      "periodStart": "2025-09-06",
      "periodEnd": "2026-07-15"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,022만원",
      "occurredDate": "2025-12-31",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-06-22",
      "nextCheckDate": "2027-01-20",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
    },
    "etc": {
      "memo": "전 항목 위험 상태로 즉시 현장 점검 및 계약 해지 검토 대상.",
      "author": "정하은",
      "date": "2026-08-09"
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
      "ratio": 59,
      "actualAmount": "3,053만",
      "targetAmount": "5,175만",
      "trend": [
        50,
        48,
        52,
        54,
        59,
        59
      ],
      "periodStart": "2025-07-16",
      "periodEnd": "2026-07-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "688만원",
      "occurredDate": "2026-07-21",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-09-16",
      "nextCheckDate": "2027-03-02",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2026-01-31"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-12-21",
      "estimatedAmount": "월 1.59억"
    },
    "revenueAchievement": {
      "ratio": 96,
      "actualAmount": "1.63억",
      "targetAmount": "1.7억",
      "trend": [
        94,
        91,
        90,
        93,
        95,
        96
      ],
      "periodStart": "2025-07-02",
      "periodEnd": "2026-05-22"
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
      "result": "부적합",
      "lastCheckDate": "2025-12-10",
      "nextCheckDate": "2027-01-14",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "ratio": 60,
      "actualAmount": "2,618만",
      "targetAmount": "4,364만",
      "trend": [
        69,
        66,
        67,
        63,
        60,
        60
      ],
      "periodStart": "2024-08-08",
      "periodEnd": "2025-08-05"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,550만원",
      "occurredDate": "2026-04-27",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2025-12-19",
      "nextCheckDate": "2027-01-05",
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
      "calcDate": "2024-08-04",
      "estimatedAmount": "월 4,811만"
    },
    "revenueAchievement": {
      "ratio": 62,
      "actualAmount": "6,535만",
      "targetAmount": "1.05억",
      "trend": [
        75,
        71,
        69,
        65,
        59,
        62
      ],
      "periodStart": "2025-01-25",
      "periodEnd": "2025-11-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,061만원",
      "occurredDate": "2026-06-15",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2025-12-27",
      "nextCheckDate": "2026-11-11",
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-05-01"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2024-10-02",
      "estimatedAmount": "월 9,995만"
    },
    "revenueAchievement": {
      "ratio": 70,
      "actualAmount": "7,790만",
      "targetAmount": "1.11억",
      "trend": [
        81,
        77,
        77,
        78,
        78,
        70
      ],
      "periodStart": "2025-06-28",
      "periodEnd": "2026-06-18"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,689만원",
      "occurredDate": "2026-08-13",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-05-22",
      "nextCheckDate": "2027-02-19",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2022-12-23"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-07-17",
      "estimatedAmount": "월 8,885만"
    },
    "revenueAchievement": {
      "ratio": 47,
      "actualAmount": "8,902만",
      "targetAmount": "1.89억",
      "trend": [
        48,
        44,
        45,
        43,
        41,
        47
      ],
      "periodStart": "2025-10-02",
      "periodEnd": "2026-04-21"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,397만원",
      "occurredDate": "2026-06-04",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-05-05",
      "nextCheckDate": "2027-03-12",
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
      "calcDate": "2024-07-03",
      "estimatedAmount": "월 1.6억"
    },
    "revenueAchievement": {
      "ratio": 74,
      "actualAmount": "1,513만",
      "targetAmount": "2,044만",
      "trend": [
        65,
        64,
        69,
        72,
        74,
        74
      ],
      "periodStart": "2024-10-02",
      "periodEnd": "2025-04-14"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "351만원",
      "occurredDate": "2026-08-02",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-05-19",
      "nextCheckDate": "2027-02-23",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "calcDate": "2026-04-21",
      "estimatedAmount": "월 1,527만"
    },
    "revenueAchievement": {
      "ratio": 75,
      "actualAmount": "3,695만",
      "targetAmount": "4,926만",
      "trend": [
        86,
        80,
        75,
        76,
        74,
        75
      ],
      "periodStart": "2025-08-22",
      "periodEnd": "2026-04-30"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "336만원",
      "occurredDate": "2025-11-13",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-08-21",
      "nextCheckDate": "2027-03-13",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
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
      "calcDate": "2024-11-12",
      "estimatedAmount": "월 7,237만"
    },
    "revenueAchievement": {
      "ratio": 53,
      "actualAmount": "1,233만",
      "targetAmount": "2,327만",
      "trend": [
        55,
        53,
        53,
        53,
        51,
        53
      ],
      "periodStart": "2025-04-30",
      "periodEnd": "2026-04-04"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "613만원",
      "occurredDate": "2025-12-25",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-11-11",
      "nextCheckDate": "2026-11-25",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "이수민",
      "date": "2026-08-20"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-06-29"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2025-09-20",
      "estimatedAmount": "월 1.6억"
    },
    "revenueAchievement": {
      "ratio": 37,
      "actualAmount": "1,740만",
      "targetAmount": "4,704만",
      "trend": [
        37,
        37,
        33,
        35,
        40,
        37
      ],
      "periodStart": "2025-08-10",
      "periodEnd": "2026-06-13"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "774만원",
      "occurredDate": "2026-08-24",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-07-10",
      "nextCheckDate": "2026-12-24",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2026-05-10"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-10-18",
      "estimatedAmount": "월 1.38억"
    },
    "revenueAchievement": {
      "ratio": 91,
      "actualAmount": "1.49억",
      "targetAmount": "1.64억",
      "trend": [
        79,
        84,
        83,
        83,
        83,
        91
      ],
      "periodStart": "2025-08-06",
      "periodEnd": "2026-08-02"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "697만원",
      "occurredDate": "2026-07-19",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-07-31",
      "nextCheckDate": "2027-02-05",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "ratio": 44,
      "actualAmount": "2,958만",
      "targetAmount": "6,723만",
      "trend": [
        52,
        52,
        46,
        43,
        46,
        44
      ],
      "periodStart": "2025-01-20",
      "periodEnd": "2025-07-27"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,521만원",
      "occurredDate": "2026-08-24",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2025-12-25",
      "nextCheckDate": "2027-02-17",
      "specialNote": ""
    },
    "etc": {
      "memo": "매출 부진 및 계약 관리 항목 다수 위험 상태. 현장 점검 필요.",
      "author": "박도현",
      "date": "2026-08-19"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-03-22"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-10-23",
      "estimatedAmount": "월 1.66억"
    },
    "revenueAchievement": {
      "ratio": 86,
      "actualAmount": "6,119만",
      "targetAmount": "7,115만",
      "trend": [
        76,
        80,
        84,
        87,
        90,
        86
      ],
      "periodStart": "2025-01-18",
      "periodEnd": "2025-11-21"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "187만원",
      "occurredDate": "2026-08-10",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-11-18",
      "nextCheckDate": "2026-10-07",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "ratio": 120,
      "actualAmount": "2.1억",
      "targetAmount": "1.75억",
      "trend": [
        131,
        129,
        123,
        122,
        119,
        120
      ],
      "periodStart": "2025-03-24",
      "periodEnd": "2025-12-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,411만원",
      "occurredDate": "2026-01-24",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-09-15",
      "nextCheckDate": "2027-02-17",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-03-17"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2024-10-27",
      "estimatedAmount": "월 1.32억"
    },
    "revenueAchievement": {
      "ratio": 85,
      "actualAmount": "1.19억",
      "targetAmount": "1.4억",
      "trend": [
        89,
        87,
        83,
        83,
        83,
        85
      ],
      "periodStart": "2025-01-07",
      "periodEnd": "2025-12-21"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,587만원",
      "occurredDate": "2026-08-06",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-11-01",
      "nextCheckDate": "2026-10-25",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-03-29"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 26,
      "actualAmount": "2,742만",
      "targetAmount": "1.05억",
      "trend": [
        32,
        33,
        30,
        28,
        24,
        26
      ],
      "periodStart": "2025-09-27",
      "periodEnd": "2026-07-14"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "828만원",
      "occurredDate": "2026-02-23",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-10-29",
      "nextCheckDate": "2027-02-20",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "박도현",
      "date": "2026-08-08"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-07-22"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-04-01",
      "estimatedAmount": "월 2,204만"
    },
    "revenueAchievement": {
      "ratio": 72,
      "actualAmount": "6,546만",
      "targetAmount": "9,092만",
      "trend": [
        63,
        67,
        71,
        74,
        71,
        72
      ],
      "periodStart": "2024-07-10",
      "periodEnd": "2025-05-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "456만원",
      "occurredDate": "2026-07-29",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-12-28",
      "nextCheckDate": "2026-12-18",
      "specialNote": "조리대 정리정돈 미흡"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2024-03-22"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2026-01-28",
      "estimatedAmount": "월 8,963만"
    },
    "revenueAchievement": {
      "ratio": 79,
      "actualAmount": "5,822만",
      "targetAmount": "7,369만",
      "trend": [
        64,
        63,
        63,
        71,
        77,
        79
      ],
      "periodStart": "2025-07-06",
      "periodEnd": "2026-03-08"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "해결완료"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "822만원",
      "occurredDate": "2026-08-22",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-12-25",
      "nextCheckDate": "2026-11-13",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-02-22"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "3,011만",
      "targetAmount": "5,475만",
      "trend": [
        69,
        68,
        62,
        60,
        56,
        55
      ],
      "periodStart": "2025-08-28",
      "periodEnd": "2026-06-24"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,178만원",
      "occurredDate": "2026-05-06",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2026-01-01",
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
    "id": "CAFE078",
    "name": "더카페 가산웰츠밸리점",
    "brand": "더카페",
    "code": "CAFE-078",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-04-14"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2026-02-15",
      "estimatedAmount": "월 1.3억"
    },
    "revenueAchievement": {
      "ratio": 70,
      "actualAmount": "1.15억",
      "targetAmount": "1.64억",
      "trend": [
        74,
        69,
        70,
        67,
        67,
        70
      ],
      "periodStart": "2025-05-26",
      "periodEnd": "2026-04-25"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,047만원",
      "occurredDate": "2026-08-06",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "점검예정",
      "lastCheckDate": "2025-11-16",
      "nextCheckDate": "2026-12-05",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "calcDate": "2025-11-12",
      "estimatedAmount": "월 7,166만"
    },
    "revenueAchievement": {
      "ratio": 77,
      "actualAmount": "1.64억",
      "targetAmount": "2.14억",
      "trend": [
        78,
        75,
        73,
        77,
        75,
        77
      ],
      "periodStart": "2025-07-18",
      "periodEnd": "2026-07-16"
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
      "result": "적합",
      "lastCheckDate": "2026-07-03",
      "nextCheckDate": "2027-01-04",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-11-06"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2024-11-11",
      "estimatedAmount": "월 1.23억"
    },
    "revenueAchievement": {
      "ratio": 86,
      "actualAmount": "1억",
      "targetAmount": "1.16억",
      "trend": [
        83,
        80,
        81,
        86,
        86,
        86
      ],
      "periodStart": "2025-11-20",
      "periodEnd": "2026-07-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "772만원",
      "occurredDate": "2026-08-15",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-07-27",
      "nextCheckDate": "2027-01-12",
      "specialNote": "조리대 정리정돈 미흡"
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
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 100,
      "actualAmount": "1.1억",
      "targetAmount": "1.1억",
      "trend": [
        103,
        99,
        96,
        99,
        104,
        100
      ],
      "periodStart": "2025-04-21",
      "periodEnd": "2026-01-06"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "300만원",
      "occurredDate": "2026-01-02",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-11-23",
      "nextCheckDate": "2027-01-25",
      "specialNote": "조리대 정리정돈 미흡"
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
      "ratio": 60,
      "actualAmount": "1.18억",
      "targetAmount": "1.97억",
      "trend": [
        65,
        66,
        67,
        63,
        60,
        60
      ],
      "periodStart": "2025-03-18",
      "periodEnd": "2026-03-14"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "283만원",
      "occurredDate": "2026-08-10",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-08-10",
      "nextCheckDate": "2026-10-18",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "정하은",
      "date": "2026-08-18"
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
      "calcDate": "2024-06-26",
      "estimatedAmount": "월 7,970만"
    },
    "revenueAchievement": {
      "ratio": 74,
      "actualAmount": "5,570만",
      "targetAmount": "7,527만",
      "trend": [
        62,
        60,
        67,
        67,
        72,
        74
      ],
      "periodStart": "2025-03-08",
      "periodEnd": "2025-09-29"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,046만원",
      "occurredDate": "2026-08-09",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-01-01",
      "nextCheckDate": "2026-11-07",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2024-12-28"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 116,
      "actualAmount": "1.98억",
      "targetAmount": "1.71억",
      "trend": [
        123,
        120,
        123,
        120,
        118,
        116
      ],
      "periodStart": "2025-01-16",
      "periodEnd": "2026-01-15"
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
      "result": "부적합",
      "lastCheckDate": "2025-08-28",
      "nextCheckDate": "2026-10-14",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-04-24"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 73,
      "actualAmount": "1.39억",
      "targetAmount": "1.91억",
      "trend": [
        65,
        71,
        75,
        71,
        68,
        73
      ],
      "periodStart": "2024-08-17",
      "periodEnd": "2025-04-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,272만원",
      "occurredDate": "2026-06-17",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-06-30",
      "nextCheckDate": "2027-01-25",
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
      "ratio": 57,
      "actualAmount": "1.2억",
      "targetAmount": "2.1억",
      "trend": [
        68,
        65,
        59,
        55,
        56,
        57
      ],
      "periodStart": "2026-01-08",
      "periodEnd": "2026-08-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,624만원",
      "occurredDate": "2026-04-24",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-12-29",
      "nextCheckDate": "2027-02-25",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2025-06-04"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2024-11-10",
      "estimatedAmount": "월 3,768만"
    },
    "revenueAchievement": {
      "ratio": 92,
      "actualAmount": "1.23억",
      "targetAmount": "1.33억",
      "trend": [
        92,
        88,
        93,
        91,
        93,
        92
      ],
      "periodStart": "2024-08-24",
      "periodEnd": "2025-04-20"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "202만원",
      "occurredDate": "2026-06-13",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-01",
      "nextCheckDate": "2027-03-14",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2022-11-18"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2024-03-23",
      "estimatedAmount": "월 1.15억"
    },
    "revenueAchievement": {
      "ratio": 50,
      "actualAmount": "9,030만",
      "targetAmount": "1.81억",
      "trend": [
        42,
        48,
        52,
        48,
        49,
        50
      ],
      "periodStart": "2024-07-12",
      "periodEnd": "2025-06-13"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,359만원",
      "occurredDate": "2026-02-03",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-28",
      "nextCheckDate": "2027-01-04",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-11-10"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 113,
      "actualAmount": "7,056만",
      "targetAmount": "6,244만",
      "trend": [
        124,
        118,
        116,
        119,
        112,
        113
      ],
      "periodStart": "2024-06-17",
      "periodEnd": "2025-04-19"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "800만원",
      "occurredDate": "2026-01-03",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-07",
      "nextCheckDate": "2027-01-28",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "ratio": 45,
      "actualAmount": "4,687만",
      "targetAmount": "1.04억",
      "trend": [
        48,
        49,
        47,
        45,
        46,
        45
      ],
      "periodStart": "2025-08-30",
      "periodEnd": "2026-04-09"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,055만원",
      "occurredDate": "2025-10-13",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-28",
      "nextCheckDate": "2026-12-08",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-08-14"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 70,
      "actualAmount": "2,661만",
      "targetAmount": "3,802만",
      "trend": [
        85,
        86,
        79,
        80,
        73,
        70
      ],
      "periodStart": "2025-07-27",
      "periodEnd": "2026-02-04"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,271만원",
      "occurredDate": "2026-02-12",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-07-31",
      "nextCheckDate": "2027-03-10",
      "specialNote": "방역 소독 미실시로 시정 요구"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "재검토필요",
      "calcDate": "2026-03-06",
      "estimatedAmount": "월 1.22억"
    },
    "revenueAchievement": {
      "ratio": 68,
      "actualAmount": "1.12억",
      "targetAmount": "1.65억",
      "trend": [
        81,
        79,
        74,
        74,
        71,
        68
      ],
      "periodStart": "2024-12-14",
      "periodEnd": "2025-08-06"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "245만원",
      "occurredDate": "2026-07-10",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-08-05",
      "nextCheckDate": "2026-11-25",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
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
      "ratio": 86,
      "actualAmount": "7,184만",
      "targetAmount": "8,354만",
      "trend": [
        99,
        94,
        96,
        90,
        89,
        86
      ],
      "periodStart": "2025-09-23",
      "periodEnd": "2026-04-30"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,550만원",
      "occurredDate": "2026-08-16",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-12-03",
      "nextCheckDate": "2027-03-07",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-03-16"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2025-10-09",
      "estimatedAmount": "월 1.74억"
    },
    "revenueAchievement": {
      "ratio": 75,
      "actualAmount": "7,463만",
      "targetAmount": "9,950만",
      "trend": [
        70,
        73,
        76,
        77,
        73,
        75
      ],
      "periodStart": "2025-04-17",
      "periodEnd": "2026-01-22"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "429만원",
      "occurredDate": "2026-08-24",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-04-22",
      "nextCheckDate": "2026-12-22",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "ratio": 31,
      "actualAmount": "4,930만",
      "targetAmount": "1.59억",
      "trend": [
        19,
        19,
        23,
        22,
        22,
        31
      ],
      "periodStart": "2024-12-15",
      "periodEnd": "2025-12-10"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,009만원",
      "occurredDate": "2025-10-31",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-08",
      "nextCheckDate": "2026-10-24",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "status": "정합성확인됨",
      "calcDate": "2024-07-22",
      "estimatedAmount": "월 1.63억"
    },
    "revenueAchievement": {
      "ratio": 101,
      "actualAmount": "1.3억",
      "targetAmount": "1.29억",
      "trend": [
        105,
        105,
        103,
        104,
        103,
        101
      ],
      "periodStart": "2025-11-06",
      "periodEnd": "2026-08-09"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "828만원",
      "occurredDate": "2026-08-24",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-08-24",
      "nextCheckDate": "2027-01-17",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-07-20"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2024-08-09",
      "estimatedAmount": "월 7,108만"
    },
    "revenueAchievement": {
      "ratio": 96,
      "actualAmount": "1.86억",
      "targetAmount": "1.94억",
      "trend": [
        105,
        102,
        103,
        99,
        99,
        96
      ],
      "periodStart": "2024-10-27",
      "periodEnd": "2025-05-09"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,251만원",
      "occurredDate": "2026-08-03",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-01-20",
      "nextCheckDate": "2026-11-14",
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
      "calcDate": "2024-07-28",
      "estimatedAmount": "월 3,812만"
    },
    "revenueAchievement": {
      "ratio": 55,
      "actualAmount": "1,139만",
      "targetAmount": "2,070만",
      "trend": [
        58,
        60,
        59,
        55,
        56,
        55
      ],
      "periodStart": "2024-10-13",
      "periodEnd": "2025-10-05"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,398만원",
      "occurredDate": "2026-01-27",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-03-12",
      "nextCheckDate": "2027-01-08",
      "specialNote": ""
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.",
      "author": "이수민",
      "date": "2026-08-16"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-07-17"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
      "calcDate": "2025-04-04",
      "estimatedAmount": "월 9,313만"
    },
    "revenueAchievement": {
      "ratio": 76,
      "actualAmount": "4,539만",
      "targetAmount": "5,972만",
      "trend": [
        69,
        67,
        66,
        67,
        74,
        76
      ],
      "periodStart": "2025-03-19",
      "periodEnd": "2026-01-09"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "187만원",
      "occurredDate": "2026-07-23",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-08-01",
      "nextCheckDate": "2026-12-30",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2024-12-25"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 47,
      "actualAmount": "7,760만",
      "targetAmount": "1.65억",
      "trend": [
        32,
        37,
        38,
        37,
        40,
        47
      ],
      "periodStart": "2025-04-07",
      "periodEnd": "2026-02-04"
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
      "result": "부적합",
      "lastCheckDate": "2025-10-31",
      "nextCheckDate": "2027-02-21",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2025-11-14"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 72,
      "actualAmount": "1.15억",
      "targetAmount": "1.6억",
      "trend": [
        82,
        77,
        73,
        71,
        72,
        72
      ],
      "periodStart": "2025-01-31",
      "periodEnd": "2025-12-05"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,762만원",
      "occurredDate": "2026-07-30",
      "note": "로열티 분할 협의 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-04-16",
      "nextCheckDate": "2026-12-27",
      "specialNote": "조리대 정리정돈 미흡"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 49,
      "actualAmount": "783만",
      "targetAmount": "1,597만",
      "trend": [
        40,
        45,
        48,
        46,
        52,
        49
      ],
      "periodStart": "2025-05-02",
      "periodEnd": "2026-03-11"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,170만원",
      "occurredDate": "2026-04-01",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-19",
      "nextCheckDate": "2027-03-07",
      "specialNote": "유통기한 경과 식자재 발견, 즉시 폐기 조치"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-04-05"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 68,
      "actualAmount": "8,897만",
      "targetAmount": "1.31억",
      "trend": [
        63,
        66,
        71,
        66,
        71,
        68
      ],
      "periodStart": "2025-04-13",
      "periodEnd": "2026-02-23"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "임대차계약 갱신일 표기 오류",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": "최근 12개월 연체 없음"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2026-06-23",
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
    "id": "CAFE123",
    "name": "더카페 마곡점",
    "brand": "더카페",
    "code": "CAFE-123",
    "address": "-",
    "manager": "-",
    "territory": {
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2024-09-17"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "재검토필요",
      "calcDate": "2024-08-17",
      "estimatedAmount": "월 4,989만"
    },
    "revenueAchievement": {
      "ratio": 70,
      "actualAmount": "1.4억",
      "targetAmount": "2억",
      "trend": [
        63,
        60,
        62,
        69,
        70,
        70
      ],
      "periodStart": "2025-05-23",
      "periodEnd": "2026-01-18"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,398만원",
      "occurredDate": "2026-08-02",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-06-09",
      "nextCheckDate": "2026-11-01",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "ratio": 77,
      "actualAmount": "1,887만",
      "targetAmount": "2,451만",
      "trend": [
        79,
        82,
        81,
        84,
        81,
        77
      ],
      "periodStart": "2025-02-26",
      "periodEnd": "2025-09-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "623만원",
      "occurredDate": "2026-05-07",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-06-19",
      "nextCheckDate": "2026-11-13",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "ratio": 77,
      "actualAmount": "9,526만",
      "targetAmount": "1.24억",
      "trend": [
        85,
        84,
        85,
        83,
        78,
        77
      ],
      "periodStart": "2025-08-28",
      "periodEnd": "2026-02-26"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,632만원",
      "occurredDate": "2026-01-04",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-06-24",
      "nextCheckDate": "2027-01-23",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.",
      "author": "박도현",
      "date": "2026-08-23"
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
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-06-14",
      "estimatedAmount": "월 1.2억"
    },
    "revenueAchievement": {
      "ratio": 67,
      "actualAmount": "6,760만",
      "targetAmount": "1.01억",
      "trend": [
        52,
        51,
        57,
        63,
        67,
        67
      ],
      "periodStart": "2025-09-28",
      "periodEnd": "2026-04-24"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "821만원",
      "occurredDate": "2026-08-22",
      "note": "월말 정산 일정 조정 중"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-11-05",
      "nextCheckDate": "2026-11-06",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "calcDate": "2024-10-28",
      "estimatedAmount": "월 1.28억"
    },
    "revenueAchievement": {
      "ratio": 40,
      "actualAmount": "4,347만",
      "targetAmount": "1.09억",
      "trend": [
        27,
        33,
        36,
        42,
        39,
        40
      ],
      "periodStart": "2025-10-20",
      "periodEnd": "2026-06-04"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "131만원",
      "occurredDate": "2026-06-14",
      "note": "가맹점주 사정으로 로열티 미입금 지속"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-01-23",
      "nextCheckDate": "2026-11-18",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
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
      "ratio": 37,
      "actualAmount": "6,180만",
      "targetAmount": "1.67억",
      "trend": [
        46,
        42,
        42,
        44,
        44,
        37
      ],
      "periodStart": "2025-02-04",
      "periodEnd": "2025-08-16"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "155만원",
      "occurredDate": "2025-12-13",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-08-02",
      "nextCheckDate": "2027-01-06",
      "specialNote": "방역 소독 미실시로 시정 요구"
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "자사유통입점",
      "noteText": "",
      "setDate": "2023-11-18"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2026-06-14",
      "estimatedAmount": "월 3,823만"
    },
    "revenueAchievement": {
      "ratio": 73,
      "actualAmount": "1.41억",
      "targetAmount": "1.93억",
      "trend": [
        62,
        65,
        65,
        64,
        65,
        73
      ],
      "periodStart": "2025-03-21",
      "periodEnd": "2025-11-20"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "137만원",
      "occurredDate": "2026-06-03",
      "note": "본사 정산 시스템 오류로 미입금 장기화"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-07-29",
      "nextCheckDate": "2026-12-09",
      "specialNote": "냉장 보관 온도 기록 미흡, 시정 안내함"
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
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
      "ratio": 78,
      "actualAmount": "1.22억",
      "targetAmount": "1.57억",
      "trend": [
        87,
        82,
        79,
        79,
        78,
        78
      ],
      "periodStart": "2024-12-24",
      "periodEnd": "2025-09-07"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "306만원",
      "occurredDate": "2026-02-20",
      "note": "카드사 정산 오류로 장기 미입금 발생"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2025-08-13",
      "nextCheckDate": "2027-01-10",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "calcDate": "2025-02-06",
      "estimatedAmount": "월 1.61억"
    },
    "revenueAchievement": {
      "ratio": 100,
      "actualAmount": "2.04억",
      "targetAmount": "2.04억",
      "trend": [
        86,
        85,
        86,
        91,
        98,
        100
      ],
      "periodStart": "2025-04-23",
      "periodEnd": "2026-02-16"
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
      "result": "부적합",
      "lastCheckDate": "2026-02-15",
      "nextCheckDate": "2027-01-05",
      "specialNote": "조리기구 위생관리 기준 미달로 재점검 필요"
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-09-19"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 57,
      "actualAmount": "1.17억",
      "targetAmount": "2.06억",
      "trend": [
        64,
        59,
        57,
        58,
        59,
        57
      ],
      "periodStart": "2025-05-23",
      "periodEnd": "2026-05-05"
    },
    "contractDefect": {
      "hasDefect": false,
      "detailType": "-",
      "detailText": "",
      "status": "해당없음"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "761만원",
      "occurredDate": "2026-08-15",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "적합",
      "lastCheckDate": "2025-12-09",
      "nextCheckDate": "2027-02-19",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
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
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2023-09-19"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "정합성확인됨",
      "calcDate": "2025-04-29",
      "estimatedAmount": "월 1.71억"
    },
    "revenueAchievement": {
      "ratio": 112,
      "actualAmount": "1.18억",
      "targetAmount": "1.05억",
      "trend": [
        116,
        113,
        112,
        114,
        109,
        112
      ],
      "periodStart": "2025-07-23",
      "periodEnd": "2026-03-19"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "321만원",
      "occurredDate": "2026-01-31",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-06-16",
      "nextCheckDate": "2026-12-19",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 중복 있음",
      "noteText": "",
      "setDate": "2026-01-16"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "재검토필요",
      "calcDate": "2026-02-07",
      "estimatedAmount": "월 780만"
    },
    "revenueAchievement": {
      "ratio": 84,
      "actualAmount": "1.51억",
      "targetAmount": "1.8억",
      "trend": [
        98,
        95,
        93,
        86,
        84,
        84
      ],
      "periodStart": "2025-06-04",
      "periodEnd": "2026-05-15"
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
      "result": "시정요구",
      "lastCheckDate": "2025-11-29",
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
    "id": "TERU005",
    "name": "테루 NC 수원터미널점(가맹)",
    "brand": "테루",
    "code": "TERU-005",
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
      "calcDate": "2024-07-23",
      "estimatedAmount": "월 7,877만"
    },
    "revenueAchievement": {
      "ratio": 121,
      "actualAmount": "2.01억",
      "targetAmount": "1.66억",
      "trend": [
        132,
        126,
        129,
        129,
        121,
        121
      ],
      "periodStart": "2025-02-24",
      "periodEnd": "2025-08-25"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "292만원",
      "occurredDate": "2026-08-01",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2025-10-13",
      "nextCheckDate": "2026-12-10",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "전대차",
      "noteText": "",
      "setDate": "2025-10-27"
    },
    "revenueMethod": {
      "method": "예외산정(의사결정o)",
      "status": "재검토필요",
      "calcDate": "2025-09-16",
      "estimatedAmount": "월 1,779만"
    },
    "revenueAchievement": {
      "ratio": 119,
      "actualAmount": "5,315만",
      "targetAmount": "4,466만",
      "trend": [
        112,
        116,
        119,
        117,
        118,
        119
      ],
      "periodStart": "2025-02-11",
      "periodEnd": "2025-08-20"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "717만원",
      "occurredDate": "2026-08-05",
      "note": "카드 매출 정산 지연으로 인한 일시 미입금"
    },
    "hygiene": {
      "result": "시정요구",
      "lastCheckDate": "2026-03-25",
      "nextCheckDate": "2026-10-30",
      "specialNote": "조리대 정리정돈 미흡"
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
      "ratio": 48,
      "actualAmount": "4,851만",
      "targetAmount": "1.01억",
      "trend": [
        52,
        47,
        43,
        46,
        49,
        48
      ],
      "periodStart": "2024-10-03",
      "periodEnd": "2025-04-29"
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
      "result": "시정요구",
      "lastCheckDate": "2025-10-21",
      "nextCheckDate": "2026-09-26",
      "specialNote": "위생모 미착용 적발, 현장 시정 완료"
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
      "ratio": 45,
      "actualAmount": "9,881만",
      "targetAmount": "2.2억",
      "trend": [
        52,
        50,
        52,
        54,
        53,
        45
      ],
      "periodStart": "2024-08-08",
      "periodEnd": "2025-06-14"
    },
    "contractDefect": {
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "보증금 조항 불일치",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": true,
      "amount": "1,653만원",
      "occurredDate": "2026-07-10",
      "note": "2개월 이상 연체, 내용증명 발송 완료"
    },
    "hygiene": {
      "result": "부적합",
      "lastCheckDate": "2026-03-20",
      "nextCheckDate": "2026-10-17",
      "specialNote": "식품위생법 위반사항 적발, 시정명령 발부"
    },
    "etc": {
      "memo": "종합 위험도 최고 수준, 본사 긴급 개입 필요.",
      "author": "박도현",
      "date": "2026-08-13"
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
      "status": "분쟁중",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-11-16"
    },
    "revenueMethod": {
      "method": "-",
      "status": "미산정",
      "calcDate": "-",
      "estimatedAmount": "-"
    },
    "revenueAchievement": {
      "ratio": 68,
      "actualAmount": "2,952만",
      "targetAmount": "4,341만",
      "trend": [
        74,
        74,
        69,
        65,
        64,
        68
      ],
      "periodStart": "2024-10-10",
      "periodEnd": "2025-05-06"
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
      "result": "점검예정",
      "lastCheckDate": "2026-07-09",
      "nextCheckDate": "2026-11-27",
      "specialNote": ""
    },
    "etc": {
      "memo": "",
      "author": "-",
      "date": "-"
    }
  }
];
