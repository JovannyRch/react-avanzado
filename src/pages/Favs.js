import React from "react";
import PhotoCard from "../components/PhotoCard";
import { useGetFavs } from "../hooks/useGetFavs";

const Favs = () => {
  const { data, loading } = useGetFavs();
  if (loading) return "";
  if (!data) return <h4>No data</h4>;
  if (!data.favs) return <h1>No photos</h1>;
  return (
    <ul>
      {data.favs.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

export default Favs;
