import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

// Components
import App from "./Components/App.tsx";
import About from "./Components/About.tsx";
import Navbar from "./Components/Navbar.tsx";
import Services from "./Components/Services.tsx";
import Participation from "./Components/Participation.tsx";
import Footer from "./Components/Footer.tsx";
import Contact from "./Components/Contact.tsx";
import Link from "./Components/Link.tsx";
import Program from "./Components/Program.tsx";
import Farmer from "./Components/Farmer.tsx";
import Supplier from "./Components/Supplier.tsx";
import LoadingIntro from "./Components/LoadingIntro.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingIntro />
      <Navbar />

      <Routes>
        <Route>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <App />
                <Services />
                <Participation />
              </>
            }
          />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Program */}
          <Route path="/program" element={<Program />} />

          {/* Gov Links */}
          <Route path="/links" element={<Link />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Farmer */}
          <Route path="/farmer" element={<Farmer />} />

          {/* Supplier */}
          <Route path="/supplier" element={<Supplier />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
