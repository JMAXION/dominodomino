import { Outlet } from "react-router-dom";

import React from "react";

export default function Root() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
