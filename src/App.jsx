<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Links from "./pages/Links";
import Leaderboard from "./pages/Leaderboard";

import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/links" element={<Links />} />
      </Route>
    </Routes>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Quote from "./pages/Quote.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 72176ba77c1f9b4f4515e0aa547d83d66a57b36d
  );
}
