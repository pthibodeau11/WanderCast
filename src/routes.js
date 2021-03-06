import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import Profile from "./components/Profile/profile";
import ContactUs from "./components/ContactUs/ContactUs";
import AlterProfile from "./components/Profile/alterprofile";
import NewApplication from "./components/NewApplication/newapplication";
import ViewApplication from "./components/ViewApplication/viewapplication";
import NewStream from "./components/NewStream/newstream";
import MyStreams from "./components/MyStreams/mystreams";
import ViewStream from "./components/ViewStream/viewstream";
import StripePurchase from "./components/MyStreams/StripePurchase";
import Admin from "./components/Admin/admin";

export default (
  <Switch>
    <Route component={Main} exact path="/" />
    <Route component={Signup} path="/signup" />
    <Route component={Login} path="/login" />
    <Route component={ContactUs} path="/contactus" />
    <Route component={AlterProfile} path="/profile/edit" />
    <Route component={Profile} path="/profile" />
    <Route component={NewApplication} path="/newapplication" />
    <Route component={ViewApplication} path="/viewapplication" />
    <Route component={NewStream} path="/newstream" />
    <Route component={MyStreams} path="/mystreams" />
    <Route component={ViewStream} path="/viewstream" />
    <Route component={StripePurchase} path="/stripepurchase" />
    <Route component={Admin} path="/admin" />
    <Route render={() => <h1>404 - Not Found</h1>} />
  </Switch>
);
