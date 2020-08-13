import React from "react";
import PhotoCard from "../PhotoCard";
import { useGetPhotos } from "../../hoc/withPhotos";

const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading } = useGetPhotos(categoryId);
  if (loading) return "";
  if (!data.photos) return <h1>No photos</h1>;
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

export default ListOfPhotoCards;
