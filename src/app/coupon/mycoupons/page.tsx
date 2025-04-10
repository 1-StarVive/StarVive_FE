"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"possession" | "receive">(
    "receive"
  );

  const handleGetCoupon = (couponId: string) => {
    console.log("get coupon", couponId);
    // fetch
  };

  const handleAllGetCoupons = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 모든쿠폰을 다운로드하도록 데이터 통신
    console.log("all get coupons with submit");
    // fetch
  };

  return (
    <>
      <main className="space-y-5">
        <h1 className="h-16 w-full rounded-lg px-6 py-5 text-2xl font-bold">
          쿠폰
        </h1>
        <nav
          role="tablist"
          aria-label="Coupon Tabs"
          className="flex h-9 w-full"
        >
          <button
            type="button"
            role="tab"
            id="tab-possession"
            aria-selected={activeTab === "possession"}
            aria-controls="panel-possession"
            className={`flex h-full w-1/2 items-center justify-center border-b border-gray-300 ${
              activeTab === "possession"
                ? "border-b-2 border-green-500 font-bold"
                : ""
            }`}
            onClick={() => setActiveTab("possession")}
          >
            보유쿠폰(0)
          </button>
          <button
            type="button"
            role="tab"
            id="tab-receive"
            aria-selected={activeTab === "receive"}
            aria-controls="panel-receive"
            className={`flex h-full w-1/2 items-center justify-center border-b border-gray-300 ${
              activeTab === "receive"
                ? "border-b-2 border-green-500 font-bold"
                : ""
            }`}
            onClick={() => setActiveTab("receive")}
          >
            쿠폰받기(0)
          </button>
        </nav>

        <section
          role="tabpanel"
          id="panel-receive"
          aria-labelledby="tab-receive"
          hidden={activeTab !== "receive"}
          className="px-6"
        >
          <aside className="w-full rounded-md bg-gray-100 px-6 py-4">
            <ul className="list-disc space-y-1 pl-5 text-[12px] text-gray-500">
              <li>주문시 사용가능한 쿠폰입니다</li>
              <li>쿠폰을 받은 후 주문(결제) 시에 사용하세요</li>
            </ul>
          </aside>

          <form
            className="mt-4 h-[132px] w-full space-y-3"
            onSubmit={handleAllGetCoupons}
          >
            {/* 쿠폰하나의 아이템시작 */}
            <div className="flex h-[20px] justify-between">
              <p className="text-base leading-5 font-semibold text-green-600">
                10% 할인
              </p>
              <button
                type="button"
                className="flex text-[13px] leading-5 font-medium"
                aria-label="쿠폰 받기"
                onClick={() => handleGetCoupon("couponId")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-w w-[22px]"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v10m0 0l-4-4m4 4l4-4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 19h12"
                  />
                </svg>
                쿠폰받기
              </button>
            </div>

            <h2 className="text-base leading-5 font-semibold">
              LOVE DAZE 초콜릿 & 쿠키 할인 쿠폰
            </h2>

            <div className="space-y-1 text-[12px] tracking-tighter">
              <p>사용 기간 : 2025.03.04 00:00 ~ 2025.03.16 23:59</p>
              <p>
                사용 조건 : 30,000원 이상 결제 시 사용 가능, 최대 5,000원 할인
              </p>
              <Link
                href="#"
                className="text-[11px] tracking-tighter text-amber-700 underline"
              >
                적용 대상 보기
              </Link>
            </div>
            {/* 쿠폰하나의 아이템끝 */}
            {activeTab === "receive" && (
              <footer className="fixed bottom-0 h-[90px] w-full bg-white pt-[13px] shadow-[0_-4px_10px_-6px_rgba(0,0,0,0.2)]">
                <button
                  type="submit"
                  className="mx-auto block h-[42px] w-[334px] rounded-full bg-green-600 text-center font-bold text-white shadow-md"
                >
                  쿠폰 모두 받기
                </button>
              </footer>
            )}
          </form>
        </section>
      </main>
    </>
  );
}
