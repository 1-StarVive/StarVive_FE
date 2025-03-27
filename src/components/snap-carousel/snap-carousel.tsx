import { JSX } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";

// props 타입 정의
type Props = {
    title: string;
    items: string[]; // 실제로는 이미지 경로나 객체일 수 있음 (string은 예시)
};

export default function CarouselSection(props: Props): JSX.Element {
    return (
        <section className="px-4 py-6">
            <header className="mb-4">
                <h2 className="text-lg font-semibold">{props.title}</h2>
            </header>

            {/* 슬라이드 영역 */}

            {/* 스크롤 정렬 기준을 왼쪽(start)으로 설정 */}
            <Carousel opts={{ align: "start" }} className="w-full">
                
                <CarouselContent className="-ml-2">
                {props.items.map(function (item: string, index: number): React.JSX.Element {
                    return (
                    <CarouselItem key={index} className="pl-2 basis-[160px]">
                        <article>
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-4">
                            <span className="text-sm font-medium">{item}</span>
                            </CardContent>
                        </Card>
                        </article>
                    </CarouselItem>
                    );
                })}
                </CarouselContent>
            </Carousel>
        </section>
    );
}


// 이 CarouselSection 컴포넌트는 다음을 수행합니다:

// props로 섹션의 제목과 아이템 배열을 받아서

// 카드 형태로 구성된 가로 슬라이드를 구성하고

// 슬라이드는 shadcn/ui의 Carousel 컴포넌트를 활용해서 부드럽게 이동하며

// Tailwind CSS로 반응형 및 스타일을 적용한 상태입니다.

{/* <section>
  <header> ← 제목
  <Carousel>
    <CarouselContent>
      <CarouselItem> ← 슬라이드 1개
        <Card>
          <CardContent> ← 아이템 내용 */}
