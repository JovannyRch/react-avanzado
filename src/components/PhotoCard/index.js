import React from "react";

const PhotoCard = ({ likes = 0, id, src }) => {
  return (
    <article>
      <a href={"/details/" + id}>
        <div>
          <img src={src} />
        </div>
      </a>
      <button>{likes} likes</button>
    </article>
  );
};

export default PhotoCard;
