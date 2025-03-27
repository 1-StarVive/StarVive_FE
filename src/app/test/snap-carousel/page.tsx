'use client';

import { JSX } from 'react';
import CarouselSection from '@/components/snap-carousel/snap-carousel';

export default function TestPage(): React.JSX.Element {
    return (
      <main className="p-4">
        <CarouselSection
          title="🔥 인기 제품"
          items={["아이템 1", "아이템 2", "아이템 3", "아이템 4", "아이템 5","아이템 6","아이템 7","아이템 8","아이템 9","아이템 10","아이템 11",]}
        />
      </main>
    );