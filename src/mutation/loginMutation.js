import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const useLogin = () => {
  const [register] = useMutation(LOGIN);

  return register;
};

export default useLogin;
