import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Bicycle from "./pages/Bicycle/Bicycle";
import Cart from "./pages/Cart/Cart";
import ScrollToTop from "./componenets/ScrollToTop/ScrollToTop";
import Checkout from "./pages/Checkout/Checkout";
import { ProductsContext } from "./context/ProductsContext";
import GlobalStyles from "./globalStyle";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { AuthContext } from "./context/AuthContext";
import Profile from "./pages/Profile/Profile";

function App() {
  const { fetchProducts } = useContext(ProductsContext);
  const { isLoggedin, setIsLoggedin } = useContext(AuthContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken") !== null;
    token && setIsLoggedin(token);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/bicycle/:name" element={<Bicycle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route element={<PublicRoutes redirectPath="/" />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<PrivateRoutes redirectPath="/" />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
