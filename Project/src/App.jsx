import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Login from "./components/Header/Login";
import Register from "./components/Header/Register";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import { Routes,Route } from "react-router-dom";
import Owner from "./components/Residencies/Owner";
import UserContextProvider from "./components/context/UserContextProvider"
function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        {/* <Hero /> */}
      </div>
      <Routes>
      <Route path="/owner" element={<Owner/>}/>
      <Route path="/register"  element={<Register />}/>
      <Route path="/login"  element={<Login />}/>
      <Route path="/header"  element={<Header />}/>
      <Route path="/companies"  element={<Companies />}/>
      <Route path="/residencies"  element={<Residencies/>}/>
      <Route path="/value"  element={<Value/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/getstarted"  element={<GetStarted/>}/>
      <Route path="/" element={<Hero/>}/>
      {/* <Route path="/"  element={<Footer/>}/> */}
      </Routes>
      <Footer/>
    </div>
    </UserContextProvider>
  );
}

export default App;
