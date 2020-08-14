import React from "react";
import Context from "../Context";
import UserForm from "../components/UserForm/UserForm";
const LoginPage = () => {
  return (
    <>
      <Context.Consumer>
        {({ isAuth, activateAuth }) => {
          return (
            <UserForm
              title={"Iniciar sesión"}
              onSubmit={activateAuth}
              type={2}
            />
          );
        }}
      </Context.Consumer>
    </>
  );
};

export default LoginPage;
