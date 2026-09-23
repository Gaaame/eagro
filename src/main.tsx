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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
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

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
