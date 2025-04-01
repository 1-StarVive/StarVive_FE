function XCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9.5" cy="9.5" r="9" fill="white" stroke="currentColor" />
      <path d="M6 6L13 13" stroke="currentColor" />
      <path d="M13 6L6 13" stroke="currentColor" />
    </svg>
  );
}

export default XCircleIcon;
