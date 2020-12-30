import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage.component";
import "./App.css";

// Hats page component
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

// Sneakers page component
const SneakersPage = () => (
  <div>
    <h1>SNEAKER PAGE</h1>
  </div>
);

// Jackets page component
const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
);

// Womens page component
const WomensPage = () => (
  <div>
    <h1>WOMENS PAGE</h1>
  </div>
);

// Mens page component
const MensPage = () => (
  <div>
    <h1>MENS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/shop/sneakers" component={SneakersPage} />
        <Route path="/shop/jackets" component={JacketsPage} />
        <Route path="/shop/womens" component={WomensPage} />
        <Route path="/shop/mens" component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
