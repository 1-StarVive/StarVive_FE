"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const banners = [
  { id: 1, src: "/banner1.png", alt: "Banner 1", link: "/event/1" },
  { id: 2, src: "/banner2.png", alt: "Banner 2", link: "/event/2" },
  { id: 3, src: "/banner3.png", alt: "Banner 3", link: "/event/3" },
];
export default function MainCarousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]} // 점 인디케이터,자동넘기기
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} //3초(3000ms)간격 넘기기
      loop // 마지막 배너 -> 첫 번째 배너도 다시 오는 기능 Fade In - Fade Out 기능이 있는지 확인해야함
      className="aspect-[390/330] w-full overflow-hidden" // Tailwind css 부모 요소로 너비를 채우고, 가로세로 비율을 390/330으로 고정
    >
      {banners.map(
        (
          banner, //배열순회하면서 슬라이드를 반복적으로 만들어줌
        ) => (
          <SwiperSlide key={banner.id}>
            <Link href={banner.link}>
              <img src={banner.src} alt={banner.alt} className="h-full w-full object-cover" />
            </Link>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
}
