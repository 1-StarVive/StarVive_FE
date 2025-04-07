'use client';

import { useState } from 'react'; // ✅ 반드시 필요
import Header from "@/components/headers/header";


function AllProducts(){
    const categories = [
        '전체',
        '텀블러/보온병',
        '머그/컵',
        '라이프스타일',
        '티/커피용품',
        '케이크',
        '초콜릿/스낵',
        '세트',
        ];
    const [selected, setSelected] = useState('전체');



    // 필터 구현중 하드코딩
    const filterOptions = {
        전체: {
            season: ['4월 신규코어 MD', '봄 기획전'],
            price: ['1만원 이하', '1~2만원', '2만원 이상'],
            },
            '텀블러/보온병': {
            category: ['보온', '보냉', '스테인리스'],
            season: ['여름 한정', '겨울 한정'],
            volume: ['350ml', '500ml 이상'],
            price: ['2만원 이하', '2만원 이상'],
            },
            '머그/컵': {
            category: ['머그', '컵'],
            season: ['굿즈 기획전'],
            price: ['1만원 이하', '1~2만원'],
            },
            
        };
        
    const currentFilters = filterOptions[selected] || {};

    return(
        <>
        <Header showBackButton />
        <main className="bg-white min-h-screen">
            {/* 하위 탭바 */}
            <nav className="flex w-full h-[55px] overflow-x-auto items-center border-b border-gray-200">
            {categories.map((categoryName) => (
                <button
                key={categoryName}
                onClick={() => setSelected(categoryName)}
                className={`shrink-0 whitespace-nowrap text-[14px] font-medium px-[14px] py-[19px]
                    ${selected === categoryName ? 'text-[#00A862] font-semibold' : 'text-[#838383]'}`}
                >
                {categoryName}
                </button>
            ))}
            </nav>




            <div className="bg-white min-h-screen">
                {currentFilters.category && (
                    <section>
                    <nav className="flex w-full h-[55px] overflow-x-auto items-center border-b border-gray-200">
                        {categories.map((categoryName) => (
                            <button
                            key={categoryName}
                            onClick={() => setSelected(categoryName)}
                            className={`shrink-0 whitespace-nowrap text-[14px] font-medium px-[14px] py-[19px]
                                ${selected === categoryName ? 'text-[#00A862] font-semibold' : 'text-[#838383]'}`}
                            >
                            {categoryName}
                            </button>
                        ))}
                        </nav>
                )}

        </main>

    
        </>
    );
}

export default AllProducts;