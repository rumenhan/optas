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
import DashboardLayout from 'layout/DashboardLayout';
import DashboardOverview from 'pages/DashboardOverview';
import Customers from 'pages/Customers';
import DashboardPedningUsers from 'pages/DashboardPedningUsers';
import DashboardUserProfile from 'pages/DashboardUserProfile';

const FrontendRoutes = (props) => (
  <>
    <Header />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Route exact path="/connect-shopify" component={ConnectShopify} />
      <Route exact path="/stripe-checkout" component={StripeCheckout} />
      <Route exact path="/pricing" component={PricePlanPage} />
      <Route exact path="/rewards" component={RewardPage} />
    </Switch>
    <Footer />
  </>
);

const LayoutTest = () => <h1> This is the Content </h1>;

const DashboardRoutes = (props) => (
  <DashboardLayout>
    <Route exact path="/dashboard/customers" component={Customers} />
    <Route exact path="/dashboard/overview" component={DashboardOverview} />
    <Route exact path="/dashboard/pending-users" component={DashboardPedningUsers} />
    <Route exact path="/dashboard/customers/profile/" component={DashboardUserProfile} />
  </DashboardLayout>
);

function App() {
  //   const unAuthenticatedRoutes = (
  //       <>
  //       </>
  //   )

  return (
    <>
      <Switch>
        <Route path="/dashboard" component={DashboardRoutes} />
        <Route path="/" component={FrontendRoutes} />

      </Switch>
    </>
  );
}

export default App;
