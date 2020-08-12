import React from "react";
import { Anchor, Image } from "./styles";
const DEFAULT_IMG_URL = "https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({ cover = DEFAULT_IMG_URL, path, emoji = "?" }) => {
  return (
    <div>
      <Anchor href={path}>
        <Image src={cover} />
        {emoji}
      </Anchor>
    </div>
  );
};

export default Category;
