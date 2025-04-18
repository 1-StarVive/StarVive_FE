# Dockerfile

# 1. 의존성 설치 및 빌드 스테이지
FROM node:20-alpine AS deps
WORKDIR /app

# pnpm 설치
RUN npm install -g pnpm

# package.json, pnpm-lock.yaml 복사
COPY package.json pnpm-lock.yaml ./
# 의존성 설치 (프로덕션 의존성만) -> 이제 모든 의존성 설치
# --frozen-lockfile ensures we install exactly what's in the lockfile
RUN pnpm install --frozen-lockfile

# 소스 코드 복사
COPY . .
# 빌드 (--no-daemon 옵션은 CI 환경에서 권장)
RUN pnpm run build

# 2. 프로덕션 이미지 스테이지
FROM node:20-alpine AS runner
WORKDIR /app

# 프로덕션 환경 설정
ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

# 그룹 및 사용자 생성 (보안 강화)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 빌드 스테이지에서 필요한 파일만 복사
# standalone 모드 사용 시
COPY --from=deps --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=deps --chown=nextjs:nodejs /app/public ./public
# standalone output might not automatically copy the static folder in older versions
# If static assets are needed and not served correctly, uncomment the next line
# COPY --from=deps --chown=nextjs:nodejs /app/.next/static ./.next/static

# 비-root 사용자로 전환
USER nextjs

# 애플리케이션 실행 포트 노출 (Jenkinsfile의 SERVER_PORT와 매핑될 포트)
EXPOSE 3000

# 실행 명령어 (standalone 모드 - .next/standalone/server.js)
CMD ["node", "server.js"] 