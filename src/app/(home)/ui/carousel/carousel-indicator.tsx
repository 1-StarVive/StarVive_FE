import { JSX } from 'react'; // JSX 타입을 사용하기 위해 React에서 import

// props로 받을 데이터 타입 정의
type Props = {
  count: number;         // 인디케이터 총 개수 (배너 개수)
  activeIndex: number;   // 현재 활성화된 인디케이터의 인덱스
};

// ✅ CarouselIndicator 컴포넌트 정의
export default function CarouselIndicator(props: Props): JSX.Element {
  return (
    // 인디케이터를 배너 하단 중앙에 고정시키기 위한 스타일
    <div className="absolute bottom-[6.2%] left-1/2 -translate-x-1/2 z-10 flex gap-[3.75px] h-[9.5px]">
      {/* count만큼 반복해서 점(●) 생성 */}
      {Array.from({ length: props.count }).map(function (_, index: number): JSX.Element {
        return (
          <span
            key={index} // 각 인디케이터에 고유 key 부여 (React 필수)
            // 현재 활성 인덱스와 같으면 검정색, 아니면 흰색 rounded-full원으로 만들기
            className={`w-[9.5px] h-[9.5px] rounded-full  ${
              index === props.activeIndex ? 'bg-black' : 'bg-white'
            }`}
          />
        );
      })}
    </div>
  );
}
