import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  showHomeButton?: boolean;
}

export function Navigation({ showHomeButton = true }: NavigationProps) {
  return (
    <nav className="w-full px-4 sm:px-8 lg:px-20 py-8 lg:py-14 flex items-center justify-between relative z-[1000]">
      <Link to="/" className="text-lg sm:text-xl font-medium text-white">
        WhiteSignal.
      </Link>

      <div className="hidden lg:flex items-center gap-8 xl:gap-12">
        <button
          onClick={() => {
            const element = document.getElementById('social-media-links');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-lg xl:text-xl text-white hover:text-gray-300 transition-all duration-200 cursor-pointer bg-transparent border-none px-2 py-1 rounded hover:bg-white/10 active:bg-white/20"
        >
          Connect
        </button>
        <Link
          to="/disclaimer"
          className="text-lg xl:text-xl text-white hover:text-gray-300 transition-all duration-200 px-2 py-1 rounded hover:bg-white/10 active:bg-white/20 inline-block"
        >
          Disclaimer
        </Link>
        <Link
          to="/terms"
          className="text-lg xl:text-xl text-white hover:text-gray-300 transition-all duration-200 px-2 py-1 rounded hover:bg-white/10 active:bg-white/20 inline-block"
        >
          Terms and conditions
        </Link>
        {showHomeButton && (
          <Link
            to="/"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base rounded-md transition-all duration-200 inline-flex items-center justify-center font-medium active:scale-95"
          >
            Home
          </Link>
        )}
      </div>

      {/* Mobile menu - simplified */}
      <div className="lg:hidden">
        {showHomeButton && (
          <Link
            to="/"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-4 py-2 text-sm rounded-md transition-all duration-200 inline-flex items-center justify-center font-medium active:scale-95"
          >
            Home
          </Link>
        )}
      </div>
    </nav>
  );
}
