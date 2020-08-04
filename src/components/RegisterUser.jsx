import React from "react";
import { useMutation, gql } from "@apollo/react-hooks";

const REGISTER_USER = gql`
  mutation {
    userRegister(
      inputs: {
        firstName: 
        lastName:
        email: 
        password: 
      }
    ) {
      firstName
      lastName
      email
      password
    }
  }
`;

export const RegisterUser = (props) => {
  const [register] = useMutation(REGISTER_USER);
};
