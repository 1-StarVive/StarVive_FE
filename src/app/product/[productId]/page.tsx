import Image from "next/image";
import ProductInfo from "./_ui/product-info";
import AutoImage from "@/components/auto-image";
import ProductFooter from "./_ui/product-footer";
import Header from "@/components/headers/header";

function Product() {
  return (
    <>
      <Header showBackButton={true} />
      <main className="flex flex-col gap-[20px]">
        <ImageWrap>
          <Image src="/temp-square.png" alt="나는설명" sizes="400px" fill priority />
        </ImageWrap>

        <ProductInfo />

        <ProductImagesWrap>
          <div className="px-[24] py-2">
            <span className="text-lg font-bold">상품정보</span>
          </div>

          <InfoImageWrap>
            <AutoImage src={"/big.png"} alt="나는설명" />
          </InfoImageWrap>
          <InfoImageWrap>
            <AutoImage src={"/big.png"} alt="나는설명" />
          </InfoImageWrap>
          <InfoImageWrap>
            <AutoImage src={"/big.png"} alt="나는설명" />
          </InfoImageWrap>
          <InfoImageWrap>
            <AutoImage src={"/big.png"} alt="나는설명" />
          </InfoImageWrap>
        </ProductImagesWrap>

        <ProductFooter />
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

function ProductImagesWrap({ children }: React.PropsWithChildren) {
  return <section>{children}</section>;
}
