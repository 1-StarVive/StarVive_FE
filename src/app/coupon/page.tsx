import Header from "@/components/headers/header";
import CouponTab from "@/app/coupon/_ui/coupon-tab";
import CouponItem from "@/app/coupon/_ui/coupon-item";
import CouponDownloadBar from "@/app/coupon/_ui/coupon-download-bar";

export default function Page() {
    return (
    <>
        <Header/>
        <main className="space-y-[20px]">
            <h1 className="text-2xl font-bold py-[20px]  px-[24px]">쿠폰</h1>
            <CouponTab/>
            <CouponDownloadBar/>
        </main>
    </>

    );
}

