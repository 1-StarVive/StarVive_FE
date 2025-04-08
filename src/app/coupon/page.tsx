'use client';

import { useState } from 'react';
import Header from '@/components/headers/header';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'possession' | 'receive'>('receive');

  return (
    <>
      <Header />
      <main className="space-y-5">
        <h1 className="h-[71px] w-full rounded-lg px-6 py-5 text-2xl font-bold">쿠폰</h1>

        <div role="tablist" aria-label="coupon-tap" className="flex h-[36px] w-full">
          <button
            type="button"
            role="tab"
            id="tab-possession"
            aria-selected={activeTab === 'possession'}
            aria-controls="panel-possession"
            className={`flex h-full w-1/2 items-center justify-center border-b border-[#c1c1c1] ${
              activeTab === 'possession' ? 'border-b-2 border-green-500 font-bold' : ''
            }`}
            onClick={() => setActiveTab('possession')}
          >
            보유쿠폰(0)
          </button>
          <button
            type="button"
            role="tab"
            id="tab-receive"
            aria-selected={activeTab === 'receive'}
            aria-controls="panel-receive"
            className={`flex h-full w-1/2 items-center justify-center border-b border-[#c1c1c1] ${
              activeTab === 'receive' ? 'border-b-2 border-green-500 font-bold' : ''
            }`}
            onClick={() => setActiveTab('receive')}
          >
            쿠폰받기(0)
          </button>
        </div>

        <section
          role="tabpanel"
          id="panel-receive"
          aria-labelledby="tab-receive"
          hidden={activeTab !== 'receive'}
          className="px-[24px]"
        >
          <aside className="w-full rounded-md bg-[#F7F7F7] px-6 py-4">
            <ul className="list-disc space-y-1 pl-5 text-[12px] text-gray-500">
              <li>주문시 사용가능한 쿠폰입니다</li>
              <li>쿠폰을 받은 후 주문(결제) 시에 사용하세요</li>
            </ul>
          </aside>

          <article className="mt-4 h-[132px] w-full space-y-3">
            <header className="flex h-[20px] justify-between">
              <p className="text-base leading-5 font-semibold text-[#00A862]">10% 할인</p>
              <button className="flex text-[13px] leading-5 font-medium" aria-label="쿠폰 받기">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v10m0 0l-4-4m4 4l4-4"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 19h12" />
                </svg>
                쿠폰받기
              </button>
            </header>

            <h2 className="text-base leading-5 font-semibold">LOVE DAZE 초콜릿 & 쿠키 할인 쿠폰</h2>

            <div className="space-y-1 text-[12px] tracking-tighter">
              <p>사용 기간 : 2025.03.04 00:00 ~ 2025.03.16 23:59</p>
              <p>사용 조건 : 30,000원 이상 결제 시 사용 가능, 최대 5,000원 할인</p>
              <button className="text-[11px] tracking-tighter text-[#996B4D] underline">
                적용 대상 보기
              </button>
            </div>
          </article>
        </section>

        {activeTab === 'receive' && (
          <footer className="fixed bottom-0 h-[90px] w-full bg-white pt-[13px] shadow-[0_-4px_10px_-6px_rgba(0,0,0,0.2)]">
            <button
              type="button"
              className="mx-auto block h-[42px] w-[334px] rounded-full bg-[#01A862] text-center font-bold text-white shadow-md"
            >
              쿠폰 모두 받기
            </button>
          </footer>
        )}
      </main>
    </>
  );
}
