import React from "react";
import ListOfCategories from "./components/Category/ListOfCategories";
import GlobalStyle from "./styles/GlobalStyles";
import ListOfPhotoCards from "./components/ListOfPhotoCards/index";
import Logo from "./components/Logo";

const App = () => {
  return (
    <div>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2} />
    </div>
  );
};

export default App;
