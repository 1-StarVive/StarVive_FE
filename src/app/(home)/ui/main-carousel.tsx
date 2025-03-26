'use client';
import { useState } from 'react'; // 인디케이터 상태 추적용
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { JSX } from 'react'; 


type Banner = {
    id: number;
    src: string;
    alt: string;
    link: string;
  };
const banners: Banner[] = [
    { id: 1, src: '/banner1.png', alt: 'Banner 1', link: '/event/1' },
    { id: 2, src: '/banner2.png', alt: 'Banner 2', link: '/event/2' },
    { id: 3, src: '/banner3.png', alt: 'Banner 3', link: '/event/3' },
  ];
  export default function MainCarousel(): JSX.Element { // 리턴타입 명시
    const [activeIndex, setActiveIndex] = useState<number>(0); //현재 인디케이터 위치 상태 선언
    return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]} // 점 인디케이터,자동넘기기
        // pagination={{
        //     clickable: true,
        //   }}
        autoplay={{ delay: 3000 }} //3초(3000ms)간격 넘기기
        loop // 마지막 배너 -> 첫 번째 배너도 다시 오는 기능 Fade In - Fade Out 기능이 있는지 확인해야함
        onSlideChange={function (swiper) {
            setActiveIndex(swiper.realIndex); // 현재 슬라이드 인덱스를 상태에 저장
          }}
        className="w-full aspect-[390/330]  overflow-hidden" // Tailwind css 부모 요소로 너비를 채우고, 가로세로 비율을 390/330으로 고정
      >
        {banners.map(function (banner: Banner): JSX.Element {
            return (
                <SwiperSlide key={banner.id}>
                    <Link href={banner.link}>
                        <img
                            src={banner.src}
                            alt={banner.alt}
                            className="w-full h-full object-cover"
                        />
                    </Link>
                </SwiperSlide>
            );
    })}
      </Swiper>
      {/* ✅ 하단 커스텀 인디케이터 */}
      
      <div className="absolute bottom-[6.2%] left-1/2 -translate-x-1/2 z-10 flex gap-[3.75px] h-[9.5px]">
      {banners.map(function (_, index: number): JSX.Element {
        return (
            <span
                key={index}
                className={`w-[9.5px] h-[9.5px] rounded-full ${
                index === activeIndex ? 'bg-black' : 'bg-white'
            }`}
        />
        );
    })}
        </div>
    </div>
    );
  }
  
  