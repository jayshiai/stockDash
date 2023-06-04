import "./globals.css";
import Nav from "@/components/Nav";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#D9D9D9]">
        <Nav />
        {children}
      </body>
    </html>
  );
}
