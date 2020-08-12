import React from "react";
import Category from "..";
import { List, Item } from "./styles";
import { categories } from "../../../../api/db.json";

const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category) => (
        <Item key={category}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};

export default ListOfCategories;
