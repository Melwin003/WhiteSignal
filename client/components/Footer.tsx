import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-8 lg:py-16">
        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-4 lg:mb-6"></div>

        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div>
            <p className="text-xl lg:text-2xl font-medium mb-1 lg:mb-2">WhiteSignal</p>
            <p className="text-lg lg:text-xl">by Melwin.S</p>
          </div>

          <div id="social-media-links" className="flex items-center gap-2">
            <div className="p-2 hover:bg-gray-100 rounded transition-colors cursor-pointer">
              <Facebook className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="p-2 hover:bg-gray-100 rounded transition-colors cursor-pointer">
              <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="p-2 hover:bg-gray-100 rounded transition-colors cursor-pointer">
              <Instagram className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="p-2 hover:bg-gray-100 rounded transition-colors cursor-pointer">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>

        <div id="copyright" className="mt-4 lg:mt-6">
          <p className="text-base sm:text-lg lg:text-2xl leading-relaxed max-w-6xl">
            © 2025 WhiteSignal. All rights reserved.<br />
            This website is intended for informational and educational purposes only and does not constitute financial, investment, or legal advice.<br />
            WhiteSignal aggregates insider trading data from publicly available sources and makes no guarantees regarding accuracy, completeness, or timeliness.<br />
            By using this website, you agree to our <Link to="/terms" className="underline hover:text-gray-600 transition-colors">Terms & Conditions</Link> and <Link to="/disclaimer" className="underline hover:text-gray-600 transition-colors">Disclaimer</Link>. Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  );
}
