import "./globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
  title: "stockDash",
  description: "Discover & Learn about stocks through interactive dashboard!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#D9D9D9]">
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
