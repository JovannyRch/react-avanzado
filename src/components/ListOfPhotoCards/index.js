import React from "react";
import PhotoCard from "../PhotoCard";

const ListOfPhotoCards = () => {
  return (
    <ul>
      {[0, 1, 2].map((id) => (
        <PhotoCard id={id} key={id} />
      ))}
    </ul>
  );
};

export default ListOfPhotoCards;
