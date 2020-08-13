import React from "react";
import ListOfCategories from "../components/Category/ListOfCategories";
import ListOfPhotoCards from "../components/ListOfPhotoCards";

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
};
