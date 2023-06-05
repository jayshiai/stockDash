import "./globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "stockDash",
  description: "Discover & Learn about stocks through interactive dashboard!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex overflow-hidden bg-black transition-all duration-1000">
        <Provider>
          <Sidebar />
          <section className="w-full">
            <Nav />
            {children}
          </section>
        </Provider>
      </body>
    </html>
  );
}
