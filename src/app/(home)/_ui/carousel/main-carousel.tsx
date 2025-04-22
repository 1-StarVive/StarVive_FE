"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { JSX } from "react";
import CarouselIndicator from "./carousel-indicator";

type Banner = {
  bannerId: string;
  imageBannerUrl: string;
  imageBannerAlt: string;
  postedAt: string;
  activated: boolean;
};

export default function MainCarousel(): JSX.Element {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    async function fetchBanners() {
      try {
        const res = await fetch("https://starvive.store/api/v1/banner/all");
        if (!res.ok) {
          throw new Error("배너 데이터를 불러오는 데 실패했습니다");
        }
        const data = await res.json();
        const filtered = data.filter((b: Banner) => b.activated);
        setBanners(filtered);
      } catch (err) {
        console.error("❌ 배너 불러오기 실패:", err);
      }
    }

    fetchBanners();
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="aspect-[390/330] w-full overflow-hidden"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.bannerId}>
            <Link href={`/event/${banner.bannerId}`}>
              <img src={banner.imageBannerUrl} alt={banner.imageBannerAlt} className="h-full w-full object-cover" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselIndicator count={banners.length} activeIndex={activeIndex} />
    </div>
  );
}
