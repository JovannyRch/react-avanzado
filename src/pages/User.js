import React, { useContext } from "react";
import Context from "../Context";
const User = () => {
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth, removeAuth }) => {
        return (
          <>
            <h1>User Page</h1>
            <button onClick={removeAuth}>Cerrar sesión</button>
          </>
        );
      }}
    </Context.Consumer>
  );
};

export default User;
