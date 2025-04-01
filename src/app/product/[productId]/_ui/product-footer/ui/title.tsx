function Title({ children }: React.PropsWithChildren) {
  return (
    <div className="p-4">
      <span className="text-lg font-bold">{children}</span>
    </div>
  );
}

export default Title;
