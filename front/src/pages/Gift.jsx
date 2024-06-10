import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import MoneyGift from "../components/MoneyGift";

export default function Gift({ depth2 }) {
  return (
    <div>
      <MoneyGift depth2={depth2} />
    </div>
  );
}
