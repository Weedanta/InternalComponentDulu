import Header from "@/shared/layout/header/header";


export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      {children}
      
    </>
  );
}
