import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//components
import App from "./Components/App.tsx";
import Navbar from "./Components/Navbar.tsx";
import Services from "./Components/Services.tsx";
import Participation from "./Components/Participation.tsx";
import Footer from "./Components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <App />
    <Services />
    <Participation />
    <Footer />
  </StrictMode>,
);
