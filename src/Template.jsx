import { Outlet } from "react-router-dom";
import Footer from "./components/App/Footer";
import Header from "./components/App/Header";

import "./assets/styles/app/reset.scss";

export default function Template() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
