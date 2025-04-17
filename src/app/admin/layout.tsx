import Navigation from "./_ui/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main className="mt-10">{children}</main>
    </>
  );
}
