"use client";

import { Button } from "@/components/buttons/button";
import FixedFooter from "@/components/footers/fixed-footer";
import { getShippingAddress } from "@/lib/api/shipping-address";
import useUpdateShippingAddressModalStore from "@/store/update-shipping-address-modal";
import { useQuery } from "@tanstack/react-query";

function ShippingAddressList() {
  const open = useUpdateShippingAddressModalStore((state) => state.open);

  const shippingAddress = useQuery({
    queryKey: ["shipping-address"],
    queryFn: getShippingAddress,
    select: (data) => data.sort((a, b) => (a.selectedBase ? -1 : b.selectedBase ? 1 : 0)),
  });

  return (
    <form className="h-full overflow-hidden">
      {shippingAddress.isPending ? (
        <div>로딩중...</div>
      ) : shippingAddress.isError ? (
        <div>에러 발생...</div>
      ) : (
        <ul className="flex h-full flex-col overflow-auto px-4 pb-[90px]">
          {shippingAddress.data.map((address) => (
            <li
              key={address.shippingAddressId}
              className="grid grid-cols-[auto_1fr] gap-2 py-6 not-first:border-t not-first:border-gray-300"
            >
              <input type="radio" name="baseAddress" checked={address.selectedBase} onChange={() => {}} />
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1">
                    <span className="text-sm font-bold">{address.addressNickName}</span>
                    {address.selectedBase && (
                      <span className="text-primary flex items-center rounded bg-green-100 px-1 text-[9px]">기본</span>
                    )}
                  </span>
                  <button
                    type="button"
                    className="text-[0.6rem] text-gray-400"
                    onClick={() => open(address.shippingAddressId)}
                  >
                    수정
                  </button>
                </div>
                <span className="text-xs">
                  ({address.postalCode})<br />
                  {address.baseAddress} {address.detailAddress}
                </span>
                <span className="text-xs text-gray-600">{address.phoneNumber}</span>
                <span className="text-xs text-gray-600">{address.memo}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <FixedFooter>
        <Button type="button">변경하기</Button>
      </FixedFooter>
    </form>
  );
}

export default ShippingAddressList;
