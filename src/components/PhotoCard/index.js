import React from "react";
import { Wrapper, Image, Button } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

const PhotoCard = ({ likes = 0, id, src = DEFAULT_IMG }) => {
  return (
    <article>
      <a href={"/details/" + id}>
        <Wrapper>
          <Image src={src} />
        </Wrapper>
      </a>
      <Button>
        <MdFavoriteBorder size="32px" />
        {likes} likes
      </Button>
    </article>
  );
};

export default PhotoCard;
