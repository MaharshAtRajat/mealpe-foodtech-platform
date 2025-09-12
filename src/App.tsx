import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Products
import CanteenDigitisation from "./pages/products/CanteenDigitisation";
import MessDigitisation from "./pages/products/MessDigitisation";
import { MedMeals } from "./pages/products/MedMeals";

// Solutions by Industry
import { Hostels } from "./pages/solutions/industry/Hostels";
import { Coliving } from "./pages/solutions/industry/Coliving";
import { Coworking } from "./pages/solutions/industry/Coworking";
import { Commercial } from "./pages/solutions/industry/Commercial";
import { Corporate } from "./pages/solutions/industry/Corporate";
import { Hospital } from "./pages/solutions/industry/Hospital";
import { Universities } from "./pages/solutions/industry/Universities";
import { Clubs } from "./pages/solutions/industry/Clubs";
import { Airport } from "./pages/solutions/industry/Airport";

// Solutions by Hardware
import { MealCards } from "./pages/solutions/hardware/MealCards";
import { SelfServingKiosks } from "./pages/solutions/hardware/SelfServingKiosks";

// Services
import { VendorAggregation } from "./pages/services/VendorAggregation";
import { CanteenSetup } from "./pages/services/CanteenSetup";
import { SelfOrderingKiosk } from "./pages/services/SelfOrderingKiosk";
import { CampusFoodDelivery } from "./pages/services/CampusFoodDelivery";
import { FoodAudit } from "./pages/services/FoodAudit";

// Other Pages
import { Features } from "./pages/Features";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

// Forms
import ContactForm from "./pages/forms/ContactForm";
import DemoRequestForm from "./pages/forms/DemoRequestForm";
import ExpertCallForm from "./pages/forms/ExpertCallForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Products */}
          <Route path="/products/canteen-digitisation" element={<CanteenDigitisation />} />
          <Route path="/products/mess-digitisation" element={<MessDigitisation />} />
          <Route path="/products/medmeals" element={<MedMeals />} />
          
          {/* Solutions by Industry */}
          <Route path="/solutions/industry/hostels" element={<Hostels />} />
          <Route path="/solutions/industry/coliving" element={<Coliving />} />
          <Route path="/solutions/industry/coworking" element={<Coworking />} />
          <Route path="/solutions/industry/commercial" element={<Commercial />} />
          <Route path="/solutions/industry/corporate" element={<Corporate />} />
          <Route path="/solutions/industry/hospital" element={<Hospital />} />
          <Route path="/solutions/industry/universities" element={<Universities />} />
          <Route path="/solutions/industry/clubs" element={<Clubs />} />
          <Route path="/solutions/industry/airport" element={<Airport />} />
          
          {/* Solutions by Hardware */}
          <Route path="/solutions/hardware/meal-cards" element={<MealCards />} />
          <Route path="/solutions/hardware/self-serving-kiosks" element={<SelfServingKiosks />} />
          
          {/* Services */}
          <Route path="/services/vendor-aggregation" element={<VendorAggregation />} />
          <Route path="/services/canteen-setup" element={<CanteenSetup />} />
          <Route path="/services/self-ordering-kiosk" element={<SelfOrderingKiosk />} />
          <Route path="/services/campus-food-delivery" element={<CampusFoodDelivery />} />
          <Route path="/services/food-audit" element={<FoodAudit />} />
          
          {/* Other Pages */}
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Forms */}
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/demo-request" element={<DemoRequestForm />} />
          <Route path="/expert-call" element={<ExpertCallForm />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
