type FoldableProps = {
  children: React.ReactNode;
  ref: React.Ref<HTMLDivElement>;
};

function Foldable({ children, ref }: FoldableProps) {
  return (
    <div ref={ref} className="h-0">
      {children}
    </div>
  );
}

export default Foldable;
