// src/components/Header.tsx

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:underline">
          My Blog
        </Link>
        <nav className="flex gap-6 text-lg">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
