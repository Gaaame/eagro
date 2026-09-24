import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

// Components
import App from "./Components/App.tsx";
import Navbar from "./Components/Navbar.tsx";
import Services from "./Components/Services.tsx";
import Participation from "./Components/Participation.tsx";
import Footer from "./Components/Footer.tsx";
import Contact from "./Components/Contact.tsx";
import Loan from "./Components/Loan.tsx";
import Link from "./Components/Link.tsx";
import Program from "./Components/Program.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
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

          {/* Loan */}
          <Route path="/loan" element={<Loan />} />

          {/* Program */}
          <Route path="/program" element={<Program />} />

          {/* Gov Links */}
          <Route path="/links" element={<Link />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
