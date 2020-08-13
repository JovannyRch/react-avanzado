import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const useGetPhotos = (categoryId) => {
  const { loading, data, error } = useQuery(getPhotos, {
    variables: { categoryId },
  });
  return { loading, data, error };
};

export const useGetPhoto = (id) => {
  console.log("id:", id);
  const { loading, data, error } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });
  return { loading, data, error };
};
