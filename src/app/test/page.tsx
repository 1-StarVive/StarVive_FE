// src/app/test/page.tsx
'use client';

//import HorizontalScroll from '@/components/horizontal-scroll/HorizontalScroll';

export default function TestPage(): JSX.Element {
  return (
    <main className="p-4">
      {/* <HorizontalScroll title="테스트 스크롤"> */}
        {Array.from({ length: 10 }).map(function (_, i: number): JSX.Element {
          return (
            <div
              key={i}
              className="min-w-[100px] h-[100px] bg-pink-200 flex items-center justify-center rounded"
            >
              {i + 1}
            </div>
          );
        })}
      {/* </HorizontalScroll> */}
    </main>
  );
}
