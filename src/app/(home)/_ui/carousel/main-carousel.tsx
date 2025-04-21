'use client'; // Next.js에서 클라이언트 컴포넌트임을 명시

import { useState } from 'react'; // React 상태 훅
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper 구성 요소
import 'swiper/css'; // Swiper 기본 CSS
import 'swiper/css/pagination'; // (사용하지 않지만 불러온 상태)
import { Pagination, Autoplay } from 'swiper/modules'; // Swiper 모듈: 자동재생 등
import Link from 'next/link'; // Next.js 내부 페이지 이동
import { JSX } from 'react'; // 반환 타입
import CarouselIndicator from './carousel-indicator'; // 커스텀 인디케이터 컴포넌트

// 배너 정보 타입 정의
type Banner = {
  id: number;
  src: string;
  alt: string;
  link: string;
};

// 배너 배열 정의
const banners: Banner[] = [
  { id: 1, src: '/banner1.png', alt: 'Banner 1', link: '/event/1' },
  { id: 2, src: '/banner2.png', alt: 'Banner 2', link: '/event/2' },
  { id: 3, src: '/banner3.png', alt: 'Banner 3', link: '/event/3' },
];

// 메인 캐러셀 컴포넌트
export default function MainCarousel(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0); // 현재 슬라이드 인덱스 상태

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }} // 3초 간격 자동 슬라이드
        loop // 마지막 → 처음으로 자동 전환
        onSlideChange={function (swiper) {
          setActiveIndex(swiper.realIndex); // 현재 활성 슬라이드 인덱스 저장
        }}
        className="w-full aspect-[390/330] overflow-hidden" // 너비 100%, 390:330 비율 유지
      >
        {/* 배너 이미지 리스트 순회 출력 */}
        {banners.map(function (banner: Banner): JSX.Element {
          return (
            <SwiperSlide key={banner.id}>
              <Link href={banner.link}>
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                   // 이미지가 부모 너비와 높이를 꽉 채우고, 비율 유지한 채 잘 맞게 채우도록 설정
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* 커스텀 인디케이터 렌더링 */}
      <CarouselIndicator count={banners.length} activeIndex={activeIndex} />
    </div>
  );
}
