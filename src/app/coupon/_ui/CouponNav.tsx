import React, { useState } from 'react';

export default function CouponNav() {
  const [activeTab, setActiveTab] = useState<'possession' | 'receive'>('receive');

  return (
    <nav role="tablist" aria-label="Coupon Tabs" className="flex h-9 w-full">
      <button
        type="button"
        role="tab"
        id="tab-possession"
        aria-selected={activeTab === 'possession'}
        aria-controls="panel-possession"
        className={`flex h-full w-1/2 items-center justify-center border-b border-gray-300 ${
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
        className={`flex h-full w-1/2 items-center justify-center border-b border-gray-300 ${
          activeTab === 'receive' ? 'border-b-2 border-green-500 font-bold' : ''
        }`}
        onClick={() => setActiveTab('receive')}
      >
        쿠폰받기(0)
      </button>
    </nav>
  );
}
