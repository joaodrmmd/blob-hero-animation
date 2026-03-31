import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Preloader from "@/components/effects/Preloader";
import Index from "./pages/Index.tsx";
import Cheatsheet from "./pages/Cheatsheet.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [showPreloader, setShowPreloader] = useState(
    () => !sessionStorage.getItem("preloaded")
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}

        <div
          style={{
            visibility: showPreloader ? "hidden" : "visible",
            pointerEvents: showPreloader ? "none" : "auto",
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cheatsheet" element={<Cheatsheet />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;