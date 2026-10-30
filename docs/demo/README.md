# SmartChain 실제 화면 시연

2026-10-30, Spring Boot·PostgreSQL·AI Run API·React를 GitHub Actions의 localhost에서 함께 실행해 캡처했습니다. 증빙은 합성 문서이며 OpenAI와 Clova OCR은 실제 호출했습니다.

![SmartChain 업무 흐름](smartchain-demo.gif)

|단계|화면|
|---|---|
|1|[캠페인에 연결한 기안 생성](01-create.webp)|
|2|[증빙 업로드·슬롯 분류](02-upload.webp)|
|3|[슬롯별 AI 판정과 근거](03-analysis.webp)|
|4|[회사 결재자 검토](04-approval.webp)|
|5|[원청 심사](05-review.webp)|
|6|[보완 요청과 이력](06-revision.webp)|
|7|[기안자의 증빙 교체](07-reupload.webp)|
|8|[새 증빙의 재분석 결과](08-reanalysis.webp)|
|9|[재제출 이후 원청 재심사](09-resubmitted-review.webp)|
|10|[최종 승인과 완료 이력](10-completed.webp)|

GIF는 실제 단계별 화면 10개를 연결한 22초 시연입니다. 기안 생성은 브라우저 폼으로, 업로드·분석·결재·심사 상태 전이는 인증된 실제 HTTP API로 실행한 뒤 화면을 확인했습니다. 원본 PNG의 표시 내용은 무손실 WebP로 보존했습니다.

[검증 기록·소스 커밋](https://github.com/withoutsultang/SmartChain_AI/blob/main/docs/verification.md) · [성공 실행](https://github.com/withoutsultang/SmartChain_AI/actions/runs/41059678771)
