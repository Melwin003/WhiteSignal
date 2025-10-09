import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  showHomeButton?: boolean;
  theme?: "light" | "dark";
}

export function Navigation({ showHomeButton = true, theme = "dark" }: NavigationProps) {
  const isLight = theme === "light";
  return (
    <nav className="w-full px-4 sm:px-8 lg:px-20 py-8 lg:py-14 flex items-center justify-between relative z-[1000]">
      <Link to="/" className={`text-lg sm:text-xl font-medium ${isLight ? "text-black" : "text-white"}`}>
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
          className={`text-lg xl:text-xl ${isLight ? "text-black hover:text-gray-700 hover:bg-black/5 active:bg-black/10" : "text-white hover:text-gray-300 hover:bg-white/10 active:bg-white/20"} transition-all duration-200 cursor-pointer bg-transparent border-none px-2 py-1 rounded`}
        >
          Connect
        </button>

        <Link
          to="/disclaimer"
          className={`text-lg xl:text-xl ${isLight ? "text-black hover:text-gray-700 hover:bg-black/5 active:bg-black/10" : "text-white hover:text-gray-300 hover:bg-white/10 active:bg-white/20"} transition-all duration-200 px-2 py-1 rounded inline-block`}
        >
          Disclaimer
        </Link>

        <Link
          to="/terms"
          className={`text-lg xl:text-xl ${isLight ? "text-black hover:text-gray-700 hover:bg-black/5 active:bg-black/10" : "text-white hover:text-gray-300 hover:bg-white/10 active:bg-white/20"} transition-all duration-200 px-2 py-1 rounded inline-block`}
        >
          Terms and Conditions
        </Link>

        {/* ✅ Added Privacy Link */}
        <Link
          to="/privacy"
          className={`text-lg xl:text-xl ${isLight ? "text-black hover:text-gray-700 hover:bg-black/5 active:bg-black/10" : "text-white hover:text-gray-300 hover:bg-white/10 active:bg-white/20"} transition-all duration-200 px-2 py-1 rounded inline-block`}
        >
          Privacy Policy
        </Link>

        {showHomeButton && (
          <Link
            to="/"
            className={`border-2 ${isLight ? "border-black text-black hover:bg-black hover:text-white" : "border-white text-white hover:bg-white hover:text-black"} bg-transparent px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base rounded-md transition-all duration-200 inline-flex items-center justify-center font-medium active:scale-95`}
          >
            Home
          </Link>
        )}
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden">
        {showHomeButton && (
          <Link
            to="/"
            className={`border-2 ${isLight ? "border-black text-black hover:bg-black hover:text-white" : "border-white text-white hover:bg-white hover:text-black"} bg-transparent px-4 py-2 text-sm rounded-md transition-all duration-200 inline-flex items-center justify-center font-medium active:scale-95`}
          >
            Home
          </Link>
        )}
      </div>
    </nav>
  );
}
