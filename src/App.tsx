import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Agents from "./pages/Agents";
import AgentDetail from "./pages/AgentDetail";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Press from "./pages/Press";
import Partners from "./pages/Partners";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import Consulting from "./pages/services/Consulting";
import CustomAgents from "./pages/services/CustomAgents";
import Integrations from "./pages/services/Integrations";
import Industries from "./pages/Industries";
import HealthcareIndustry from "./pages/industries/Healthcare";
import FinanceIndustry from "./pages/industries/Finance";
import RetailIndustry from "./pages/industries/Retail";
import ManufacturingIndustry from "./pages/industries/Manufacturing";
import RealEstateIndustry from "./pages/industries/RealEstate";
import Education from "./pages/Education";
import InsuranceIndustry from "./pages/industries/Insurance";
import LogisticsIndustry from "./pages/industries/Logistics";
import ProfessionalServicesIndustry from "./pages/industries/ProfessionalServices";
import Trust from "./pages/Trust";
import AgentInventory from "./pages/AgentInventory";
import CookiePolicy from "./pages/CookiePolicy";
import Compliance from "./pages/Compliance";
import AcceptableUse from "./pages/AcceptableUse";
import DPA from "./pages/DPA";
import SLA from "./pages/SLA";
import Security from "./pages/Security";
import APITerms from "./pages/APITerms";
import DMCA from "./pages/DMCA";
import ResponsibleAI from "./pages/ResponsibleAI";
import Accessibility from "./pages/Accessibility";
import VulnerabilityDisclosure from "./pages/VulnerabilityDisclosure";
import SystemRequirements from "./pages/SystemRequirements";
import Changelog from "./pages/Changelog";
import Status from "./pages/Status";
import AIDisclosure from "./pages/AIDisclosure";
import PrivacyRights from "./pages/PrivacyRights";
import DoNotSell from "./pages/DoNotSell";
import CookieSettings from "./pages/CookieSettings";
import LegalNotices from "./pages/LegalNotices";
import PrivacyContact from "./pages/PrivacyContact";
import AuthorizedAgent from "./pages/AuthorizedAgent";
import SecurityReport from "./pages/SecurityReport";
import CookieConsent from "@/components/CookieConsent";
import Legal from "./pages/Legal";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false} defaultTheme="light">
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/custom-agents" element={<CustomAgents />} />
          <Route path="/services/integrations" element={<Integrations />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
          <Route path="/industries/finance" element={<FinanceIndustry />} />
          <Route path="/industries/retail" element={<RetailIndustry />} />
          <Route path="/industries/manufacturing" element={<ManufacturingIndustry />} />
          <Route path="/industries/real-estate" element={<RealEstateIndustry />} />
          <Route path="/industries/insurance" element={<InsuranceIndustry />} />
          <Route path="/industries/logistics" element={<LogisticsIndustry />} />
          <Route path="/industries/professional-services" element={<ProfessionalServicesIndustry />} />
          <Route path="/education" element={<Education />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/inventory" element={<AgentInventory />} />
          <Route path="/agents/:slug" element={<AgentDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Legal & Compliance */}
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/cookie-settings" element={<CookieSettings />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/acceptable-use" element={<AcceptableUse />} />
          <Route path="/dpa" element={<DPA />} />
          <Route path="/sla" element={<SLA />} />
          <Route path="/security" element={<Security />} />
          <Route path="/api-terms" element={<APITerms />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/responsible-ai" element={<ResponsibleAI />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/vulnerability-disclosure" element={<VulnerabilityDisclosure />} />
          <Route path="/security-report" element={<SecurityReport />} />
          <Route path="/system-requirements" element={<SystemRequirements />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/status" element={<Status />} />
          <Route path="/ai-disclosure" element={<AIDisclosure />} />
          <Route path="/privacy-rights" element={<PrivacyRights />} />
          <Route path="/do-not-sell" element={<DoNotSell />} />
          <Route path="/legal-notices" element={<LegalNotices />} />
          <Route path="/privacy-contact" element={<PrivacyContact />} />
          <Route path="/authorized-agent" element={<AuthorizedAgent />} />
          <Route path="/legal" element={<Legal />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
