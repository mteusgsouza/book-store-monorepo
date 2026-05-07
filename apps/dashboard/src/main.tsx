import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "@workspace/ui/globals.css"
import App from "./App.tsx"
import { SectionCards } from "./components/section-cards.tsx"
import { TooltipProvider } from "@workspace/ui/components/tooltip"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<SectionCards />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </StrictMode>
)
