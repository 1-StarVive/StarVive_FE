import Header from "@/components/headers/header";
import CouponTab from "@/app/coupon/_ui/coupon-tab";
import CouponItem from "@/app/coupon/_ui/coupon-item";
import CouponDownloadBar from "@/app/coupon/_ui/coupon-download-bar";

export default function Page() {
    return (
    <>
        <Header/>
        <section className="flex flex-col gap-[20px]">
            <main className="w-full h-[71px] py-[20px]  px-[24px] rounded-lg">
                <h1 className="text-2xl font-bold">쿠폰</h1>
            </main>
            <CouponTab/>
            <CouponDownloadBar/>
        </section>
    </>

    );
}