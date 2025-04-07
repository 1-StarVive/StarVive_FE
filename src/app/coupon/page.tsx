import Header from "@/components/headers/header";


export default function Page() {
    return (
    <>
        <Header/>
        <main className="space-y-[20px]">
            <h1 className="text-2xl font-bold w-full h-[71px] py-[20px] px-[24px] rounded-lg">쿠폰</h1>
            
            <div className="flex w-full h-[36px] ">
                <input type="radio" name="tab" id="possession" className="peer/possession hidden" defaultChecked />
                <label htmlFor="possession" className="w-1/2 h-full flex items-center justify-center border-b border-[#c1c1c1] peer-checked/possession:font-bold peer-checked/possession:border-b-2
peer-checked/possession:border-green-500">
                    보유쿠폰(0)
                </label>
                <input type="radio" name="tab" id="receive" className="peer/receive hidden" />
                <label htmlFor="receive" className="w-1/2 h-full flex items-center justify-center border-b border-[#c1c1c1] peer-checked/receive:font-bold peer-checked/receive:border-b-2
peer-checked/receive:border-green-500">
                    쿠폰받기(0)
                </label>
            </div>
            <div className="px-[24px]">
                <div className="flex justify-center ">
                    <div className="w-full h-[64px] bg-[#F7F7F7] flex items-center px-[24px]">
                        <ul className="list-disc space-y-1 text-sm text-[12px] text-[#727272]">
                            <li>주문시 사용가능한 쿠폰입니다</li>
                            <li>쿠폰을 받은 후 주문(결제) 시에 사용하세요</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-[12px] w-full h-[132px] ">
                    <div className="h-[20px] px-[0px] flex justify-between">
                        <p className="text-[#00A862] text-base font-semibold leading-5">10% 할인</p>
                        <button  className="flex text-[13px] font-medium leading-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[22px] h-[22px]" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10m0 0l-4-4m4 4l4-4" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 19h12" />
                            </svg>
                            쿠폰받기
                        </button>
                    </div>
                    <p className="font-semibold leading-5" >
                        LOVE DAZE 초콜릿 & 쿠키 할인 쿠폰
                    </p>
                    <div>
                        <div className="space-y-[4px] tracking-tighter text-[12px]">
                            <p>사용 기간 : 2025.03.04 00:00 ~ 2025.03.16 23:59</p>
                            <p>사용 조건 : 30,000원 이상 결제 시 사용 가능, 최대 5,000원 할인</p>
                        </div>
                        <button className="text-[11px] tracking-tighter text-[#996B4D] underline">
                            적용 대상 보기
                        </button>
                    </div>

                </div>
            </div>

        

            <div className="w-full h-[90px] pt-[13px]  bg-[#ffffff] shadow-[0_-4px_10px_-6px_rgba(0,0,0,0.2)] fixed bottom-0">
                <button className="w-[334px] h-[42px]  bg-[#01A862] text-white text-center rounded-full font-bold shadow-md mx-auto block">
                    쿠폰 모두 받기
                </button>
            </div>
        </main>
    </>

    );
}