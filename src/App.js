import React from "react";
import ListOfCategories from "./components/Category/ListOfCategories";
import GlobalStyle from "./styles/GlobalStyles";
import ListOfPhotoCards from "./components/ListOfPhotoCards/index";
import Logo from "./components/Logo";
import { Home } from "./pages/Home";
import { Router } from "@reach/router";
import { PostDetail } from "./pages/PostDetail";
import { NavBar } from "./components/NavBar/NavBar";
import Favs from "./pages/Favs";
import User from "./pages/User";
import NotRegister from "./pages/NotRegisterUser";
import Context from "./Context";

const UserLogger = ({ children }) => {
  return children({ isAuth: false });
};

const App = () => {
  return (
    <div>
      <Logo />
      <GlobalStyle />
      <Router>
        <Home path="/" />
        <Home path="/pets/:id" />
        <PostDetail path="/details/:id" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) => {
          return isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegister path="/favs" />
              <NotRegister path="/user" />
            </Router>
          );
        }}
      </Context.Consumer>
      <NavBar />
    </div>
  );
};

export default App;
