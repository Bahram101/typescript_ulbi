import { Outlet } from "react-router-dom";
import Navs from "./Navs";

export const Layout = () => {
  return (
    <>
      <Navs />
      <Outlet />
    </>
  );
};
