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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.\n\n---\n[특이사항] *계약 일체 서류 없음",
      "author": "정하은",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "속초 이마트내",
      "noteType": "전대차",
      "noteText": "속초 이마트내",
      "setDate": "2025-06-15"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.\n\n---\n[계약체결단계/하자유무] 숙고기간 위반\n[특이사항] *위반 시정 요구 사실 있음\n\n*전대차계약 \n\n*영업 이행서 있음 - 목표매출 강제 행위에 해당되어 법위반\n\n*임박 요청서 있음 (10.09.10.) - 실질과 다르다면 법위반\n[계약체결일] *최초 계약일 :\n10.09.10.\n\n사후품의건 (0916)\n\n*재계약일:\n14.12.24.\n[영업지역 설정 사항] 속초 이마트내",
      "author": "박도현",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "부천 뉴코아내",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.\n\n---\n[계약체결단계/하자유무] 숙고기간 위반\n[계약체결일] 14.09.24.\n[가맹계약서상 점주] 전용재\n[영업지역 설정 사항] 부천 뉴코아내\n[예상매출액 산정방식] 영업시간 (12)\n유동인구 (-) 내점율 (-) 실구매율 (-) 객단가 (2900) 365",
      "author": "정하은",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] *정 : 15.05.08.\n*임: \n14.06.17.\n*임 재계약일: 15.05.08.\n*양수도 계약일\n(정-유):\n15.10.01.\n\n*유 계약일:\n15.10.20.\n[가맹계약서상 점주] 박명화 \n임지혜\n정이동\n유형실\n[영업지역 설정 사항] 점포중심 반경 500미터 원",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "scopeType": "직접입력",
      "scopeText": "유통점 내 (특수상권)",
      "noteType": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 이슈없음\n[특이사항] *점포 환경 개선 진행 사실 및 \n비용 지원 확인서 (20% ) 있음\n(15.08.06.)\n\n*영업 이행서 있음 - 목표매출강제 행위 법위반\n\n* 오픈 임박 요청서 있음(10.06.22) - 실질과 다르다면 법위반\n\n*가맹금 직입금 법위반\n[계약체결일] *최초 계약일 :\n10.06.22.\n\n*재계약일 : 15.02.27.\n[가맹계약서상 점주] 홍한나\n[영업지역 설정 사항] 유통점 내 (특수상권)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "특수상권 동아백화점 수성점 내\n\n동아백화점 수성점 7층 내 (박)",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] * 송현민 예상매출액 산정서 표지 있음(18.02.07.)\n[계약체결일] 15.01.16. (김), 구 판매점 계약서에 체결일만 미기재한 건 하나 있음\n\n18.02.07. (송)\n\n22.03.25. ( 박)\n[가맹계약서상 점주] 이정아\n김다래 (14.03.26. 양수도 내용증명)\n송현민(18.02.06. 양수도)\n박정미(22.04.01. 기준 가맹계약 인수 합의서 있음)\n[영업지역 설정 사항] 특수상권 동아백화점 수성점 내\n\n동아백화점 수성점 7층 내 (박)\n[예상매출액 산정방식] 양수도 매장\n1년 pos매출",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 18.11.20.\n[가맹계약서상 점주] 박성규\n[영업지역 설정 사항] 구획으로 표시\n[예상매출액 산정방식] 영업시간 (15) * \n유동인구 (57561)* 내점율 (1.3%) * 실구매율 (30%) * 객단가 (3000) * 365",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 일체 서류 없음\n[특이사항] *인테리어 견적서 있음 - 당사 거래 강제인지 여부 확인 필요",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2024-07-03"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 15.01.19.\n[가맹계약서상 점주] 채혜진\n[영업지역 설정 사항] 점포중심 반경 500미터 원\n[예상매출액 산정방식] *유사매장4개포스매출\n *입지여건가중치(0.90)*경쟁강도 가중치(1.05)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정상설정",
      "scopeType": "반경지정",
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
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] 밀알재단과 특수한 계약으로 확인됨\n[계약체결일] *재계약이라고 기재되어 있고, 별도의 관련 서류는 없음\n\n일자: 15.07.01.\n[가맹계약서상 점주] 이종면\n[영업지역 설정 사항] 점포중심 반경 500미터 원",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "noteType": "-",
      "noteText": "",
      "setDate": "2026-02-05"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.\n\n---\n[계약체결단계/하자유무] 숙고기간 위반\n[계약체결일] 16.03.11.\n[가맹계약서상 점주] 문행수\n[영업지역 설정 사항] 점포 중심 반경 500 미터 원\n[예상매출액 산정방식] 영업시간 (9) * \n내점율 (0.25) * 유동인구 (757)*실구매율 (0.75) * 객단가 (2900) *30",
      "author": "이수민",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "가맹 계약서 일부 누락으로 계약 체결 일자 및 영업 지역 설정 사항 확인 안됨",
      "noteType": "-",
      "noteText": "",
      "setDate": "2024-10-16"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.\n\n---\n[특이사항] *계약 체결일자 확인 불가\n[가맹계약서상 점주] 김귀옥\n[영업지역 설정 사항] 가맹 계약서 일부 누락으로 계약 체결 일자 및 영업 지역 설정 사항 확인 안됨\n[예상매출액 산정방식] 양수도 매장\n1년 pos매출",
      "author": "이수민",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *계약 일체 서류 없음",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "홈플러스 춘천점 내",
      "noteType": "-",
      "noteText": "",
      "setDate": "2025-10-24"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 14.11.11.\n\n계약서 없음(첫장 끝장만 있음)\n[가맹계약서상 점주] 이은하\n[영업지역 설정 사항] 홈플러스 춘천점 내\n[예상매출액 산정방식] *영업시간(12) *\n유동인구(5000)* 내점율(2%)*\n실구매율(1.0)*객단가(2700)*365",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2024-11-08"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *계약 일부 내용 유실\n[계약체결일] 14.09.30.\n(김지희)\n16.12.27. \n(김지숙)\n[가맹계약서상 점주] 김지원\n김지희\n김지숙\n(셋다자매)\n[영업지역 설정 사항] 점포중심 반경 500미터 원\n[예상매출액 산정방식] 양수도 매장\n1년 pos매출",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "scopeType": "직접입력",
      "scopeText": "아울렛 내 (특수상권)",
      "noteType": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *영업 이행서 있음 - 목표매출 강제 행위로 법위반\n\n*오픈 임박 요청서 있음 (10.12.28.) - 실질과 다르다면 법위반\n[계약체결일] *최초 계약일 : 10.12.28.(이성애 계약)\n\n(품의 11.01.03. 으로 사후 품의 건 )\n\n*재계약일:\n15.01.22.\n[가맹계약서상 점주] 이성애\n[영업지역 설정 사항] 아울렛 내 (특수상권)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "특수상권 이마트 대전 복합 터미널 내",
      "noteType": "전대차",
      "noteText": "특수상권 이마트 대전 복합 터미널 내",
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
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 숙고기간 위반\n[특이사항] *전대차 계약\n[계약체결일] 11.12.12.(이)\n재계약 : 15.02.27.(이)\n[가맹계약서상 점주] 이혜경\n(양도양수 요청 공문 발송 일자 18.03.07.)\n\n윤인영 ( 계약서만 있고 계약서 제일 뒷장도 없어서 체결일도 확인 불가)\n[영업지역 설정 사항] 특수상권 이마트 대전 복합 터미널 내",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "특수상권 (유통점 내)",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *계약 일부 내용 유실\n[계약체결일] *재계약일 :\n15.02.10. (남)\n[가맹계약서상 점주] 남현모\n[영업지역 설정 사항] 특수상권 (유통점 내)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "noteType": "-",
      "noteText": "",
      "setDate": "2026-03-10"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[계약체결일] 계약서상 체결일자 누락\n[가맹계약서상 점주] 김용현\n[영업지역 설정 사항] 점포중심 반경 500 미터 원\n[예상매출액 산정방식] 1일 유동인구 (24496) * 내점율 (0.5%) * 실구매율 (100%) * 객단가 (4400) * 365",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2025-04-30"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 15.07.31.\n*계약서 일부만 (띄엄띄엄) 있음\n[가맹계약서상 점주] 전주원\n[영업지역 설정 사항] 점포중심 반경 500미터 원\n[예상매출액 산정방식] *영업시간(14) *\n유동인구(17439)* 내점율(1%)*\n실구매율(0.6)*객단가(3000)*365",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "부평 2001 아울렛 내 (특수상권)",
      "noteType": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[계약체결일] *재계약이라고 기재되어 있고, 별도의 관련 서류는 없음\n\n일자: 14.12.30.\n[가맹계약서상 점주] 유순희\n[영업지역 설정 사항] 부평 2001 아울렛 내 (특수상권)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "홍성 터미널 내 (특수상권)",
      "noteType": "-",
      "noteText": "",
      "setDate": "2024-08-20"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *영업 이행서 있음 - 목표매출 강제 행위 법위반\n*오픈 임박 요청서 있음 (11.08.11.) - 실질과 다르다면 법위반\n[계약체결일] *최초계약일:\n계약서상 미기재\n\n*재계약일:\n15.02.26.\n[가맹계약서상 점주] 정예숙\n[영업지역 설정 사항] 홍성 터미널 내 (특수상권)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "동아쇼핑 대구 5층 내",
      "noteType": "-",
      "noteText": "",
      "setDate": "2025-02-11"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 숙고기간 위반\n[특이사항] *가맹 계약 인수\n합의서, 22.04.01. 효력발생일\n\n*영업 양수도 계약서, 22.04.01.\n[계약체결일] 22.03.25. (김), \n계약서 표지 기재\n[가맹계약서상 점주] 서정희\n김영채(22.02.25. 양수도희망 내용증명 )\n[영업지역 설정 사항] 동아쇼핑 대구 5층 내\n[예상매출액 산정방식] 양수도 매장\n1년 pos매출",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "이마트 동해점 내",
      "noteType": "전대차",
      "noteText": "이마트 동해점 내",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *전대차 계약\n[계약체결일] 14.05.16.\n (구, 가맹법 개정으로 추가 작성해야 함을 명시 )\n\n*15.03.13.(구)\n\n*유부자 가맹 계약 체결일은 없음(16.02.18. 이라고 계약 품의서에만 기록)\n[가맹계약서상 점주] 김진견\n구지애(14.05.21. 양수)\n유부자(16.02.15. 양수, 양도양수계약서 작성)\n[영업지역 설정 사항] 이마트 동해점 내",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "4층 지도, 4층",
      "noteType": "영업지역 침해 있음",
      "noteText": "4층 지도, 4층",
      "setDate": "2024-08-20"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *장혜숙VIP 점 점주 오픈 동의서 있음 (해당 점주가 송파 4층관 동의)20.03.26. - 영업지역 침해 법위반\n\n* 직영 -> 가맹 전환 건\n[계약체결일] 20.03.26.\n[가맹계약서상 점주] 박춘봉\n[영업지역 설정 사항] 4층 지도, 4층\n[예상매출액 산정방식] 양수도 매장\n1년 pos매출",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "아울렛 내 (특수상권)",
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
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "전 항목 위험 상태로 즉시 현장 점검 및 계약 해지 검토 대상.\n\n---\n[계약체결단계/하자유무] 숙고기간 위반\n[특이사항] *영업 이행서 있음 - 목표매출 강제행위 법위반\n\n*오픈 임박 요청서 있음 (11.09.07.) - 실질과 다르다면 법위반\n[계약체결일] *최초 계약일:\n11.09.07.\n\n*재계약일 :15.01.16.\n[가맹계약서상 점주] 김성애\n[영업지역 설정 사항] 아울렛 내 (특수상권)",
      "author": "정하은",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "특수상권 평촌 뉴코아 내",
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
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *계약시 가맹금 및 이행 보증금 입금 완료 표기 (예치 완료인지 확인 필요-직입금이라면 법위반)\n\n*계약 이후 매출등에 대해 어떤 이의도 제기하지 않겠다는 특약 내용 있으나 무효\n\n*인테리어 진행 건 있음 (2018)-당사 제안 및 비용 미부담건이라면 법위반\n[계약체결일] *최초 계약:\n주식회사 이엘인터내셔날\n\n04.11.01.\n[가맹계약서상 점주] 성유미\n[영업지역 설정 사항] 특수상권 평촌 뉴코아 내",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "특수상권 내",
      "noteType": "전대차",
      "noteText": "특수상권 내",
      "setDate": "2024-08-28"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *전대차 계약\n[계약체결일] *최초계약일:\n13.10.23.\n\n*재계약일:\n15.03.12.\n[가맹계약서상 점주] 원신영\n[영업지역 설정 사항] 특수상권 내",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.\n\n---\n[계약체결일] 21.04.12.  (계약서 표지에 기재)\n[가맹계약서상 점주] 최복남\n[영업지역 설정 사항] 점포 중심 반경 500미터 원\n[예상매출액 산정방식] 유사 4개 매장 1년간 POS 매출 평균액의 70%",
      "author": "박도현",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2025-12-30"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *지속적인 사입 물품 사용 및 미개선으로 인한 자재 공급 중단 공문 등 있음 , 사입금지 합의서 있음\n[계약체결일] 17.09.05. (윤진희)\n[가맹계약서상 점주] 이희경 (폐업, 17.09.17. )\n윤진희 (양수도 계약일 : 미기재)\n[영업지역 설정 사항] 반경 500미터 원",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2024-10-22"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 20.09.28.\n[가맹계약서상 점주] 최수희\n[영업지역 설정 사항] 지도에 구획으로 표시, A/B/C/ 상권 구획으로 표시\n[예상매출액 산정방식] 영업시간 (12) * 1일 유동인구 (48213) * 내점율 (0.5%) * 실구매율 (100%) * 객단가 (3200) * 264일",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "hasDefect": true,
      "detailType": "숙고기간 위반",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정합성확인됨",
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
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "야탑 엔씨 유통점 내",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "매출 부진 및 계약 관리 항목 다수 위험 상태. 현장 점검 필요.\n\n---\n[계약체결일] 17.05.12.\n[가맹계약서상 점주] 이윤\n[영업지역 설정 사항] 야탑 엔씨 유통점 내\n[예상매출액 산정방식] *델라보 야탑 엔씨점\n월평균 매출액",
      "author": "박도현",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "안양 2001 아울렛 내 (특수상권)",
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
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *일시불로 비용 지급한다고 되어 있어 예치한 것인지 확인 필요\n\n\n*계약 이후 매출등에 대해 어떤 이의도 제기하지 않겠다는 특약 있으나 무효\n[계약체결일] *최초 계약 :\n 05.06.20.\n\n*재계약 : 15.01.22.\n[가맹계약서상 점주] 김현주\n[영업지역 설정 사항] 안양 2001 아울렛 내 (특수상권)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "동수원 뉴코아 8층 내",
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
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.\n\n---\n[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *1층 입점 매장에 대한 오픈 동의서 있음 \n(17.09.26.)\n\n*계약시 가맹금 및 이행 보증금 입금 완료 표기 (예치 완료인지 확인 필요 - 직입금이라면 법위반)\n\n*계약 이후 매출등에 대해 어떤 이의도 제기하지 않겠다는 특약 있으나 무효\n[계약체결일] *최초계약일: 07.04.05.\n\n*재계약일:\n15.01.22.\n[가맹계약서상 점주] 노주헌\n[영업지역 설정 사항] 동수원 뉴코아 8층 내",
      "author": "정하은",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "평촌 뉴코아내 (특수상권)",
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
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "종합 위험도 최고 수준, 본사 긴급 개입 필요.\n\n---\n[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *매출 등 이행서 있음 - 목표매출강제행위로 법위반\n\n*계약시 가맹금 및 예수 보증금 입금 - 직입금이라면 법위반\n[계약체결일] *백승운 최초 계약일:07.01.03.\n\n*양수도 계약서 작성일: 10.06.01.\n\n*조복희 최초 계약일 : 10.06.01.\n\n*조복희 재계약일 : 14.01.13.\n[가맹계약서상 점주] 조복희\n[영업지역 설정 사항] 평촌 뉴코아내 (특수상권)",
      "author": "정하은",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "scopeType": "직접입력",
      "scopeText": "엑스코 엔씨 내",
      "noteType": "-",
      "noteText": "",
      "setDate": "2023-06-27"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] *최초계약일:\n12.08.10.\n\n*재계약일:\n15.01.15.\n[가맹계약서상 점주] 최숙원\n[영업지역 설정 사항] 엑스코 엔씨 내",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] 사전서류 제공내역 없음",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2023-09-21"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] *최초계약일:\n13.08.21.\n\n*재계약일:\n15.01.30.\n[가맹계약서상 점주] 변연주\n[영업지역 설정 사항] 점포 중심 반경 500미터 원",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *가격인상건 관련내용 동의서 있음(상세 내용 확인은 어려움)-가격통제인지 여부 확인 필요함\n[계약체결일] *최초계약일:\n14.01.10.\n__구버전 계약서 유지중\n[가맹계약서상 점주] 신영희",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *전대차 계약\n[계약체결일] *최초계약일:\n14.07.18.\n____구버전 계약서 유지중\n[가맹계약서상 점주] 신경미\n[예상매출액 산정방식] *유사매장4개포스매출\n *입지여건가중치(0.90)*경쟁강도 가중치(0.90)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 숙고기간 위반\n[계약체결일] 15.04.14.\n계약서 없음(첫장 끝장만 있음\n[가맹계약서상 점주] 조지현\n[예상매출액 산정방식] *주변 상권 관련 사항 \n이마트 내라고만 되어 있고 누락\n*영업시간(12) *\n유동인구(2800)* 내점율(5%)*\n실구매율(1.0)*객단가(2700)*341",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "이마트 광산점 (특수상권)",
      "noteType": "전대차",
      "noteText": "이마트 광산점 (특수상권)",
      "setDate": "2025-03-31"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *전대차 계약 \n*계약서 전체 유실\n[계약체결일] 16.02.16.\n[가맹계약서상 점주] (이지혜)\n곽애란\n[영업지역 설정 사항] 이마트 광산점 (특수상권)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "noteType": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] *양수도\n계약일:\n15.08.26.\n(부부 명의 변경)\n\n*15.03.04.\n*계약일 :15.08.26.\n[가맹계약서상 점주] 김이선\n강준원\n[영업지역 설정 사항] 점포중심 반경 500미터 원",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "noteType": "-",
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
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *오픈 임박\n요청서 있음(심, 11.05.06. - 실제와 상이하다면 법위반\n[계약체결일] *11.05.06. (심)\n\n*14.04.11.\n(김) \n\n*16.03.08. (심2)\n[가맹계약서상 점주] 심정영\n김윤태(14.04.11. 양수)\n심정영(16.03.08. )\n[영업지역 설정 사항] 점포 중심 반경 500 미터 원",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.\n\n---\n[계약체결일] 17.03.23.\n[가맹계약서상 점주] 한신교회",
      "author": "박도현",
      "date": "2026-09-08"
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
      "noteType": "-",
      "noteText": "",
      "setDate": "2023-01-30"
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
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *리뉴얼 예상 견적서 있음 - 당사가 요구한 것인지 여부와 실제 진행 여부에 따라 법위반 소지 있음\n[계약체결일] 14.03.19. (맹)\n15.05.06.(박)\n[가맹계약서상 점주] 우희정(14.03.03. 양수도 요청 )\n맹화순(양수도 계약 체결일 : 14.03.10.)\n박현\n유승경(양수도 계약 체결일 17.04.14.)\n[영업지역 설정 사항] 점포중심 반경 500미터 원",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *인테리어 견적서 있음 - 당사 거래 강제인지 여부 확인 필요 \n*관리비 조정요청 내용증명 있음 - 임대차 계약관계 개입 여부 확인 필요\n[가맹계약서상 점주] 강소영",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "이마트 내 위치 (특수상권)",
      "noteType": "전대차",
      "noteText": "이마트 내 위치 (특수상권)",
      "setDate": "2024-02-10"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *전대차 계약\n*계약 일부 내용 유실\n[계약체결일] 17.07.26.\n[가맹계약서상 점주] 김정희\n이지현 (양수일 : 17.08.18.)\n[영업지역 설정 사항] 이마트 내 위치 (특수상권)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "위험 항목 다수 발생, 본사 관리팀 개입 검토 중.\n\n---\n[특이사항] *계약 일부 내용 유실\n[계약체결일] 17.11.03.\n[가맹계약서상 점주] 황혜경\n[영업지역 설정 사항] 지도에 구획으로 표시 \n(계약서는 확인 안되고 예상 매출액 산정서에만 있음)\n[예상매출액 산정방식] 영업시간 (15) \n유동인구 (11099) 내점율 (10프로) 실구매율 (10.7 프러) 객단가 (3000) 30일",
      "author": "정하은",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "마트내 위치 (특수상권)",
      "noteType": "전대차",
      "noteText": "마트내 위치 (특수상권)",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *전대차 계약\n*계약 일부 내용 유실\n[계약체결일] 13.04.15. (김)\n17.08.14. (선)\n[가맹계약서상 점주] 김학규\n김선자 (17.07.28.)\n[영업지역 설정 사항] 마트내 위치 (특수상권)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "특수상권 아울렛 내 (소)",
      "noteType": "-",
      "noteText": "",
      "setDate": "2022-11-13"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 숙고기간 위반\n[계약체결일] 07.12.31. (황)\n08.11.24. (이)\n13.06.11. (소) 최초\n15.01.16. (소) 재계약\n[가맹계약서상 점주] 최주환\n황정윤 (07.12.31. 양수도)\n이승희\n소원철\n[영업지역 설정 사항] 특수상권 아울렛 내 (소)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "서수원 하나로마트 내",
      "noteType": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 12.05.04.(원)\n15.01.21. (원), 재계약\n17.11.21. (이)\n[가맹계약서상 점주] 서금이\n원미진(12.04.26. 양수도 계약서 체결 )\n이보현\n[영업지역 설정 사항] 서수원 하나로마트 내",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2024-12-23"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 19.06.10.\n[가맹계약서상 점주] 김성도\n[영업지역 설정 사항] 점포중심 반경 500미터 원\n[예상매출액 산정방식] 8~22 까지의 유동인구 (15877) * 내점율 (1.5%) * 실구매율 (40%) * (객단가 3000) * 365",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "계약서상 확인 안됨 \n(초기 점주와의 계약서에 있는 것 같은데 초기 점주 계약 서류 확인 불가 )",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "전 항목 위험 상태로 즉시 현장 점검 및 계약 해지 검토 대상.\n\n---\n[특이사항] *인테리어 견적서 있음 - 당사 강제인지 여부 확인필요\n[계약체결일] 19.01.02. (이)\n[가맹계약서상 점주] 전주원\n이은영(포괄 양도 양수 계약서, 양수도 계약서 18.12.12.)\n[영업지역 설정 사항] 계약서상 확인 안됨 \n(초기 점주와의 계약서에 있는 것 같은데 초기 점주 계약 서류 확인 불가 )",
      "author": "정하은",
      "date": "2026-09-08"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 19.08.07.\n[가맹계약서상 점주] 정수란\n[영업지역 설정 사항] 지도에 구획으로 표시\n[예상매출액 산정방식] 영업시간 (8) * 유동인구 (5367) \n내점율 (1.3%) 객단가 (3600) 365일",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "계약서에 지도 들어있으나 첨부된 지도로는 육안상 확인이 어려움",
      "noteType": "-",
      "noteText": "",
      "setDate": "2026-01-31"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 19.09.17.\n[가맹계약서상 점주] 이명섭\n[영업지역 설정 사항] 계약서에 지도 들어있으나 첨부된 지도로는 육안상 확인이 어려움\n[예상매출액 산정방식] 유동인구 (14282) \n내점율 (1.3%)\n판매율 (85%) \n객단가 (3400) 365일",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "첨부 지도 있으나 식별이\n어려움",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 20.01.17.\n[가맹계약서상 점주] 박순희\n[영업지역 설정 사항] 첨부 지도 있으나 식별이\n어려움\n[예상매출액 산정방식] 유동인구 (21124) * \n내점율 (1.5%) \n구매율 (80%) 객단가 (3200) 판매율 (85%) 264일",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "계약서상 영업지역 설정 내용 확인 안됨",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 19.08.05.\n[가맹계약서상 점주] 김미진\n[영업지역 설정 사항] 계약서상 영업지역 설정 내용 확인 안됨\n[예상매출액 산정방식] 영업시간 (12)동안의 유동인구 (15877) * 내점율 (1.5%) * 실구매율 (40%) 객단가 (3000) * 365",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "롯데마트 영종도점 내",
      "noteType": "-",
      "noteText": "",
      "setDate": "2025-05-01"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *사입 규제 공문 있음\n[계약체결일] 20.05.14.\n[가맹계약서상 점주] 남순덕\n[영업지역 설정 사항] 롯데마트 영종도점 내\n[예상매출액 산정방식] 유사 5개 점포 pos 1년간 매출",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "엔터식스 안양역점 내",
      "noteType": "-",
      "noteText": "",
      "setDate": "2022-12-23"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 20.11.20. (계약서 표지 기재)\n[가맹계약서상 점주] 박아란\n[영업지역 설정 사항] 엔터식스 안양역점 내\n[예상매출액 산정방식] 영업시간 (12) * \n1일 유동인구 (31210 ) * 내점율 (0.7% ) * 실구매율 (100%) * 객단가 (4400) * 365",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 20.08.06.\n[가맹계약서상 점주] 허정화\n[영업지역 설정 사항] 점포중심 반경 500미터 원\n[예상매출액 산정방식] 시간당 유동인구 (18529) *\n내점율 (1.3% ) *실구매율 (65%) * 객단가 (3400) * 365일",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "직접입력",
      "scopeText": "특수상권 유통점 내",
      "noteType": "영업지역 침해 있음",
      "noteText": "특수상권 유통점 내",
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
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *불광 7층\n 오픈 동의서 (20.02.26) - 영업지역 침해 법위반 \n*영업이행서 있음 - 판매목표 강제 법위반\n*불광 7층 최용수 2007년 계약서 있음\n[계약체결일] *최초 계약일 08.03. 01.\n*재계약일 15.03.03\n[가맹계약서상 점주] 김복자\n*명의변경 신청서 있음\n[영업지역 설정 사항] 특수상권 유통점 내",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeText": "특수상권 유통점 내 입점 뉴코아 강남점 2관 3층 전체",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "연속 위험 신호 확인됨, 우선 관리 대상 지정.\n\n---\n[계약체결단계/하자유무] 숙고기간 위반\n[특이사항] *직영 -> 가맹 전환건,양수도 계약서 20.10.23. 체결\n[계약체결일] 계약서상 체결일자 누락\n[가맹계약서상 점주] 이연수\n[영업지역 설정 사항] 특수상권 유통점 내 입점 뉴코아 강남점 2관 3층 전체\n[예상매출액 산정방식] 양수도 매장\n1년 pos매출",
      "author": "이수민",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 숙고기간 위반\n[특이사항] *수익과\n 운영 방식에의 마찰로 인한 스트레스로 명의변경 신청 (이종한)\n\n*이포인트 마일리지 합의서 있음 (권, 16.04.01. )\n[가맹계약서상 점주] 이종한\n권광우\n김지예\n* 파일상 최종 점주 김지예이나 관련 일체 서류 없음\n[예상매출액 산정방식] 영업시간 (14) * \n1일 유동인구 (33719) * 내점율 (1%) * 실구매율 (90%) * 객단가 (3500) * 365\n\n* 예상 매출액 산정 근거 있으나 누구한테 언제 준건지 일체 서류 없음 위의 수식 작성된 낱장만 있음",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "status": "분쟁중",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "영업지역 침해 있음",
      "noteText": "",
      "setDate": "2025-03-17"
    },
    "revenueMethod": {
      "method": "인근가맹점 5곳",
      "status": "정합성확인됨",
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
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "확인불가 (계약서에 지도 없음)",
      "noteType": "-",
      "noteText": "",
      "setDate": "2025-07-22"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 숙고기간 위반\n[특이사항] *계약 체결일자 확인 불가\n[계약체결일] 계약서에 \n가맹계약 체결일이 없음\n[가맹계약서상 점주] 박소현\n[영업지역 설정 사항] 확인불가 (계약서에 지도 없음)\n[예상매출액 산정방식] 유사 가맹점  평균 매출액 (158434000) \n입지여건 가중치 (10%) 경쟁강도 가중치 (-5%)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "status": "정상설정",
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2025-04-14"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *계약 일부 내용 유실\n[계약체결일] 16.01.29.\n17.-09.14. (양수도 계약일), 가맹 계약 체결일\n[가맹계약서상 점주] 지명훈\n황지원\n[영업지역 설정 사항] 지도에 구획 표시\n[예상매출액 산정방식] *영업시간 (14) \n유동인구 (-) 내점율 (1프로) 실구매율 (90프로) 객단가 (3200) 264",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2025-11-06"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *오픈 임박 요청서 있음 (11.03.31.)-실질과 다르다면 법위반\n\n*영업 이행서 있음-목표매출강제행위 법위반\n[계약체결일] *최초계약일: 11.03.31\n.\n\n*재계약일 :15.01.22.\n[가맹계약서상 점주] 문민욱\n[영업지역 설정 사항] 반경 500미터 원",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정합성확인됨",
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
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "noteType": "-",
      "noteText": "",
      "setDate": "2024-12-28"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *계약 일부 내용 유실\n[계약체결일] 16.04.11.\n[가맹계약서상 점주] 정주희\n[영업지역 설정 사항] 점포중심 반경 500미터 원\n[예상매출액 산정방식] *예상 매출액 산정 \n근거 자료 있음 (일부 미일치 )\n* 영업시간 (14) * 유동인구 () * 내점율 (0.01) * 실구매율 (0.9) * 객단가 (3200) * 264",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "scopeType": "직접입력",
      "scopeText": "특수상권 입점",
      "noteType": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] *최초 계약일:\n13.08.28.\n\n*재계약일:\n15.02.05.\n[가맹계약서상 점주] 이월드 조만호\n[영업지역 설정 사항] 특수상권 입점",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "반경지정",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *권리 양도 계약서 있음\n[계약체결일] 16.10.04.\n[가맹계약서상 점주] 유선애\n허미숙\n[영업지역 설정 사항] 점포 중심 반경 500미터 원",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *인테리어 견적서 있음 - 당사 강제인지 여부 확인필요\n[계약체결일] 17.03.03.(석)\n18.05.04. (김)\n[가맹계약서상 점주] 석정수\n김금옥\n[영업지역 설정 사항] 점포중심 반경 500미터 원(예상매출액 산정서에만 기재되어 있고 계약서에는 미기재\n[예상매출액 산정방식] 영업시간 (12) \n유동인구 (5876) 내점율 (1.5%) 실구매율 (85%) 객단가 (3200) 90일",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "noteType": "-",
      "noteText": "",
      "setDate": "2026-03-16"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *무상지원 합의서있음\n*마일리지 제도 합의서 있음\n[계약체결일] 16.12.16.\n[가맹계약서상 점주] 한운희\n[영업지역 설정 사항] 점포중신 반경 500미터 원\n기재되어 있으나 일부 잘린 원으로 구획 표기되어 있음\n[예상매출액 산정방식] 영업시간 (15) *유동인구 \n(49662) * 내점율 (25%) * 실구매율 (2.4%) * 객단가 (3000) * 22일",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "구획지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 숙고기간 위반\n[계약체결일] 계약 체결일자 누락\n[가맹계약서상 점주] 김은규\n[영업지역 설정 사항] 지도에 구획으로 표시\n[예상매출액 산정방식] *영업시간 내 유동인구 (27918) * \n내점율 (0.6% ) * 실구매율 (95%) * 객단가 (3070) * 365일",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "status": "처리중"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "detailText": "위약금 조항 누락",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "scopeType": "직접입력",
      "scopeText": "유통점 내 (특수상권)",
      "noteType": "영업지역 침해 있음",
      "noteText": "유통점 내 (특수상권)",
      "setDate": "2023-04-05"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *7층 매장 오픈\n동의서 있음(20.03.03.) - 법위반(영업지역 침해)\n[계약체결일] *최초계약일:\n계약서 없음\n\n*재계약일:\n15.02.11.\n[가맹계약서상 점주] 정선희\n[영업지역 설정 사항] 유통점 내 (특수상권)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
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
      "hasDefect": true,
      "detailType": "서류 미교부",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결단계/하자유무] 사전 서류 제공내역 없음\n[특이사항] *공사 실시 견적서 있음 - 당사 거래 강제인지 여부 확인 필요",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
      "status": "정상설정",
      "scopeType": "직접입력",
      "scopeText": "특수상권 덕천 뉴코아내",
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
      "hasDefect": true,
      "detailType": "기타",
      "detailText": "",
      "status": "미해결"
    },
    "unpaidStatus": {
      "hasUnpaid": false,
      "amount": "0",
      "occurredDate": "-",
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *영업 이행서 - 판매목표강제 법위반\n*오픈임박요청서(10.04.28.) - 실질과 다르다면 법위반\n[계약체결일] 10.04.28. \n*갱신 계약서 있으나 갱신 계약 체결일 없음\n[가맹계약서상 점주] 김희정\n[영업지역 설정 사항] 특수상권 덕천 뉴코아내",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[계약체결일] 17.04.28. (조) \n18.11.30. (김)\n20.04.02. (하, 워드기재 )\n[가맹계약서상 점주] 조은아\n김현웅 (18년 몇일인지는 확인 안됨 양수일)\n하성미 (20.03.18. 양수도 계약서 체결)\n[영업지역 설정 사항] 점포중심 반경 500 미터 원\n[예상매출액 산정방식] 영업시간 (14) 유동인구 (171922) \n내점율 (1.3%) 실구매율 (90%) 객단가 (3200) 365일",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "-"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *인테리어 견적서\n있음 - 당사 거래 강제 인지 여부 확인 필요 \n*계약 일부 내용 유실\n[계약체결일] 17.05.11.\n[가맹계약서상 점주] 원세빈 (19.03.25. 양도양수 내용증명)\n*실제 점주 변경 사실은 확인되지 않음\n[영업지역 설정 사항] 점포중심 반경 500미터 원\n[예상매출액 산정방식] *예상매출액 산출 근거자료 있음\n*영업시간 (13) * 유동인구 (20257) * 내점율 (1.5 %) * 실구매율 (80%) * 객단가 (3200) * 365",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정상설정",
      "scopeType": "반경지정",
      "scopeText": "",
      "noteType": "-",
      "noteText": "",
      "setDate": "2025-01-24"
    },
    "revenueMethod": {
      "method": "예외산정(임의)",
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
    },
    "etc": {
      "memo": "[특이사항] *양수도 계약 체결일 20.07.09.\n[계약체결일] 19.02.15. (하)\n20.07.16. (임)\n[가맹계약서상 점주] 하성미\n[영업지역 설정 사항] 점포 중심 반경 500 미터 원\n[예상매출액 산정방식] 영업시간 (14)내의 1일 유동인구 12794*\n내점율 (1.5% ) * 실구매율 (55%) * 객단가 (3100) * 360 (하)",
      "author": "엑셀 실사자료",
      "date": "2026-09-08"
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
      "status": "정합성확인됨",
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
      "note": ""
    },
    "hygiene": {
      "result": "미입력",
      "lastCheckDate": "-",
      "nextCheckDate": "-",
      "specialNote": ""
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
