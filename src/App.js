import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "./components/Header";
import PricingPage from "./components/PricingPage";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={PricingPage} />
        <Route component={NotFound} />
      </Switch>
      <ToastContainer
            autoClose={4000}
            transition={Slide}
            draggablePercent={40}
            hideProgressBar={true}
          />
    </Router>
  );
}

export default App;
