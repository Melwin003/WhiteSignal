import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useRef } from "react";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="min-h-screen brand-dark text-brand-white">
      <Navigation showHomeButton={false} />
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 lg:px-16 py-8 lg:py-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="mb-6 lg:mb-8">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-white">Welcome to</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-white leading-tight tracking-tight">
              WhiteSignal.
            </h1>
          </div>

          <div className="mb-8 lg:mb-12">
            <p className="text-lg sm:text-xl lg:text-2xl text-brand-white/90 leading-relaxed mb-6 lg:mb-8">
              Insider Moves Decoded.<br />
              Track Insider Trades.<br />
              Trade Smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Button
                asChild
                className="bg-black text-white text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 py-4 lg:py-6 h-auto font-medium hover:bg-gray-900"
              >
                <Link to="/signup">Live Feed</Link>
              </Button>
              <Button
                asChild
                className="bg-black text-white text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 py-4 lg:py-6 h-auto font-medium hover:bg-gray-900"
              >
                <Link to="/signup">Your Watchlist</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image with Torchlight Effect */}
        <div className="mt-8 lg:mt-16 rounded-lg overflow-hidden">
          <div
            ref={imageRef}
            className="relative w-full cursor-none group"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ aspectRatio: '16/9' }}
          >
            {/* Background handshake image */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/51315a0edc2e7868f9d5684e1086b2ef148c9f1b?width=2361"
              alt="WhiteSignal Dashboard Preview - Hidden Layer"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />

            {/* Gandhi overlay image with mask */}
            <div
              className="absolute inset-0 w-full h-full rounded-lg transition-all duration-150 ease-out"
              style={{
                backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fdc016f00cda84f57977f3ff74e213e51%2F56636e8892434c9d8125335c106c160c?format=webp&width=800')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                WebkitMask: isHovering ? `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, transparent 35%, transparent 40%, black 55%, black 100%)` : 'none',
                mask: isHovering ? `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, transparent 35%, transparent 40%, black 55%, black 100%)` : 'none',
                transition: 'mask 0.1s ease-out, -webkit-mask 0.1s ease-out'
              }}
            />

            {/* Subtle rim glow effect - only when hovering */}
            {isHovering && (
              <div
                className="absolute pointer-events-none transition-opacity duration-300"
                style={{
                  left: mousePosition.x - 250,
                  top: mousePosition.y - 250,
                  width: '500px',
                  height: '500px',
                  border: '2px solid rgba(255,255,255,0.15)',
                  borderRadius: '50%',
                  filter: 'blur(8px)',
                  opacity: 0.6
                }}
              />
            )}

            {/* Very subtle shadow effect around the reveal area */}
            {isHovering && (
              <div
                className="absolute pointer-events-none transition-opacity duration-200"
                style={{
                  left: mousePosition.x - 225,
                  top: mousePosition.y - 225,
                  width: '450px',
                  height: '450px',
                  backgroundImage: `
                    radial-gradient(
                      circle,
                      transparent 0%,
                      transparent 70%,
                      rgba(0,0,0,0.1) 80%,
                      rgba(0,0,0,0.2) 95%,
                      transparent 100%
                    )
                  `,
                  borderRadius: '50%',
                  filter: 'blur(4px)',
                  opacity: 0.8
                }}
              />
            )}
          </div>
        </div>

        {/* Add custom styles for the torch effect */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.4;
            }
          }
        `}</style>
      </section>

      {/* Why Use WhiteSignal Section */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 lg:py-24 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-cream mb-8 lg:mb-16 tracking-tight">
          Why use WhiteSignal ?
        </h2>

        <div className="space-y-12 lg:space-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-cream mb-4 lg:mb-6">
                Spot Smart Money Moves.
              </h3>
              <p className="text-lg sm:text-xl text-brand-cream font-medium">
                Track major insider purchases and sales across the market, before the news catches on.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1894e4f15cfe201963b9aa619017834d88072b21?width=354"
                alt="Money bag icon"
                className="w-32 sm:w-36 lg:w-44 h-auto"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/90e716397c975a159aa2ac8c5e06ef1efdb3097f?width=300"
                alt="Validation icon"
                className="w-28 sm:w-32 lg:w-36 h-auto"
              />
            </div>
            <div className="flex-1 text-center lg:text-right">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-cream mb-4 lg:mb-6">
                Validate Your Trades
              </h3>
              <p className="text-lg sm:text-xl text-brand-cream font-medium">
                Back up your investment ideas by checking if promoters are buying or selling.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-cream mb-4 lg:mb-6">
                Get Signals That Matter.
              </h3>
              <p className="text-lg sm:text-xl text-brand-cream font-medium">
                Only get alerts about stocks you care about, that means no spam, no overload.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/303707b61fb4da21eb0aecdd88ee722c748805d8?width=444"
                alt="No spam icon"
                className="w-40 sm:w-48 lg:w-56 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 lg:py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream mb-8 lg:mb-16 tracking-tight">
          How it works ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {/* Step 1 */}
          <div className="text-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9684caa67fcace779a22585c7852cbbde56b9585?width=438"
              alt="Data mining"
              className="w-40 sm:w-48 lg:w-56 h-auto mx-auto mb-6 lg:mb-8"
            />
            <p className="text-lg sm:text-xl text-brand-cream leading-relaxed">
              We extract insider trading disclosures from exchange filings using automated data pipelines.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/74afea44d89c88d41500ef2547ac54a32939882f?width=440"
              alt="AI technology"
              className="w-40 sm:w-48 lg:w-56 h-auto mx-auto mb-6 lg:mb-8"
            />
            <p className="text-lg sm:text-xl text-brand-cream leading-relaxed">
              n8n-powered workflows analyses the raw data, apply logic filters, and enrich it with LLM-based contextual tagging.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8185c79ec935fc4c1a325ed1902a0aa4a1035970?width=430"
              alt="Coordination"
              className="w-40 sm:w-48 lg:w-56 h-auto mx-auto mb-6 lg:mb-8"
            />
            <p className="text-lg sm:text-xl text-brand-cream leading-relaxed">
              Cleaned insights are formatted, ranked, and dispatched instantly through email or your personal feed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
