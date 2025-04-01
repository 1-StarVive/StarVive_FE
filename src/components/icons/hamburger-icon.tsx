function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3996 6H3.59961V7.2H20.3996V6Z" fill="#666767" />
      <path d="M20.3996 12.2H3.59961V13.4H20.3996V12.2Z" fill="#666767" />
      <path d="M20.3996 18.4H3.59961V19.6H20.3996V18.4Z" fill="#666767" />
    </svg>
  );
}

export default HamburgerIcon;
