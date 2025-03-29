export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="w-screen h-screen md:flex-center">
            {children}
      </div>
    );
  }