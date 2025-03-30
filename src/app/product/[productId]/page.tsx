import Header from "@/components/header";
import Image from "next/image";
import ProductInfo from "./_ui/product-info";
import AutoImage from "@/components/auto-image";

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
            <span className="text-lg font-bold">상품정보</span>
          </div>

          <InfoImageWrap>
            <div className="relative flex w-full">
              <Image src="/big.png" alt="나는설명" sizes="400px" fill />
            </div>
            <AutoImage src={"/big.png"} alt="나는설명" />
          </InfoImageWrap>
        </section>
      </main>
    </>
  );
}

export default Product;

function ImageWrap({ children }: React.PropsWithChildren) {
  return <div className="relative flex aspect-square w-full">{children}</div>;
}

function InfoImageWrap({ children }: React.PropsWithChildren) {
  return <div className="relative">{children}</div>;
}
