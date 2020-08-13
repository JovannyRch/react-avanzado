import React from "react";
import { Wrapper, Image } from "./styles";

import { useLocalStorage } from "./../../hooks/useLocalStorage";
import FavButton from "../FavButton";
import useToggleLikeMutation from "../../mutation/toggleLikeMutation";
import { Link } from "@reach/router";

const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

const PhotoCard = ({ likes = 0, id, src = DEFAULT_IMG }) => {
  const key = "like-" + id;
  const [liked, setLocalStorage] = useLocalStorage(key, false);
  const { toggleLikePhoto } = useToggleLikeMutation(id);

  return (
    <article>
      <Link to={"/details/" + id}>
        <Wrapper>
          <Image src={src} />
        </Wrapper>
      </Link>
      <FavButton
        onClick={() => {
          if (!liked) {
            console.log("Cambiar en la BD");
            toggleLikePhoto();
          }
          setLocalStorage(!liked);
        }}
        liked={liked}
        likes={likes}
      />
    </article>
  );
};

export default PhotoCard;
