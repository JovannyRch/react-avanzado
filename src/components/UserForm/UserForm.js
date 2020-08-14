import React, { useState } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Button, Form, Input, Title } from "./styles";
import useRegister from "../../mutation/registerMutation";
import useLogin from "../../mutation/loginMutation";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

const UserForm = ({ onSubmit, title = "Login", type = 1 }) => {
  const register = useRegister();
  const login = useLogin();
  const email = useInputValue("");
  const password = useInputValue("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (type == 1) {
        register({
          variables: {
            input: {
              email: email.value,
              password: password.value,
            },
          },
        })
          .then(({ data }) => {
            const { signup } = data;
            onSubmit(signup);
            navigate(`/`);
          })
          .catch((e) => {
            setError(true);
          });
      } else {
        login({
          variables: {
            input: {
              email: email.value,
              password: password.value,
            },
          },
        })
          .then(({ data }) => {
            const { login } = data;
            onSubmit(login);
            navigate(`/`);
          })
          .catch((e) => {
            setError(true);
          });
      }
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
        {type == 1 ? (
          <Link to="/login">Iniciar sesión</Link>
        ) : (
          <Link to="/signup">Registrarse</Link>
        )}
      </Form>
      {error && <span>Ha ocurrido un error</span>}
    </>
  );
};

export default UserForm;
