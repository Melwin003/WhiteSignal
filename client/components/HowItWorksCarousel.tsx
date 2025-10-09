import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CollectIcon from "@/assets/icons/collect.svg";
import ExtractIcon from "@/assets/icons/extract.svg";
import OcrIcon from "@/assets/icons/ocr.svg";
import ParseIcon from "@/assets/icons/parse.svg";
import AiIcon from "@/assets/icons/ai.svg";
import EnrichIcon from "@/assets/icons/enrich.svg";
import DedupeIcon from "@/assets/icons/dedupe.svg";
import FilterIcon from "@/assets/icons/filter.svg";
import InsightIcon from "@/assets/icons/insight.svg";
import PublishIcon from "@/assets/icons/publish.svg";

type Stage = {
  id: string;
  title: string;
  short: string;
  long: string;
  icon?: string | null;
};

const stages: Stage[] = [
  { id: "collect", title: "Collect Disclosures", short: "Monitor exchanges for new filings", long: "Our system continuously monitors BSE, NSE, and SEBI websites to capture insider trading disclosures the moment they are published. This ensures no filing is missed and logs metadata like time, source, and company for every record.", icon: CollectIcon },
  { id: "extract", title: "Extract Raw Text", short: "Convert PDFs into readable text", long: "Most filings are published in PDF format. We download and extract the raw text while standardizing fonts, encodings, and layout irregularities. This ensures the text is machine-readable and ready for analysis in later stages.", icon: ExtractIcon },
  { id: "ocr", title: "OCR for Scanned Docs", short: "Digitize image-based disclosures", long: "Some disclosures are just scanned images inside PDFs. We use Optical Character Recognition (OCR) to detect text in these cases, ensuring even low-quality or image-based filings are captured as machine-readable data.", icon: OcrIcon },
  { id: "parse", title: "Parse Legal Language", short: "Break down dense filings", long: "Insider filings often use heavy legal and financial jargon. This stage parses and segments the text, identifying key clauses while removing noise like disclaimers or boilerplate content, making the disclosures more structured.", icon: ParseIcon },
  { id: "ai", title: "AI Structuring", short: "Transform text into structured fields", long: "AI models transform unstructured filings into structured data: insider name, designation, trade type (buy/sell), quantity, price, and value. This converts a messy legal PDF into clean, structured JSON records.", icon: AiIcon },
  { id: "enrich", title: "Enrich with Context", short: "Add metadata and company info", long: "We enrich each filing with metadata such as company sector, market cap, insider’s historical activity, and related corporate events. This provides context, making it easier to judge whether a trade is significant.", icon: EnrichIcon },
  { id: "dedupe", title: "Dedupe & Normalize", short: "Remove duplicates and unify fields", long: "Exchanges sometimes publish the same filing multiple times or in different formats. We detect and merge duplicates, then normalize values like dates, currencies, and ISIN codes to maintain consistency in the database.", icon: DedupeIcon },
  { id: "filter", title: "Filter & Curate", short: "Cut out noise and minor trades", long: "Not every filing matters. Small trades, routine transfers, and administrative allotments are filtered out. Only meaningful insider actions pass through, keeping your feed relevant and focused on actionable data.", icon: FilterIcon },
  { id: "insight", title: "Generate Insights", short: "Highlight unusual trading patterns", long: "We score each signal to highlight what matters most. Cluster buying, large trades compared to history, and unusual timing are flagged, surfacing insights beyond the raw disclosures for smarter decision-making.", icon: InsightIcon },
  { id: "publish", title: "Publish & Distribute", short: "Deliver signals to users instantly", long: "The final curated signals are published instantly to the WhiteSignal live feed. Subscribers also receive alerts via email and weekly digests, ensuring you never miss critical insider activity when it happens.", icon: PublishIcon },
];

function PlaceholderIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="#d8cfbc" strokeWidth="1.5" opacity="0.95" />
      <path d="M7 12h10" stroke="#d8cfbc" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function HowItWorksCarousel() {
  const [active, setActive] = useState<number>(2);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const slideWidth = 260 + 24; // card width + gap
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToCard = (index: number) => {
    setActive(index);
  };

  const goToPrevious = () => {
    setActive((prev) => (prev - 1 + stages.length) % stages.length);
  };

  const goToNext = () => {
    setActive((prev) => (prev + 1) % stages.length);
  };

  // ✅ Auto-scroll every 3 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % stages.length);
    }, 3000); // change slide every 3s
    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">How It Works</h2>

      <div className="relative overflow-hidden" ref={containerRef}>
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10 rounded-full p-3 transition-all duration-200 hover:scale-110"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10 rounded-full p-3 transition-all duration-200 hover:scale-110"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Cards */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: -(active * slideWidth - containerWidth / 2 + slideWidth / 2),
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{ minWidth: stages.length * slideWidth }}
        >
          {stages.map((s, i) => {
            const activeCard = i === active;
            return (
              <motion.div
                key={s.id}
                onClick={() => goToCard(i)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex-none cursor-pointer select-none snap-center"
                style={{ width: "260px" }}
              >
                <div
                  className={`rounded-xl relative border ${
                    activeCard ? "border-[#d8cfbc]/40" : "border-white/5"
                  } p-6 h-72 flex flex-col items-center justify-start gap-4
                  bg-gradient-to-br from-[rgba(18,18,18,0.95)] to-[rgba(28,28,28,0.9)]
                  shadow-[inset_0px_1px_2px_rgba(255,255,255,0.05),0_6px_16px_rgba(0,0,0,0.5)]
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.65)]
                  backdrop-blur-md transition-all duration-300`}
                >
                  <div className="mb-2">
                    {s.icon ? (
                      <img src={s.icon} alt={s.title} className="w-12 h-12 object-contain opacity-90" />
                    ) : (
                      <PlaceholderIcon size={48} />
                    )}
                  </div>
                  <h3 className={`text-md font-semibold ${activeCard ? "text-white" : "text-gray-200"}`}>
                    {s.title}
                  </h3>
                  <p className={`text-sm ${activeCard ? "text-gray-200" : "text-gray-400"} text-center`}>
                    {s.short}
                  </p>
                  <span className={`mt-auto text-sm ${activeCard ? "text-[#d8cfbc]" : "text-gray-500"}`}>
                    {i + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Description */}
      <div className="mt-8 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={stages[active].id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="text-gray-200 text-center max-w-3xl text-lg"
          >
            {stages[active].long}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
