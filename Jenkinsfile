pipeline {
    agent any

    environment {
        // NEXT_PUBLIC_API_URL 끝 슬래시 없이 설정
        NEXT_PUBLIC_API_URL = 'http://52.78.250.41:8082'
        IMAGE_NAME          = 'your-dockerhub-username/star-vive-fe'
        IMAGE_TAG           = "dev-${BUILD_NUMBER}"
        CONTAINER_NAME      = 'frontend-container-dev'
        SERVER_PORT         = '3001'   // 호스트 포트
        APP_PORT            = '3000'   // 컨테이너 내부 Next.js 포트
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                  docker build \
                    --build-arg NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL} \
                    -t ${IMAGE_NAME}:${IMAGE_TAG} \
                    .
                """
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh """
                  # 기존 컨테이너 중지 & 제거
                  docker stop ${CONTAINER_NAME} || true
                  docker rm   ${CONTAINER_NAME} || true

                  # 신규 컨테이너 실행
                  docker run -d \
                    --name ${CONTAINER_NAME} \
                    -p ${SERVER_PORT}:${APP_PORT} \
                    ${IMAGE_NAME}:${IMAGE_TAG}

                  # 헬스 체크
                  echo "Waiting for container to be healthy…"
                  sleep 10
                  if ! docker ps | grep -q "${CONTAINER_NAME}"; then
                    echo "❌ Container failed to start"
                    docker logs ${CONTAINER_NAME}
                    exit 1
                  fi
                  echo "✅ Frontend running on port ${SERVER_PORT}"
                """
            }
        }
    }

    post {
        always {
            // 빌드 에이전트의 Docker 리소스 정리
            sh 'docker system prune -a -f || true'
            cleanWs()
        }
    }
}
