import React from "react";
import PhotoCard from "../PhotoCard";

const ListOfPhotoCards = () => {
  return (
    <ul>
      {[0, 1, 2].map((card) => (
        <PhotoCard key={card} />
      ))}
    </ul>
  );
};

export default ListOfPhotoCards;
