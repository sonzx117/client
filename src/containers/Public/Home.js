import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Contact, Intro } from "../../components";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Header />
      <Navigation />
      <Search />
      <div className="w-4/5 lg:w-3/5 flex flex-col items-center justify-start mt-3">
        <Outlet />
      </div>
      <Intro />
      <Contact />

      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
