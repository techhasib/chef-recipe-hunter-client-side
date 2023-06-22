import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Singup from "./components/Singup";
import Singin from "./components/Singin";
import Error from "./components/Error";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/singin" element={<Singin />} />
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
