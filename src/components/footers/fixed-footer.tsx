function FixedFooter({ children }: React.PropsWithChildren) {
  return (
    <div className="fixed bottom-0 left-0 flex w-full flex-col gap-3 bg-white p-[24px] font-bold shadow-[0_-1px_5px_0_rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
}

export default FixedFooter;
