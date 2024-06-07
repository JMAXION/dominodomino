import React, { useEffect, useState } from "react";
import PizzaMenuProduct from "../components/PizzaMenuProduct";

export default function AllPizzaMenu({ depth2 }) {
  return (
    <div className="content">
      <PizzaMenuProduct depth2={depth2} />
    </div>
  );
}
