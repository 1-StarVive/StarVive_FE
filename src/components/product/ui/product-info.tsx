import Badge from "@/components/badge";

export type ProductInfoProps = {
  isTop?: boolean;
  isLimitedEdition?: boolean;
  isNew?: boolean;
  name: string;
};

function ProductInfo({ isTop, isNew, isLimitedEdition, name }: ProductInfoProps) {
  const isLabel = isTop || isNew;
  return (
    <InfoWrap>
      {isLabel && (
        <LabelWrap>
          {isLimitedEdition && <Badge color="brown">Limited</Badge>}
          {isNew && <Badge color="green">New</Badge>}
          {isTop && <Badge color="red">Best</Badge>}
        </LabelWrap>
      )}
      <NameWrap>{name}</NameWrap>
    </InfoWrap>
  );
}

export default ProductInfo;

export function InfoWrap({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-[4px]">{children}</div>;
}

export function LabelWrap({ children }: React.PropsWithChildren) {
  return <div className="space-x-[9px]">{children}</div>;
}

export function NameWrap({ children }: React.PropsWithChildren) {
  return <span className="line-clamp-2 text-[15px]">{children}</span>;
}
