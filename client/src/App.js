import React, { Component } from "react";
import "./styles/main.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/pages/Menu";
import Home from "./components/pages/Home";
import Browse from "./components/pages/Browse";
import Item from "./components/pages/Item";
import MyItems from "./components/pages/MyItems";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import NewItem from "./components/pages/NewItem";
import Footer from "./components/Footer";
import UserContextProvider from "./contexts/UserContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserContextProvider>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Header />
                <Home />
                <Footer />
              </Route>

              <Route path="/menu" exact>
                <Menu />
              </Route>

              <Route path="/browse" exact>
                <Header />
                <Browse />
              </Route>

              <Route
                path="/browse/:id"
                exact
                render={(routerProps) => (
                  <>
                    <Header />
                    <Item {...routerProps} />
                  </>
                )}
              />

              <Route path="/new" exact>
                <Header />
                <NewItem />
              </Route>

              <Route path="/myitems" exact>
                <Header />
                <MyItems />
              </Route>

              <Route path="/login" exact>
                <Header />
                <Login />
              </Route>

              <Route path="/signup" exact>
                <Header />
                <Signup />
              </Route>
            </Switch>
          </Router>
        </UserContextProvider>
      </div>
    );
  }
}

export default App;
