# --- 1. deps 스테이지: 의존성 설치 & 빌드 ---
    FROM node:20-alpine AS deps
    WORKDIR /app
    
    # 1) 빌드 인수로 API URL 받기
    ARG NEXT_PUBLIC_API_URL
    # 2) 끝에 붙은 슬래시 제거해서 환경 변수로 설정
    ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL%/}
    
    # pnpm 설치
    RUN npm install -g pnpm
    
    # 의존성 설치
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install --frozen-lockfile
    
    # 소스 복사 & 빌드
    COPY . .
    RUN pnpm run build
    
    # --- 2. runner 스테이지: 런타임 이미지 ---
    FROM node:20-alpine AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    # 보안용 non-root 유저
    RUN addgroup --system --gid 1001 nodejs \
     && adduser --system --uid 1001 nextjs
    
    # 1) standalone 출력물이 있으면 복사
    COPY --from=deps /app/.next/standalone ./
    # 2) static 자산
    COPY --from=deps /app/public ./public
    COPY --from=deps /app/.next/static ./.next/static
    
    # (선택) standalone 출력물이 없었다면, 전체 .next를 복사
    # COPY --from=deps /app/.next ./.next
    # COPY --from=deps /app/node_modules ./node_modules
    # COPY --from=deps /app/package.json ./
    
    USER nextjs
    EXPOSE 3000
    CMD ["node", "server.js"]
    