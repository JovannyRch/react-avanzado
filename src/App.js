import React from "react";
import ListOfCategories from "./components/Category/ListOfCategories";
import GlobalStyle from "./GlobalStyles";
import PhotoCard from "./components/PhotoCard/index";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
      <PhotoCard />
    </div>
  );
};

export default App;
