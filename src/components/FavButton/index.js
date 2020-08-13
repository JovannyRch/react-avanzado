import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";

const FavButton = ({ onClick, liked, likes }) => {
  const Icon = liked ? (
    <MdFavorite size="32px" />
  ) : (
    <MdFavoriteBorder size="32px" />
  );

  return (
    <Button onClick={onClick}>
      {Icon}
      {likes} likes
    </Button>
  );
};

export default FavButton;
