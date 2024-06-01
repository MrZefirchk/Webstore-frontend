import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/UI/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BraceletsCatalogPage from "./pages/BraceletsCatalogPage";
import ContactsPage from "./pages/ContactsPage";
import {
  ABOUT_PAGE,
  CART_PAGE,
  CATALOG_PAGE,
  CONTACTS_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNIN_PAGE,
} from "./constants/routs";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import CartPage from "./pages/CartPage";
import BraceletInfoPage from "./pages/BraceletInfoPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path={HOME_PAGE} element={<HomePage />} />
        <Route path={ABOUT_PAGE} element={<AboutPage />} />
        <Route path={CATALOG_PAGE} element={<BraceletsCatalogPage />} />
        <Route path={CONTACTS_PAGE} element={<ContactsPage />} />
        <Route path={LOGIN_PAGE} element={<LoginPage />} />
        <Route path={SIGNIN_PAGE} element={<SigninPage />} />
        {/* <Route path={CART_PAGE} element={<CartPage />} /> */}
        <Route path="/bracelet/:id" element={<BraceletInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
