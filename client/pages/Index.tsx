import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import HowItWorksCarousel from "@/components/HowItWorksCarousel";

// ✅ Olive Drab icons
import SmartIcon from "@/assets/icons/why-smart.svg";
import ValidateIcon from "@/assets/icons/why-validate.svg";
import SignalsIcon from "@/assets/icons/why-signals.svg";

// ✅ RollupTable (enhanced table layout with summary bar)
function RollupTable() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [sortKey, setSortKey] = useState<
    "company_name" | "total_trades" | "total_value"
  >("total_value");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const fetchRollups = async (attempt = 1) => {
    try {
      const res = await fetch("https://35.225.124.79.sslip.io/webhook/rollups");
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const json = await res.json();
      const data = json.data ?? json;
      setRows(data);
      setError(null);
    } catch (err: any) {
      console.error(`Attempt ${attempt} failed:`, err.message);
      if (attempt < 3) {
        setTimeout(() => fetchRollups(attempt + 1), 5000);
        setRetryCount(attempt);
      } else {
        setError("Unable to load rollup data after multiple attempts.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRollups();
  }, []);

  const totalCompanies = rows.length;
  const totalTrades = rows.reduce(
    (sum, r) => sum + (parseInt(r.total_trades) || 0),
    0
  );
  const totalValue = rows.reduce(
    (sum, r) => sum + (parseFloat(r.total_value) || 0),
    0
  );

  const normalized = (value: any) => {
    if (value === null || value === undefined) return 0;
    if (typeof value === "string") {
      const n = parseFloat(value.replace(/[,\s]/g, ""));
      return isNaN(n) ? 0 : n;
    }
    if (typeof value === "number") return value;
    return 0;
  };

  const displayedRows = rows.sort((a, b) => {
    if (sortKey === "company_name") {
      const av = (a.company_name || "").toLowerCase();
      const bv = (b.company_name || "").toLowerCase();
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    }
    const av = normalized(a[sortKey]);
    const bv = normalized(b[sortKey]);
    return sortDir === "asc" ? av - bv : bv - av;
  });

  const toggleSort = (
    key: "company_name" | "total_trades" | "total_value"
  ) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-300/60 rounded w-1/3 mx-auto"></div>
        <div className="h-6 bg-gray-300/40 rounded"></div>
        <div className="h-6 bg-gray-300/40 rounded"></div>
        <div className="h-6 bg-gray-300/40 rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-4">
        <p>{error}</p>
        <p className="text-sm text-gray-500 mt-2">
          Please refresh or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      {/* ✅ Summary Bar */}
      <div className="flex flex-wrap items-center justify-center gap-6 bg-[#0f1a17] text-[#fffbf4] py-4 px-4 sm:px-6 mb-4 rounded-xl ring-1 ring-white/10">
        <div className="flex flex-wrap gap-6 justify-center">
          <p className="text-sm sm:text-base font-medium">
            <span className="font-bold">{totalCompanies}</span> Companies
          </p>
          <p className="text-sm sm:text-base font-medium">
            <span className="font-bold">{totalTrades}</span> Total Trades
          </p>
          <p className="text-sm sm:text-base font-medium">
            ₹<span className="font-bold">{totalValue.toFixed(2)}</span> Cr Total Value
          </p>
        </div>
      </div>

      {/* ✅ Enhanced Interactive Table */}
      <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#fffbf4]">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#11201d] text-[#fffbf4] sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-xs sm:text-sm font-semibold">
                <button
                  className="inline-flex items-center gap-2 hover:opacity-90"
                  onClick={() => toggleSort("company_name")}
                >
                  Company
                  <span className="text-[10px] opacity-80">
                    {sortKey === "company_name"
                      ? sortDir === "asc"
                        ? "▲"
                        : "▼"
                      : ""}
                  </span>
                </button>
              </th>
              <th className="px-6 py-3 text-xs sm:text-sm font-semibold">
                <button
                  className="inline-flex items-center gap-2 hover:opacity-90"
                  onClick={() => toggleSort("total_trades")}
                >
                  Trades
                  <span className="text-[10px] opacity-80">
                    {sortKey === "total_trades"
                      ? sortDir === "asc"
                        ? "▲"
                        : "▼"
                      : ""}
                  </span>
                </button>
              </th>
              <th className="px-6 py-3 text-xs sm:text-sm font-semibold">
                <button
                  className="inline-flex items-center gap-2 hover:opacity-90"
                  onClick={() => toggleSort("total_value")}
                >
                  Value (₹ Cr)
                  <span className="text-[10px] opacity-80">
                    {sortKey === "total_value"
                      ? sortDir === "asc"
                        ? "▲"
                        : "▼"
                      : ""}
                  </span>
                </button>
              </th>
              <th className="px-6 py-3 text-xs sm:text-sm font-semibold">
                Highlight
              </th>
            </tr>
          </thead>
          <motion.tbody layout>
            {displayedRows.map((row, i) => {
              const value = parseFloat(row.total_value);
              let rowColor = "bg-[#fffbf4]";
              if (value > 10) rowColor = "bg-green-50";
              else if (value > 0) rowColor = "bg-[#d8cfbc]/40";
              else if (value === 0) rowColor = "bg-gray-50";

              return (
                <motion.tr
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`${rowColor} border-b border-[#11201d]/10 hover:bg-[#d8cfbc]/60 transition-colors`}
                >
                  <td className="px-6 py-4 font-medium text-[#11201d] truncate max-w-[280px]">
                    {row.company_name || "—"}
                  </td>
                  <td className="px-6 py-4 text-[#11201d]">
                    {row.total_trades ?? "—"}
                  </td>
                  <td className="px-6 py-4 text-[#11201d]">
                    {row.total_value ?? "—"}
                  </td>
                  <td className="px-6 py-4 text-[#11201d]/90 italic">
                    {row.highlight && row.highlight !== "null"
                      ? row.highlight.replace(/^"|"$/g, "")
                      : "No major update."}
                  </td>
                </motion.tr>
              );
            })}
          </motion.tbody>
        </table>
      </div>

      {retryCount > 0 && !error && (
        <p className="text-center text-sm text-gray-400 mt-3">
          Retrying… attempt {retryCount + 1}/3
        </p>
      )}
    </div>
  );
}

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

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="min-h-screen brand-dark text-brand-white">
      <Navigation showHomeButton={false} />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 lg:px-16 py-8 lg:py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-6 lg:mb-8">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold">
              Welcome to
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              WhiteSignal.
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-8 lg:mb-12"
          >
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6 lg:mb-8">
              Turning filings into foresight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Button
                asChild
                className="bg-black text-white text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 py-4 lg:py-6 h-auto font-medium hover:bg-gray-900"
              >
                <Link to="/feed">View Live Feed</Link>
              </Button>
              <Button
                asChild
                className="bg-black text-white text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 py-4 lg:py-6 h-auto font-medium hover:bg-gray-900"
              >
                <Link to="/subscribe">Subscribe for Alerts</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-8 lg:mt-16 rounded-lg overflow-hidden">
          <div
            ref={imageRef}
            className="relative w-full cursor-none group"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/51315a0edc2e7868f9d5684e1086b2ef148c9f1b?width=2361"
              alt="WhiteSignal Dashboard Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div
              className="absolute inset-0 w-full h-full rounded-lg transition-all duration-150 ease-out"
              style={{
                backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fdc016f00cda84f57977f3ff74e213e51%2F56636e8892434c9d8125335c106c160c?format=webp&width=800')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                WebkitMask: isHovering
                  ? `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, transparent 35%, transparent 40%, black 55%, black 100%)`
                  : "none",
                mask: isHovering
                  ? `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, transparent 35%, transparent 40%, black 55%, black 100%)`
                  : "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* Why Use WhiteSignal */}
      <section className="px-4 sm:px-8 lg:px-16 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#fffbf4]">
          Why use WhiteSignal?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Spot Smart Money Moves",
              text: "Track insider purchases and sales in near real time. Identify signals before they trend in the news.",
              img: SmartIcon,
            },
            {
              title: "Validate Your Trades",
              text: "Back your thesis with insider activity data. Are insiders buying when you want to go long, or selling quietly?",
              img: ValidateIcon,
            },
            {
              title: "Get Signals That Matter",
              text: "Avoid noise. Only curated disclosures that pass strict filters and offer actionable insights.",
              img: SignalsIcon,
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl relative border border-[#565449]/30 p-6 flex flex-col items-center text-center gap-4
                         bg-[#d8cfbc]
                         shadow-[inset_0px_1px_2px_rgba(255,255,255,0.6),0_6px_16px_rgba(0,0,0,0.25)]
                         hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                         transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-[#565449]/10 shadow-inner">
                <img src={f.img} alt={f.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#11201d]">{f.title}</h3>
              <p className="text-[#11201d]/80">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-0 bg-[#11201d]/0">
  <div className="relative w-full overflow-visible">
    <HowItWorksCarousel />
  </div>
</section>


      {/* Rollups Section */}
      <section className="px-4 sm:px-8 lg:px-16 py-16 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center text-[#fffbf4]"
        >
          Company Rollups & Highlights
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow p-6"
        >
          <RollupTable />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
