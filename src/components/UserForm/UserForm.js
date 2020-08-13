import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Button, Form, Input, Title } from "./styles";
import useRegister from "../../mutation/registerMutation";

const UserForm = ({ onSubmit, title = "Login" }) => {
  const register = useRegister();
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      register({
        variables: {
          input: {
            email: email.value,
            password: password.value,
          },
        },
      }).then((e) => {
        onSubmit();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Email" {...email} />
        <Input placeholder="Password" type="password" {...password} />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  );
};

export default UserForm;