// src/components/Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
        <nav className="flex justify-center gap-4 mt-4 text-sm">
          <a
            href="#"
            className="hover:underline transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:underline transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
