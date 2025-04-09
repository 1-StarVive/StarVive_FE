import FooterLink from "./ui/footer-link";
import FooterCopyright from "./ui/footer-copyright";
import FooterMetadata from "./ui/footer-metadata";

function StaticFooter() {
  return (
    <FooterWrap>
      <FooterLinkWrap>
        <FooterLink href={"/."}>개인정보처리방침</FooterLink>
        <FooterLink href={"/."}>홈페이지 이용약관</FooterLink>
        <FooterLink href={"/."}>스타벅스카드 이용약관</FooterLink>
      </FooterLinkWrap>

      <FooterMetadata />

      <FooterCopyright />
    </FooterWrap>
  );
}

export default StaticFooter;

function FooterWrap({ children }: React.PropsWithChildren) {
  return <footer className="mb-[150px] flex flex-col gap-[10px]">{children}</footer>;
}

function FooterLinkWrap({ children }: React.PropsWithChildren) {
  return <ul className="flex flex-wrap items-center space-x-[22px] bg-[#F2F2F2] px-[24px] py-[20px]">{children}</ul>;
}
