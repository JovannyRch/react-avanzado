import React from "react";
import Context from "../Context";
import UserForm from "../components/UserForm/UserForm";
const NotRegister = () => {
  return (
    <>
      <Context.Consumer>
        {({ isAuth, activateAuth }) => {
          return <UserForm title={"Registrarse"} onSubmit={activateAuth} />;
        }}
      </Context.Consumer>
    </>
  );
};

export default NotRegister;
