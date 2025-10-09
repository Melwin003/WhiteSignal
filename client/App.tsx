import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Signals from "./pages/Signals";
import Watchlist from "./pages/Watchlist";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/privacy"; 

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/subscribe" element={<Signup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/feed" element={<Signals />} />
            <Route path="/signals" element={<Signals />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/stocks" element={<Signup />} />
            <Route path="/privacy" element={<Privacy />} />  {/* ✅ Add this route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
