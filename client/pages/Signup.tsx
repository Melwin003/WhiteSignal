import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [promoterBuying, setPromoterBuying] = useState(true);
  const [insiderSelling, setInsiderSelling] = useState(true);
  const [volumeSpike, setVolumeSpike] = useState(false);

  const stockOptions = [
    "TCS",
    "ADANIPORT",
    "INFOSYS",
    "RELIANCE",
    "HDFC BANK",
    "ICICI BANK",
    "WIPRO",
    "BHARTI AIRTEL",
    "MARUTI SUZUKI",
    "BAJAJ FINANCE"
  ];

  return (
    <div className="min-h-screen">
      {/* Header with background image */}
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
              WhiteSignal.
            </h1>
            <p className="text-2xl font-medium">
              Get alerts for meaningful Stock Signals.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="brand-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-8 lg:py-16">
          {/* Email Section */}
          <div className="mb-8 lg:mb-16">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-6 leading-tight">
                Enter Your E-mail
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
                we will send the alerts on this email.
              </p>
            </div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-md text-base lg:text-lg p-3 lg:p-4 h-auto"
            />
          </div>

          {/* Stock Selection Section */}
          <div className="mb-8 lg:mb-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-6 leading-tight">
                Select your Stock
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6">
                Signal alerts of only these stocks would be mailed to you.
              </p>
              <Select value={selectedStock} onValueChange={setSelectedStock}>
                <SelectTrigger className="max-w-md text-base lg:text-lg p-3 lg:p-4 h-auto">
                  <SelectValue placeholder="Choose a stock" />
                </SelectTrigger>
                <SelectContent>
                  {stockOptions.map((stock) => (
                    <SelectItem key={stock} value={stock}>
                      {stock}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a618c5094acfb27da8b76cfcde961d2955f197af?width=1250"
                alt="Indian Rupee coins"
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[625px] h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Preferences Section */}
          <div className="mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 lg:mb-12 leading-tight text-center">
              Set Preferences
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-center justify-between p-6 bg-white/50 rounded-lg border border-gray-200 shadow-sm">
                  <span className="text-lg sm:text-xl lg:text-2xl text-black font-medium">
                    Promoter buying alerts
                  </span>
                  <Switch
                    checked={promoterBuying}
                    onCheckedChange={setPromoterBuying}
                    className="data-[state=checked]:bg-black data-[state=unchecked]:bg-gray-300"
                  />
                </div>

                <div className="flex items-center justify-between p-6 bg-white/50 rounded-lg border border-gray-200 shadow-sm">
                  <span className="text-lg sm:text-xl lg:text-2xl text-black font-medium">
                    Insider selling alerts
                  </span>
                  <Switch
                    checked={insiderSelling}
                    onCheckedChange={setInsiderSelling}
                    className="data-[state=checked]:bg-black data-[state=unchecked]:bg-gray-300"
                  />
                </div>

                <div className="flex items-center justify-between p-6 bg-white/50 rounded-lg border border-gray-200 shadow-sm">
                  <span className="text-lg sm:text-xl lg:text-2xl text-black font-medium">
                    Volume spike before earnings
                  </span>
                  <Switch
                    checked={volumeSpike}
                    onCheckedChange={setVolumeSpike}
                    className="data-[state=checked]:bg-black data-[state=unchecked]:bg-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <Button
              asChild
              className="bg-gray-800 text-white text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-4 lg:py-6 h-auto rounded-full hover:bg-gray-900"
            >
              <Link to="/watchlist">Start now</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
