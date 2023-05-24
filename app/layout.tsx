import "./globals.css";
import Navigation from "./components/Navigation";
import LeftSidebar from "./components/LesftSidebar"
import Image from 'next/image';
import LeftSidebarLayout from "./components/LesftSidebar";



export const metadata = {
  title: "Revista Atenas",
  description: "Revista cientifica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          <div className="flex h-screen bg-gray-200">
            <LeftSidebar/>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex-1 p-4">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
