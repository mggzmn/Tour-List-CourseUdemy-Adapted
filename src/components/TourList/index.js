import React, { useState } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";
export default function TourList() {
  const [tours, setTours] = useState(tourData);
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  return (
    <section className="tourList">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </section>
  );
}
