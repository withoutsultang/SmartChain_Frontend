# SmartChain Frontend

> 파일 제출·AI 결과·결재·수신 검토를 역할별 사용자 흐름으로 연결하는 React 애플리케이션

**KT AIVLE School 빅프로젝트 · 7인 팀 · 최우수상(2위)**

협력사의 증빙 제출부터 검토·승인·보완 요청까지 연결하는 **AI 기반 공급망 리스크 관리 플랫폼**입니다. ESG·안전보건·하도급 컴플라이언스의 세 업무 영역을 하나의 제출·검토 흐름으로 구성했습니다.

## 김건우의 주요 기여

**화면 구현과 API 계약을 함께 다루며**, 사용자가 다음 업무 단계로 이동할 수 있도록 제출·검토·복구 동선을 정리했습니다.

|구현 사례|주요 내용|근거|
|---|---|---|
|도메인 멤버십 기반 화면|메뉴 필터·게스트/도메인 라우트 가드|[PR #128](https://github.com/SmartChain-HD/Frontend/pull/128)|
|기안 생성과 검증 자동화|캠페인 API/훅·폼 검증·Playwright POM, 당시 PR에 5개 시험 통과 기록|[PR #83](https://github.com/SmartChain-HD/Frontend/pull/83)|
|AI 결과 화면 시험|API Mock으로 판정·필수 누락·실패·이력 UI, 당시 PR에 13개 시험 통과 기록|[PR #94](https://github.com/SmartChain-HD/Frontend/pull/94)|
|Preview 오류 복구|용도별 대기 설정과 다시 시도 UI|[PR #357](https://github.com/SmartChain-HD/Frontend/pull/357)|
|배포 웹서버 구성|Nginx API 프록시·Host 전달·SPA fallback|[PR #371](https://github.com/SmartChain-HD/Frontend/pull/371)|
|인증 상태 전환|사용자 조회 후 이동·늦은 navigation 정리·중복 reload 방지|[PR #382](https://github.com/SmartChain-HD/Frontend/pull/382)|
|교차검증 결과 표시|기안·결재·문서 리뷰 3개 화면에 비교 대상·판정·사유 표시|[PR #407](https://github.com/SmartChain-HD/Frontend/pull/407)|

## 서비스 화면

![안전보건 심사 관리 화면](docs/스크린샷%202026-02-06%2010.58.16.png)

## 사용자 경험 설계

- **역할별 탐색**: 기안자·결재자·수신자의 작업과 도메인 멤버십에 맞는 메뉴를 제공합니다.
- **증빙에서 검토까지**: 파일 업로드, 슬롯 분류, 분석 결과와 보완 요청을 연결합니다.
- **근거 중심 결과**: 위험 배지·교차 비교·사유를 구분해 표시합니다.
- **명시적인 입력/복구**: 필수값 검증, 2,000자 카운터, 분석 오류 안내와 재시도 동선을 제공합니다.

## 기술 구성

React 18 · TypeScript · Vite · React Query · Zustand · React Hook Form/Zod · Tailwind CSS · Playwright

## 로컬 실행

Node.js 22 이상을 권장합니다. 기본 백엔드 주소는 API client와 Vite 설정을 참고하세요.

```bash
npm install
# .env.local
# VITE_API_BASE_URL=http://localhost:8080/api
npm run dev
npm run build
npm run test:preview
# 역할별 브라우저 시험
npx playwright test --project=chromium
```

## 코드 탐색

`features/`는 업무별 화면, `src/api/`는 서버 계약, `src/hooks/`는 서버 상태, `src/store/`는 인증 상태, `tests/`는 POM/화면 흐름 시험을 담습니다. Preview 대기·복구 정책은 `src/api/previewPolicy.ts`에서 관리합니다.

검증 자동화는 **Actions → Portfolio checks → Run workflow**에서 실행할 수 있습니다.

## 프로젝트 저장소

[Backend](https://github.com/withoutsultang/SmartChain_Backend) · [Frontend](https://github.com/withoutsultang/SmartChain_Frontend) · [AI](https://github.com/withoutsultang/SmartChain_AI)

팀 원본: [SmartChain-HD/Frontend](https://github.com/SmartChain-HD/Frontend). 팀 명세를 바탕으로 Claude Code를 활용해 구현하고 내부 테스트·팀 QA로 동작을 확인했습니다.
