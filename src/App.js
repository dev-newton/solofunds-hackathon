import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Kycform from "./pages/Kycform";
import IdSelfieVerify from "./pages/IdSelfieVerify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kyc/verify-liveness" component={IdSelfieVerify} />
          <Route exact path="/kyc/new-customer" component={Kycform} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
