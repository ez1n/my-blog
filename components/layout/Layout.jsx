import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation";

export default function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
