import React, { useState } from "react";
import MapContainer from "../components/MapContainer";
import PageTitle from "../components/PageTitle";

export default function Branch() {
  const [props, setProps] = useState({
    title: "매장검색",
  });
  return (
    <div>
      <PageTitle props={props} />
      <MapContainer />
    </div>
  );
}
