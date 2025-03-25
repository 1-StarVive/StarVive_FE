import FooterLink from "./ui/footer-link";
import FooterCopyright from "./ui/footer-copyright";
import FooterMetadata from "./ui/footer-metadata";

function Footer() {
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

export default Footer;

function FooterWrap({ children }: React.PropsWithChildren) {
  return <footer className="flex flex-col gap-[10px]">{children}</footer>;
}

function FooterLinkWrap({ children }: React.PropsWithChildren) {
  return (
    <ul className="px-[24px] py-[20px] bg-[#F2F2F2] space-x-[22px] flex items-center flex-wrap">
      {children}
    </ul>
  );
}
