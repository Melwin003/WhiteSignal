import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import StockSelector from "@/components/StockSelector";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numStocks, setNumStocks] = useState(1);
  const [selectedStocks, setSelectedStocks] = useState<string[]>([]);
  const [frequency, setFrequency] = useState("daily");
  const [promoterBuying, setPromoterBuying] = useState(true);
  const [insiderSelling, setInsiderSelling] = useState(true);
  const [volumeSpike, setVolumeSpike] = useState(false);
  const [loading, setLoading] = useState(false);

  // Scroll-reveal animations for elements with [data-reveal]
  useEffect(() => {
    if (typeof window === "undefined") return;
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (revealEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const index = revealEls.indexOf(el);
            const delayMs = Math.min(index * 100, 400); // subtle stagger
            setTimeout(() => {
              el.classList.remove("opacity-0", "translate-y-6");
              el.classList.add("opacity-100", "translate-y-0");
            }, delayMs);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => {
      el.classList.add(
        "opacity-0",
        "translate-y-6",
        "transition-all",
        "duration-700",
        "ease-out"
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleStockSelect = (company: any, index: number) => {
    const updated = [...selectedStocks];
    updated[index] = `${company.issuer} (${company.isin})`;
    setSelectedStocks(updated);
  };

  const handleSubmit = async () => {
    if (!email || selectedStocks.length === 0) {
      alert("Please enter your email and select at least one stock.");
      return;
    }

    const preferences: string[] = [];
    if (promoterBuying) preferences.push("promoterBuying");
    if (insiderSelling) preferences.push("insiderSelling");
    if (volumeSpike) preferences.push("volumeSpike");

    setLoading(true);
    try {
      const res = await fetch(
        "https://35.225.124.79.sslip.io/webhook/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "MY_SUPER_SECRET_123", // must match n8n workflow
          },
          body: JSON.stringify({
            email,
            name,
            stocks: selectedStocks,
            preferences,
            frequency,
          }),
        }
      );

      const data = await res.json();
      if (data.success) {
        alert("✅ Subscription successful!");
        window.location.href = `/feed?symbols=${encodeURIComponent(
          selectedStocks.join(",")
        )}`;
      } else {
        alert("❌ Subscription failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="relative h-[630px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.24)), url('https://api.builder.io/api/v1/image/assets/TEMP/a74b05f9ecaf8e619755d9864c0c48ba85fb0455?width=2884')`,
        }}
      >
        <Navigation showHomeButton={true} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-8">
            <h1 className="text-6xl font-bold mb-4 tracking-tight leading-tight">
              Subscribe for Alerts
            </h1>
            <p className="text-2xl font-medium">
              Enter your details to get notified about insider trades
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="brand-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-8 lg:py-16 space-y-16">
          {/* Name Section */}
<div data-reveal>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
    Name
  </h2>
  <Input
    type="text"
    placeholder="Enter your full name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="max-w-md text-base lg:text-lg p-3 lg:p-4 h-auto"
  />
</div>
          {/* Email Section */}
          <div data-reveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
              E-mail
            </h2>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-md text-base lg:text-lg p-3 lg:p-4 h-auto"
            />
          </div>

          {/* Stock Selection */}
          <div className="flex flex-col lg:flex-row items-center gap-8" data-reveal>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                Select Your Stocks
              </h2>

              {/* Number of stocks */}
              <div className="mb-6">
                <label className="text-lg font-medium text-black">
                  How many stocks would you like alerts for? (max 5)
                </label>
                <select
                  value={numStocks}
                  onChange={(e) => setNumStocks(Number(e.target.value))}
                  className="ml-4 p-2 rounded bg-[#11120D] text-brand-cream border border-brand-olive"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              {/* Render stock selectors (already working fine) */}
              {Array.from({ length: numStocks }, (_, i) => (
                <div key={i} className="mb-4">
                  <StockSelector
                    onSelect={(company) => handleStockSelect(company, i)}
                  />
                </div>
              ))}
            </div>

            {/* ✅ Restored Coin Image */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a618c5094acfb27da8b76cfcde961d2955f197af?width=1250"
              alt="Indian Rupee coins"
              className="w-full max-w-[240px] lg:max-w-[500px] h-auto rounded-lg transition-transform duration-300 ease-out hover:scale-[1.02]"
            />
          </div>

          {/* Frequency */}
          <div data-reveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
              Email Frequency
            </h2>
            <p className="text-sm text-black mb-4">
              Choose how often you would like to receive curated alerts.
            </p>
            <div className="max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Daily option */}
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="frequency"
                    value="daily"
                    checked={frequency === "daily"}
                    onChange={() => setFrequency("daily")}
                    className="peer sr-only"
                  />
                  <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur p-4
                                  shadow-md hover:shadow-lg transition-all duration-300 will-change-transform
                                  hover:-translate-y-0.5 active:translate-y-0
                                  peer-checked:border-black peer-checked:ring-1 peer-checked:ring-black">
                    <div className="flex items-start gap-3">
                      <div>
                        <div className="text-base font-semibold text-black">Daily</div>
                        <div className="text-sm text-gray-600">Fresh updates every trading day.</div>
                      </div>
                    </div>
                  </div>
                </label>

                {/* Weekly option */}
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="frequency"
                    value="weekly"
                    checked={frequency === "weekly"}
                    onChange={() => setFrequency("weekly")}
                    className="peer sr-only"
                  />
                  <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur p-4
                                  shadow-md hover:shadow-lg transition-all duration-300 will-change-transform
                                  hover:-translate-y-0.5 active:translate-y-0
                                  peer-checked:border-black peer-checked:ring-1 peer-checked:ring-black">
                    <div className="flex items-start gap-3">
                      <div>
                        <div className="text-base font-semibold text-black">Weekly</div>
                        <div className="text-sm text-gray-600">A polished summary every week.</div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

                    {/* Preferences */}
                    <div data-reveal>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 text-center">
              Set Preferences
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Promoter Buying */}
              <div
                className="flex items-center justify-between p-6 bg-white/50 rounded-lg border border-gray-200 shadow-sm
                           transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl text-black font-medium">
                    Promoter buying alerts
                  </span>
                  <span className="text-sm text-gray-700">
                    Get notified when company promoters increase their stake, often a
                    signal of confidence in the business.
                  </span>
                </div>
                <Switch
                  checked={promoterBuying}
                  onCheckedChange={setPromoterBuying}
                  className="data-[state=checked]:bg-gray-800 data-[state=unchecked]:bg-gray-300"
                />
              </div>

              {/* Insider Selling */}
              <div
                className="flex items-center justify-between p-6 bg-white/50 rounded-lg border border-gray-200 shadow-sm
                           transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl text-black font-medium">
                    Insider selling alerts
                  </span>
                  <span className="text-sm text-gray-700">
                    Track when directors, executives, or key insiders sell their shares,
                    which may indicate reduced confidence.
                  </span>
                </div>
                <Switch
                  checked={insiderSelling}
                  onCheckedChange={setInsiderSelling}
                  className="data-[state=checked]:bg-gray-800 data-[state=unchecked]:bg-gray-300"
                />
              </div>

              {/* Volume Spike */}
              <div
                className="flex items-center justify-between p-6 bg-white/50 rounded-lg border border-gray-200 shadow-sm
                           transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl text-black font-medium">
                    Volume spike before earnings
                  </span>
                  <span className="text-sm text-gray-700">
                    Alerts you when trading volume surges unusually before earnings,
                    could hint at big news or market expectations.
                  </span>
                </div>
                <Switch
                  checked={volumeSpike}
                  onCheckedChange={setVolumeSpike}
                  className="data-[state=checked]:bg-gray-800 data-[state=unchecked]:bg-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center" data-reveal>
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-gray-800 text-white text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-4 lg:py-6 h-auto rounded-full
                         hover:bg-gray-900 transition-all duration-200
                         shadow-[0_6px_0_0_#1f2937] hover:shadow-[0_8px_0_0_#111827] active:shadow-[0_4px_0_0_#111827]
                         active:translate-y-[2px]"
            >
              {loading ? "Submitting..." : "Start now"}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
