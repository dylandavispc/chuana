import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import Home from "./components/pages/Home/Home";
import LandingHeader from "./components/LandingHeader";
import Catalog from "./components/pages/Catalog";
import Footer from "./components/Footer";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
    console.log(this);
  }
  componentDidMount() {
    this.getUser();
  }
  updateUser(userObject) {
    this.setState(userObject);
  }
  getUser() {
    axios.get("/api/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          email: response.data.user.email
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          email: null
        });
      }
    });
  }
  render() {
    return (
      <Router>
        {/* <div><LandingHeader /></div> */}
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/catalog" component={Catalog} />
          <Route
            exact
            path="/catalog/bongs"
            render={() => (
              <Catalog updateUser={this.updateUser} catagory="bongs" />
            )}
          />
          <Route
            exact
            path="/catalog/pipes"
            render={() => (
              <Catalog updateUser={this.updateUser} catagory="pipes" />
            )}
          />
          <Route
            exact
            path="/catalog/stickers"
            render={() => (
              <Catalog updateUser={this.updateUser} catagory="stickers" />
            )}
          />
          <Route
            exact
            path="/catalog/kits"
            render={() => (
              <Catalog updateUser={this.updateUser} catagory="kits" />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => <Login updateUser={this.updateUser} />}
          />
          {/* <Route exact path="/profile" component={Profile} /> */}
        </div>
        {/* <div><Footer /></div> */}
      </Router>
    );
  }
}
export default App;
