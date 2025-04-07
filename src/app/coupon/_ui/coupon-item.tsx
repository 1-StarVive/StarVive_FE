type CouponItemProps = {
    discountLabel: string;
    title: string;
    period: string;
    condition: string;
};

export default function CouponItem({discountLabel,title,period,condition}:CouponItemProps){
    return(
        <div className="flex flex-col w-full h-[132px] px-[24px] gap-[12px]">
            <div className="w-full h-[20px] px-[0px] flex justify-between">
                <p className="text-[#00A862] text-base font-semibold leading-5">{discountLabel}</p>
                <button  className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[22px] h-[22px]" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10m0 0l-4-4m4 4l4-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 19h12" />
                    </svg>
                    <span className="text-[13px] font-medium leading-5 text-black">쿠폰받기</span>
                </button>
            </div>
            <p className="text-[#000000] text-base font-semibold leading-5" >
                {title}
            </p>
            <div>
                <div className="flex flex-col gap-[4px] tracking-tighter	font-normal text-[12px]">
                    <p>{period}</p>
                    <p>{condition}</p>
                </div>
                <button className="text-[11px] tracking-tighter font-medium text-[#996B4D] underline">
                    적용 대상 보기
                </button>
            </div>
        </div>
    );
} 