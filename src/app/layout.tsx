import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vasitum HR Dashboard",
  description: "A responsive HR dashboard built using React and Tailwind CSS for employee management, talent requests, and recruitment analytics.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
          {children}
      </body>
    </html>
  );
}
