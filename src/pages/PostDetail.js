import React from "react";
import { useGetPhoto } from "../hoc/withPhotos";
import GlobalStyle from "../styles/GlobalStyles";
import Logo from "../components/Logo";
import PhotoCard from "../components/PhotoCard";

export const PostDetail = ({ id }) => {
  const { data, loading } = useGetPhoto(id);
  console.log(loading);
  if (loading) return <p>Cargando</p>;
  else {
    if (data !== undefined) {
      return (
        <>
          <Logo />
          <GlobalStyle />
          <PhotoCard {...data.photo} />
        </>
      );
    } else return <h2>Cargando</h2>;
  }
};
