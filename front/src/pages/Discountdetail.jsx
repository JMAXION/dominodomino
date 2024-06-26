import React from "react";
import Menuheader from "../components/Menuheader";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Discountdetail({
  name,
  depth1,
  depth2,
  depth3,
  headerName,
}) {
  const { id } = useParams();
  const [eventList, setEventList] = useState({});
  const url = `http://127.0.0.1:8080/event/discount/detail/${id}`;
  useEffect(() => {
    axios({
      method: "GET",
      url: url,
      data: eventList,
    })
      .then((res) => {
        setEventList(res.data);
      })

      .catch((error) => console.log(error));
  }, []);

  console.log(eventList);
  return (
    <div>
      <Menuheader
        name={name}
        depth1={depth1}
        depth2={depth2}
        depth3={depth3}
        headerName={headerName}
      />
      <div className="event-deatail-container">
        <div className="event-detail-title-container">
          <div>
            <h3>{eventList.title}</h3>
          </div>
          <p>
            {eventList.start} ~ {eventList.end}
          </p>
        </div>
        <img className="event-detail-img" src={eventList.detail_image}></img>
      </div>
    </div>
  );
}
