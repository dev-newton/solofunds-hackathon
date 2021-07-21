import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Kycform from "./pages/Kycform";
import IdSelfieVerify from "./pages/IdSelfieVerify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kyc/verify-liveness" component={IdSelfieVerify} />
          <Route exact path="/kyc/new-customer" component={Kycform} />
          {/* <Route path="/docs" component={Docs} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
