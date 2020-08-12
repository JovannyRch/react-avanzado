import React from "react";
import { Wrapper, Image, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "./../../hooks/useLocalStorage";

const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

const PhotoCard = ({ likes = 0, id, src = DEFAULT_IMG }) => {
  const key = "like-" + id;
  const [liked, setLocalStorage] = useLocalStorage(key, false);

  const Icon = liked ? (
    <MdFavorite size="32px" />
  ) : (
    <MdFavoriteBorder size="32px" />
  );

  return (
    <article>
      <a href={"/details/" + id}>
        <Wrapper>
          <Image src={src} />
        </Wrapper>
      </a>
      <Button onClick={() => setLocalStorage(!liked)}>
        {Icon}
        {likes} likes
      </Button>
    </article>
  );
};

export default PhotoCard;
