import React, { useState } from "react";
import SideMenuProduct from "../components/SideMenuProduct";
import PageTitle from "../components/PageTitle";

export default function SideDishMenu({ depth2 }) {
  return (
    <div>
      {/* <PageTitle props={props} depth2={depth2} /> */}
      <SideMenuProduct depth2={depth2} />
    </div>
  );
}
