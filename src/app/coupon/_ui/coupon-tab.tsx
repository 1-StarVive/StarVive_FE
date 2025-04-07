'use client'; 
import CouponItem from './coupon-item';

const mockCoupons = [
    {
        discountLabel: '10% 할인',
        title: 'LOVE DAZE 초콜릿 & 쿠키 할인 쿠폰',
        period: '사용 기간 : 2025.03.04 00:00 ~ 2025.03.16 23:59',
        condition: '사용 조건 : 30,000원 이상 결제 시 사용 가능, 최대 5,000원 할인',
        },
        {
        discountLabel: '5% 할인',
        title: '봄맞이 음료 쿠폰',
        period: '사용 기간 : 2025.04.01 ~ 2025.04.30',
        condition: '1만원 이상 구매 시 사용 가능',
        },
        
    ];


export default function CouponTab() {
    return (
        <>
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
    <div className="flex justify-center  px-[24px]">
        <div className="w-full h-[64px] bg-[#F7F7F7] flex items-center px-[24px]">
            <ul className="list-disc space-y-1 text-sm text-[12px] text-[#727272]">
                <li>주문시 사용가능한 쿠폰입니다</li>
                <li>쿠폰을 받은 후 주문(결제) 시에 사용하세요</li>
            </ul>
        </div>
    </div>

    <div className="flex flex-col gap-[16px] mt-[20px]">
        {mockCoupons.map((coupon, index) => (
            <CouponItem
                key={index}
                discountLabel={coupon.discountLabel}
                title={coupon.title}
                period={coupon.period}
                condition={coupon.condition}
            />
            ))}
        </div>
    </>
    );
}