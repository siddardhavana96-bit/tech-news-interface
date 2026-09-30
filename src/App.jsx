import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;