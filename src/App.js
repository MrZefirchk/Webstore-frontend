import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/UI/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BraceletsCatalogPage from "./pages/BraceletsCatalogPage";
import ContactsPage from "./pages/ContactsPage";
import {
  ABOUT_PAGE,
  CATALOG_PAGE,
  CONTACTS_PAGE,
  HOME_PAGE,
} from "./constants/routs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path={HOME_PAGE} element={<HomePage />} />
        <Route path={ABOUT_PAGE} element={<AboutPage />} />
        <Route path={CATALOG_PAGE} element={<BraceletsCatalogPage />} />
        <Route path={CONTACTS_PAGE} element={<ContactsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
