import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Bicycle from "./pages/Bicycle/Bicycle";
import ScrollToTop from "./componenets/ScrollToTop/ScrollToTop";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bicycle/:name" element={<Bicycle />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
