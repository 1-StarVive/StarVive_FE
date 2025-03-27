export type ProductInfoProps = {
  isTop?: boolean;
  isLimitedEdition?: boolean;
  isNew?: boolean;
  name: string;
};

function ProductInfo({
  isTop,
  isNew,
  isLimitedEdition,
  name,
}: ProductInfoProps) {
  const isLabel = isTop || isNew;
  return (
    <InfoWrap>
      {isLabel && (
        <LabelWrap>
          {isLimitedEdition && <span className="text-[#997e64]">Limited</span>}
          {isTop && <span className="text-[#E53535]">Best</span>}
          {isNew && <span className="text-[#30BB7A]">New</span>}
        </LabelWrap>
      )}
      <NameWrap>{name}</NameWrap>
    </InfoWrap>
  );
}

export default ProductInfo;

function InfoWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-[8px]">{children}</div>;
}

function LabelWrap({ children }: React.PropsWithChildren) {
  return <div className="space-x-[9px]">{children}</div>;
}

function NameWrap({ children }: React.PropsWithChildren) {
  return <span className="line-clamp-2 text-[15px]">{children}</span>;
}
