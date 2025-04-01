function NoticeText({ children }: React.PropsWithChildren) {
  return (
    <li className="relative before:absolute before:-left-2 before:translate-y-0.5 before:text-[8px] before:content-['•']">
      {children}
    </li>
  );
}

export default NoticeText;
