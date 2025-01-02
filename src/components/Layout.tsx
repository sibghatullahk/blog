// src/components/Layout.tsx
import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            My Blog
          </h1>
          <nav aria-label="Main navigation">
            <Link href="/" className="mr-4 hover:underline" aria-label="Home page">
              Home
            </Link>
            <Link href="/blog" className="hover:underline" aria-label="Blog page">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
          <nav aria-label="Footer navigation">
            <Link href="/privacy-policy" className="hover:underline mr-4" aria-label="Privacy Policy">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline" aria-label="Terms of Service">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
