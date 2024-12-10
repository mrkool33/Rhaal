import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./components/SignUp";
import SignIn from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import VerifyCode from "./components/VerifyCode";
import SetnewPassword from "./components/SetnewPassword";
import Account from "./components/Account";
import Admin from "./components/utils/admin";
import Discover from "./components/Discover";
import DiscoverDetails from "./components/DiscoverDetails ";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Verify-Code" element={<VerifyCode />} />
        <Route path="/SetnewPassword" element={<SetnewPassword />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discoverdetaisls/:id" element={<DiscoverDetails />} />
      </Routes>
    </div>
  );
}

export default App;
