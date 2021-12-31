import React from "react";
import Mainhead from "./Mainhead";
const Layout = (props) => {
  return (
    <>
      <Mainhead />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
