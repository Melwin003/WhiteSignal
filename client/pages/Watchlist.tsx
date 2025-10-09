import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Filter, ArrowLeft } from "lucide-react";

export default function Watchlist() {
  const [activeFilter, setActiveFilter] = useState<string>("");

  // Simulated filtered signals based on user's selected stocks
  const watchlistSignals = [
    {
      id: 1,
      company: "Tata Motors Ltd.",
      role: "👤 Promoter Group",
      action: "💼 Bought ₹25 Cr worth of shares",
      date: "📅 July 28, 2025, 10:32 AM",
      type: "Buy Alert",
      confidence: "🧠 8.3/10 - High Confidence",
      sector: "Automotive",
      sortDate: new Date("2025-07-28T10:32:00")
    },
    {
      id: 2,
      company: "Infosys Ltd.",
      role: "👤 Senior Management",
      action: "💼 Sold ₹18.4 Cr worth of shares",
      date: "📅 July 25, 2025, 11:20 AM",
      type: "Sell Alert",
      confidence: "🧠 7.1/10 - Medium Confidence",
      sector: "Technology",
      sortDate: new Date("2025-07-25T11:20:00")
    },
    {
      id: 3,
      company: "Reliance Industries Ltd.",
      role: "👤 Promoter Group",
      action: "💼 Bought ₹45 Cr worth of shares",
      date: "📅 July 29, 2025, 09:15 AM",
      type: "Buy Alert",
      confidence: "🧠 9.2/10 - High Confidence",
      sector: "Energy",
      sortDate: new Date("2025-07-29T09:15:00")
    },
    {
      id: 4,
      company: "TCS Ltd.",
      role: "👤 Senior Management",
      action: "💼 Sold ₹12 Cr worth of shares",
      date: "📅 July 26, 2025, 02:45 PM",
      type: "Sell Alert",
      confidence: "🧠 6.8/10 - Medium Confidence",
      sector: "Technology",
      sortDate: new Date("2025-07-26T14:45:00")
    },
    {
      id: 5,
      company: "HDFC Bank Ltd.",
      role: "👤 Independent Director",
      action: "💼 Bought ₹8.5 Cr worth of shares",
      date: "📅 July 27, 2025, 11:30 AM",
      type: "Buy Alert",
      confidence: "🧠 7.9/10 - Medium Confidence",
      sector: "Banking",
      sortDate: new Date("2025-07-27T11:30:00")
    },
    {
      id: 6,
      company: "Adani Ports Ltd.",
      role: "👤 Promoter Group",
      action: "💼 Bought ₹32 Cr worth of shares",
      date: "📅 July 30, 2025, 10:20 AM",
      type: "Buy Alert",
      confidence: "🧠 8.7/10 - High Confidence",
      sector: "Infrastructure",
      sortDate: new Date("2025-07-30T10:20:00")
    }
  ];

  const filteredAndSortedSignals = useMemo(() => {
    let filtered = [...watchlistSignals];

    switch (activeFilter) {
      case "date":
        filtered.sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
        break;
      case "type":
        filtered.sort((a, b) => {
          if (a.type === b.type) return 0;
          return a.type === "Buy Alert" ? -1 : 1;
        });
        break;
      case "sector":
        filtered.sort((a, b) => a.sector.localeCompare(b.sector));
        break;
      default:
        // Default sort by date (newest first)
        filtered.sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
    }

    return filtered;
  }, [activeFilter]);

  return (
    <div className="min-h-screen">
      {/* Header with background image - identical to Signals page */}
      <div 
        className="relative h-[630px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url('https://api.builder.io/api/v1/image/assets/TEMP/7a5dab041e06b234429462f7896b67b1b52fa550?width=2884')`,
        }}
      >
        <Navigation showHomeButton={true} />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-8">
            <h1 className="text-6xl font-bold mb-4 tracking-tight leading-tight">
              Your Watchlist Alerts
            </h1>
            <p className="text-2xl font-medium">
              Personalized insider signals for your selected stocks
            </p>
          </div>
        </div>
      </div>

      {/* Main content - identical structure to Signals page */}
      <div className="brand-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8 lg:py-16">
          {/* Back to Live Feed Button */}
          <div className="mb-6 lg:mb-8">
            <Button 
              asChild
              variant="outline"
              className="mb-4 border-gray-400 text-gray-700 hover:bg-gray-100"
            >
              <Link to="/feed" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Live Feed
              </Link>
            </Button>
          </div>

          {/* Watchlist Board Header */}
          <div className="mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Your Watchlist Board
              <span className="text-sm sm:text-base font-bold ml-2 lg:ml-4">( Refresh Board)</span>
            </h2>
          </div>

          {/* Filters - identical to Signals page */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 lg:mb-12">
            <Filter className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeFilter === "date" ? "default" : "outline"}
                className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => setActiveFilter(activeFilter === "date" ? "" : "date")}
              >
                Date {activeFilter === "date" && "↓"}
              </Badge>
              <Badge
                variant={activeFilter === "type" ? "default" : "outline"}
                className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => setActiveFilter(activeFilter === "type" ? "" : "type")}
              >
                Type {activeFilter === "type" && "↓"}
              </Badge>
              <Badge
                variant={activeFilter === "sector" ? "default" : "outline"}
                className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => setActiveFilter(activeFilter === "sector" ? "" : "sector")}
              >
                Sector {activeFilter === "sector" && "↓"}
              </Badge>
            </div>
          </div>

          {/* Watchlist Signals Cards Grid - identical structure to Signals page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
            {filteredAndSortedSignals.map((signal) => (
              <Card key={signal.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="space-y-2 lg:space-y-3">
                    <h3 className="text-lg lg:text-xl font-medium text-black">{signal.company}</h3>
                    <p className="text-sm text-gray-800">{signal.role}</p>
                    <p className="text-sm text-gray-800">{signal.action}</p>
                    <p className="text-sm text-gray-800">{signal.date}</p>
                    <div className="flex items-center justify-between pt-2">
                      <Badge
                        variant={signal.type === "Buy Alert" ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {signal.type}
                      </Badge>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {signal.sector}
                      </span>
                    </div>
                    <p className="text-sm text-gray-800">{signal.confidence}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-16">
            <Button 
              asChild
              className="bg-black text-white text-xl sm:text-2xl lg:text-3xl px-6 sm:px-8 py-4 lg:py-6 h-auto font-medium hover:bg-gray-900"
            >
              <Link to="/feed">View All Signals</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-black text-black text-xl sm:text-2xl lg:text-3xl px-6 sm:px-8 py-4 lg:py-6 h-auto font-medium hover:bg-black hover:text-white"
            >
              <Link to="/signup">Update Watchlist</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
