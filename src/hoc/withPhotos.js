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

const getPhoto = gql`
  query getPhoto($id: ID) {
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
  const { loading, data, error } = useQuery(getPhoto, { variables: { id } });
  return { loading, data, error };
};
