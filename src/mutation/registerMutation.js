import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const useRegister = () => {
  const [register] = useMutation(REGISTER);

  return register;
};

export default useRegister;
