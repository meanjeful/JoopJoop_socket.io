import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./components/pages/chat";
import Community from "./components/pages/community";
import Home from "./components/pages/home";
import Schedule from "./components/pages/schedule";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Button from "./components/button";
import Card from "./components/card_gathering";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Card />
        <Switch>
          <Route path={["/", "/home"]} exact component={Home} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/chat" component={Chat} />
          <Route path="/community" component={Community} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
