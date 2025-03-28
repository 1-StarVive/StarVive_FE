import Header from "@/components/header";
import Image from "next/image";
import ProductInfo from "./_ui/product-info";

function Product() {
  return (
    <>
      <Header showBackButton={true} />
      <main className="flex flex-col gap-[20px]">
        <ImageWrap>
          <Image src="/temp-square.png" alt="나는설명" sizes="400px" fill />
        </ImageWrap>

        <ProductInfo />

        <section className="px-[24]">
          <div className="py-2">
            <span className="font-bold text-lg">상품정보</span>
          </div>

          <InfoImageWrap>
            <Image
              src={"/big.png"}
              alt="나는설명"
              sizes="100vw"
              width={99999}
              height={99999}
              className="w-full"
            />
          </InfoImageWrap>
        </section>
      </main>
    </>
  );
}

export default Product;

function ImageWrap({ children }: React.PropsWithChildren) {
  return <div className="flex w-full aspect-square relative">{children}</div>;
}

function InfoImageWrap({ children }: React.PropsWithChildren) {
  return <div className="flex relative">{children}</div>;
}
