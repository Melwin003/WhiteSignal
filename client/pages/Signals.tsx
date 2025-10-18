import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import {
  Filter,
  Search,
  Calendar,
  FileText,
  TrendingUp,
  User,
  Repeat,
  CalendarDays,
} from "lucide-react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Signals() {
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [signalsData, setSignalsData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const cardsPerPage = 18;

  useEffect(() => {
    fetch("https://35.225.124.79.sslip.io/webhook/signals")
      .then((res) => res.json())
      .then((data) => setSignalsData(data))
      .catch((err) => console.error("Error fetching signals:", err));
  }, []);

  const filteredAndSortedSignals = useMemo(() => {
    let filtered = [...signalsData];

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((signal) =>
        signal.company?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (startDate || endDate) {
      filtered = filtered.filter((signal) => {
        const signalDate = new Date(signal.sortDate || signal.date);
        if (startDate && signalDate < startDate) return false;
        if (endDate && signalDate > endDate) return false;
        return true;
      });
    }

    switch (activeFilter) {
      case "date":
        filtered.sort(
          (a, b) =>
            new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
        );
        break;
      case "type":
        filtered.sort((a, b) =>
          a.type === b.type ? 0 : a.type === "Buy Alert" ? -1 : 1
        );
        break;
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
        );
    }

    return filtered;
  }, [activeFilter, signalsData, searchQuery, startDate, endDate]);

  const totalPages = Math.ceil(filteredAndSortedSignals.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentSignals = filteredAndSortedSignals.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c0d] text-[#e8e8e8] font-inter relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,251,244,0.05),transparent_80%)] animate-[networkGlow_12s_ease-in-out_infinite] z-0"></div>
      <canvas id="dataFlowCanvas" className="absolute inset-0 z-0 opacity-30"></canvas>

      {/* Navigation */}
      <div className="w-full bg-[#fffbf4] text-[#11120d] shadow-md z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
          <Link to="/" className="font-bold text-lg tracking-tight">
            WhiteSignal.
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/connect" className="hover:underline transition-all">
              Connect
            </Link>
            <Link to="/disclaimer" className="hover:underline transition-all">
              Disclaimer
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:underline transition-all"
            >
              Terms and conditions
            </Link>
            <Link
              to="/"
              className="bg-[#11120d] text-[#fffbf4] px-3 py-1 rounded hover:bg-[#1d2e2a] transition-all"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative h-[640px] bg-cover bg-center z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://api.builder.io/api/v1/image/assets/TEMP/7a5dab041e06b234429462f7896b67b1b52fa550?width=2884')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight"
          >
            Live Feed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg sm:text-xl font-medium"
          >
            Public insider trade signals connected in real-time
          </motion.p>
        </div>
      </div>

      {/* Main Feed */}
      <div className="flex-grow bg-[#0a0c0d] py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          {/* Search Bar */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full sm:w-1/2 lg:w-1/3">
              <Search className="absolute left-3 top-2.5 text-[#d8cfbc]/70 w-5 h-5" />
              <input
                type="text"
                placeholder="Search company..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 rounded-md bg-[#111418]/80 border border-[#d8cfbc]/20 text-[#fffbf4] placeholder-[#d8cfbc]/50 focus:outline-none focus:ring-1 focus:ring-[#fffbf4]/40 focus:border-[#fffbf4]/40 transition-all duration-300"
              />
            </div>
          </div>

          {/* Filters + Date Picker */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
            <Filter className="w-6 h-6 text-[#fffbf4]" />
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fffbf4]/80" />
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setCurrentPage(1);
                }}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start date"
                className="px-3 py-1.5 text-sm rounded-md bg-[#111418]/80 border border-[#fffbf4]/30 text-[#fffbf4] focus:ring-1 focus:ring-[#fffbf4]/50"
              />
              <span className="text-[#fffbf4]/70">–</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date);
                  setCurrentPage(1);
                }}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End date"
                className="px-3 py-1.5 text-sm rounded-md bg-[#111418]/80 border border-[#fffbf4]/30 text-[#fffbf4] focus:ring-1 focus:ring-[#fffbf4]/50"
              />
            </div>

            <Badge
              onClick={() =>
                setActiveFilter(activeFilter === "type" ? "" : "type")
              }
              className={`px-4 py-2 text-sm cursor-pointer border transition-all ${
                activeFilter === "type"
                  ? "bg-[#fffbf4] text-[#0a0c0d]"
                  : "text-[#e8e8e8] border border-[#fffbf4]/60"
              }`}
            >
              Type {activeFilter === "type" && "↓"}
            </Badge>
          </div>

          {/* Clarification Note */}
          <div className="max-w-6xl mx-auto mb-12 text-center bg-[#111418]/60 border border-[#d8cfbc]/20 rounded-lg px-6 sm:px-8 py-4 text-[0.88rem] sm:text-[0.95rem] text-[#d8cfbc]/85 leading-relaxed backdrop-blur-md">
            <p className="mb-2">
              <strong>Note:</strong> The “Confidence” value displayed on each
              signal card reflects the
              <em> signal’s data integrity and extraction accuracy</em>. It
              measures how certain the system is about the correctness of the
              underlying data,
              <span className="font-semibold text-[#fffbf4]">
                {" "}
                not a prediction of future performance or financial outcomes.
              </span>
            </p>
            <hr className="my-3 border-[#d8cfbc]/15 w-[95%] mx-auto" />
            <p>
              The “<strong>Buy Alert</strong>” and “<strong>Sell Alert</strong>”
              labels indicate reported
              <em> insider trading disclosures</em> from public filings. They are
              presented solely
              <span className="font-semibold text-[#fffbf4]">
                {" "}
                for informational and educational purposes
              </span>{" "}
              and do not represent trading advice or recommendations of any
              kind.
            </p>
          </div>

          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative"
          >
            {currentSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl p-[1.5px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,251,244,0.15)_0deg,rgba(216,207,188,0.05)_160deg,transparent_260deg,rgba(255,251,244,0.15)_360deg)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* ⬇️ Card wrapped in anchor link */}
                  <a
                    href={signal.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/link"
                  >
                    <Card className="relative bg-gradient-to-br from-[#111418]/90 via-[#0d0f10]/95 to-[#15191a]/90 border border-[#d8cfbc]/20 rounded-2xl backdrop-blur-2xl overflow-hidden transition-all duration-500 ease-out shadow-[0_2px_12px_rgba(0,0,0,0.6)] group-hover:shadow-[0_8px_48px_rgba(255,251,244,0.25)] group-hover:translate-y-[-1px] hover:cursor-pointer">
                      <CardContent className="relative p-6 md:p-7 space-y-3 text-[#e8e8e8] leading-relaxed">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-[1.15rem] md:text-lg font-semibold tracking-tight text-[#fffbf4] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                            {signal.company ?? "—"}
                          </h3>
                          <span className="text-[0.7rem] text-[#fffbf4]/70 italic">
                            🔗 View PDF
                          </span>
                        </div>

                        <div className="space-y-1 text-[0.85rem] md:text-sm text-[#d8cfbc]/90">
                          <div className="flex items-center gap-2">
                            <User size={14} className="text-[#d8cfbc]" />
                            <p><strong>Role:</strong> {signal.role ?? "—"}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Repeat size={14} className="text-[#d8cfbc]" />
                            <p><strong>Action:</strong> {signal.action ?? "—"}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarDays size={14} className="text-[#d8cfbc]" />
                            <p><strong>Date:</strong> {signal.date ?? "—"}</p>
                          </div>
                          {signal.note && (
                            <div className="flex items-start gap-2">
                              <FileText size={14} className="text-[#d8cfbc] mt-0.5" />
                              <p><strong>Note:</strong> {signal.note}</p>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-[#fffbf4]/15">
                          <div className="flex items-center gap-2">
                            <TrendingUp size={14} className="text-[#d8cfbc]" />
                            <Badge
                              variant={signal.type === "Buy Alert" ? "default" : "destructive"}
                              className={`${
                                signal.type === "Buy Alert"
                                  ? "bg-[#fffbf4] text-[#0a0c0d]"
                                  : "bg-[#8b2c2c]/80 text-[#f5f5f5]"
                              } text-[10px] md:text-xs px-3 py-1 rounded-full tracking-wide shadow-[inset_0_0_6px_rgba(255,251,244,0.1)] backdrop-blur-md`}
                            >
                              {signal.type}
                            </Badge>
                          </div>
                          <span className="text-[0.7rem] md:text-xs text-[#fffbf4]/80 px-2 py-0.5 rounded-full border border-[#fffbf4]/20 bg-black/20">
                            {signal.confidence}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 mt-16 text-[#fffbf4]/90 text-sm sm:text-base font-medium">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`transition-all ${
                  currentPage === 1
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-[#d8cfbc]"
                }`}
              >
                ← Previous
              </button>

              <span className="text-[#d8cfbc]/90">
                Page {currentPage} <span className="opacity-70">of</span> {totalPages}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`transition-all ${
                  currentPage === totalPages
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:text-[#d8cfbc]"
                }`}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes networkGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .react-datepicker {
          background-color: #fffbf4;
          border: 1px solid rgba(17, 18, 13, 0.2);
          color: #11120d;
          border-radius: 0.5rem;
          font-size: 0.9rem;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--in-selecting-range,
        .react-datepicker__day--in-range {
          background-color: #11120d;
          color: #fffbf4;
        }
        .react-datepicker__header {
          background-color: #fffbf4;
          color: #11120d;
          border-bottom: 1px solid rgba(17, 18, 13, 0.2);
        }
        .react-datepicker__day:hover {
          background-color: #11120d;
          color: #fffbf4;
        }
      `}</style>
    </div>
  );
}
