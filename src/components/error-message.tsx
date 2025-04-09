function ErrorMessage({ children }: React.PropsWithChildren) {
  return children && <span className="text-xs text-red-500">{children}</span>;
}

export default ErrorMessage;
