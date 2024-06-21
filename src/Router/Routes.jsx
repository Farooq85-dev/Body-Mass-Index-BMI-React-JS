import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WelcomeComp from "../Components/Welcome";
import BmiComp from "../Components/Bmi";

function RouterCmp() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<WelcomeComp />} /> {/* Default route */}
        <Route path="/bmi" element={<BmiComp />} /> {/* Default route */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouterCmp;
