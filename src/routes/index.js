import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Home from 'pages/Home';
import PricePlanPage from 'components/PricePlan';
import StripeCheckout from 'pages/StripeCheckout';
import ConnectShopify from 'pages/ConnectShopify';
import Login from 'pages/Login';
import Register from 'pages/Register';
import RewardPage from 'pages/RewardPage';
import Dashboard from 'pages/Dashboard';
import Customers from 'pages/Customers';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/connect-shopify" component={ConnectShopify} />
        <Route exact path="/stripe-checkout" component={StripeCheckout} />
        <Route exact path="/pricing" component={PricePlanPage} />
        <Route exact path="/reward" component={RewardPage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
