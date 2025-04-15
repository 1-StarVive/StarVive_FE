"use client";

import Modal from "./modal";
import Input from "@/components/inputs/input";
import LabeledCheckbox from "@/components/checkboxes/labeled-checkbox";
import { Button } from "@/components/buttons/button";
import Select from "@/components/selects/select";
import FixedFooter from "@/components/footers/fixed-footer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getShippingAddressDetail,
  updateShippingAddress,
  updateShippingAddressRequest,
  UpdateShippingAddressRequest,
} from "@/lib/api/shipping-address";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import ImperativeUI from "@/components/imperative-ui";
import axios from "axios";
import Alert from "@/components/alert";
import ShippingAddressFormHeader from "@/components/headers/shipping-address-form-header";
import useUpdateShippingAddressModalStore from "@/store/update-shipping-address-modal";
import { useEffect } from "react";
import Loading from "../loading";

function UpdateShippingAddressModal() {
  const shippingAddressId = useUpdateShippingAddressModalStore((state) => state.shippingAddressId);
  const close = useUpdateShippingAddressModalStore((state) => state.close);
  const form = useForm({
    resolver: valibotResolver(updateShippingAddressRequest),
  });

  const shippingAddress = useQuery({
    queryKey: ["getShippingAddress", shippingAddressId],
    queryFn: async ({ queryKey }) => {
      const [_, shippingAddressId] = queryKey;
      return await getShippingAddressDetail(shippingAddressId ?? "");
    },
    enabled: !!shippingAddressId,
  });

  useEffect(() => {
    if (shippingAddress.data) {
      form.reset(shippingAddress.data);
    }
  }, [shippingAddress.data, form.reset]);

  const queryClient = useQueryClient();
  const mutaion = useMutation({
    mutationFn: updateShippingAddress,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["shipping-address"] }),
  });

  const handleSubmit: SubmitHandler<UpdateShippingAddressRequest> = async (input) => {
    try {
      ImperativeUI.loading(true);
      await mutaion.mutateAsync(input);
      close();
    } catch (e) {
      console.error(e);
      if (axios.isAxiosError(e)) {
        ImperativeUI.show((close) => <Alert title="추가 실패" content={e.message} onClickButton={close} />);
      } else {
        ImperativeUI.show((close) => (
          <Alert title="추가 실패" content="알수없는 오류가 발생했습니다." onClickButton={close} />
        ));
      }
    } finally {
      ImperativeUI.loading(false);
    }
  };

  return (
    <Modal size="full">
      <ModalWrap>
        <ShippingAddressFormHeader title="배송지 수정" onClickClose={close} />
        <Title />

        {shippingAddress.isPending ? (
          <Loading />
        ) : shippingAddress.isError ? (
          <div>오류발생</div>
        ) : (
          <form className="mb-[90px] flex flex-col gap-2 px-6" onSubmit={form.handleSubmit(handleSubmit)}>
            <Input label="주소별칭" {...form.register("addressNickName")} />
            <Input label="받는분" required={true} {...form.register("receiverName")} />
            <Input label="우편번호" required={true} {...form.register("postalCode")} />
            <div className="grid grid-cols-[1fr_auto] items-end">
              <Input label="기본주소" required={true} {...form.register("baseAddress")} />
              <Button type="button" variant="outline">
                주소검색
              </Button>
            </div>
            <Input label="상세주소" required={true} {...form.register("detailAddress")} />
            <Input label="연락처1" required={true} {...form.register("phoneNumber")} />
            <div>
              <span className="text-xs">배송메모</span>
              <Controller
                control={form.control}
                name="memo"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      { value: "배송 메모를 선택해 주세요.", label: "배송 메모를 선택해 주세요." },
                      { value: "배송 전 연락 바랍니다.", label: "배송 전 연락 바랍니다." },
                      { value: "부재 시 경비실에 맡겨주세요.", label: "부재 시 경비실에 맡겨주세요." },
                      { value: "부재 시 문 앞에 놓아주세요.", label: "부재 시 문 앞에 놓아주세요." },
                      { value: "부재 시 전화 또는 문자 남겨주세요.", label: "부재 시 전화 또는 문자 남겨주세요." },
                    ]}
                    getLabel={(o) => o.label}
                    getValue={(o) => o.value}
                    placeholder="배송 메모를 선택해 주세요."
                  />
                )}
              />
            </div>
            <LabeledCheckbox
              label={<span className="text-xs">기본배송지로 설정</span>}
              {...form.register("selectedBase")}
            />

            <FixedFooter>
              <Button type="submit">추가하기</Button>
            </FixedFooter>
          </form>
        )}
      </ModalWrap>
    </Modal>
  );
}

export default UpdateShippingAddressModal;

function ModalWrap({ children }: React.PropsWithChildren) {
  return <div className="h-full w-full overflow-auto bg-white">{children}</div>;
}

function Title() {
  return <h1 className="px-6 py-8 text-2xl font-bold">배송지 정보</h1>;
}
