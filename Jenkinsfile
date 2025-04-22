// Jenkinsfile
pipeline {
    agent any // Node.js, pnpm, Docker가 설치된 Jenkins 에이전트를 지정하는 것이 좋습니다.

    environment {
        // 프론트엔드 빌드 또는 실행에 필요한 환경 변수 (예: API 서버 주소)
        // NEXT_PUBLIC_API_URL = 'http://your-api-server.com' // Next.js는 NEXT_PUBLIC_ 접두사 사용
        CONTAINER_NAME = 'frontend-container-dev' // 백엔드와 구분되는 컨테이너 이름 (dev 환경)
        SERVER_PORT = '3000' // Next.js 기본 포트 또는 Dockerfile에서 노출할 포트 -> 3000으로 변경
        IMAGE_TAG = "dev-${BUILD_NUMBER}" // 빌드 번호를 포함한 이미지 태그 (dev 환경)
        IMAGE_NAME = "your-dockerhub-username/star-vive-fe" // Docker Hub 사용자명/앱 이름으로 변경 (Docker Hub 사용 시)
        // 백엔드 Jenkinsfile의 AWS 관련 변수 등을 필요에 따라 추가할 수 있습니다.
        AWS_REGION = 'ap-northeast-2'
        // ... 기타 필요한 환경 변수
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                // 프론트엔드용 Dockerfile을 사용하여 이미지 빌드
                // Dockerfile이 프로젝트 루트에 있다고 가정
                // --build-arg를 사용하여 빌드 시점에 환경 변수 전달 (Public IP 사용으로 변경)
                sh "docker build --build-arg NEXT_PUBLIC_API_URL=https://starvive.store:8082 -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Deploy to EC2 (Same Instance)') { // Stage 이름 변경 (선택 사항)
            steps {
                // Jenkins가 실행되는 동일한 EC2 인스턴스에 배포
                sh '''
                    # (선택) Docker Registry에서 이미지 받기 (만약 Push 했다면)
                    # docker pull ${IMAGE_NAME}:${IMAGE_TAG}

                    echo "Stopping and removing existing container..."
                    # 기존 컨테이너 중지 및 삭제
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true

                    echo "Starting new container..."
                    # 새 컨테이너 실행 (Next.js 기본 포트 3000을 ${SERVER_PORT}로 연결)
                    # Jenkins 실행 환경에 Docker가 설치되어 있어야 함
                    docker run -d --name ${CONTAINER_NAME} -p ${SERVER_PORT}:3000 ${IMAGE_NAME}:${IMAGE_TAG}

                    echo "Checking application status..."
                    sleep 15

                    # 컨테이너가 정상적으로 실행 중인지 확인
                    if ! docker ps | grep -q "${CONTAINER_NAME}"; then
                        echo "Container ${CONTAINER_NAME} failed to start."
                        docker logs ${CONTAINER_NAME} # 컨테이너 로그 출력
                        exit 1
                    fi

                    echo "Frontend application container (${CONTAINER_NAME}) is running on port ${SERVER_PORT}!"

                    # (선택) 이전 버전 Docker 이미지 삭제 등 추가 정리 작업
                    # docker image prune -f
                '''
            }
        }
    }

    post {
        always {
            node('') {
                sh '''
                    # Jenkins 에이전트의 로컬 Docker 리소스 정리 (선택 사항)
                    # docker rmi ${IMAGE_NAME}:${IMAGE_TAG} || true

                    docker system prune -a -f || true
                '''
                cleanWs()
            }
        }
    }
} 