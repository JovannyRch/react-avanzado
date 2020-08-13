import React from "react";
import ListOfCategories from "./components/Category/ListOfCategories";
import GlobalStyle from "./styles/GlobalStyles";
import ListOfPhotoCards from "./components/ListOfPhotoCards/index";
import Logo from "./components/Logo";
import { Home } from "./pages/Home";
import { Router } from "@reach/router";
import { PostDetail } from "./pages/PostDetail";

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
    </div>
  );
};

export default App;
