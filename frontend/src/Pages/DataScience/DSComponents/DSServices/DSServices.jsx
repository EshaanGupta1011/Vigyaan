import React from "react";
import { Link } from "react-router-dom";
import "./DSServices.css";
import DsServices from "../../Data/DsServices";

const DSServices = () => {
  return (
    <div className="section-dsservices">
      <h1 className="dsservices-heading">
        Discover and dive into our handpicked data sets—your journey to insights
        starts here!
      </h1>
      <div className="dataset-cards">
        {DsServices.map((data, index) => (
          <div className="dataset-card" key={index}>
            <img src={data.image} alt={data.heading} />
            <h2>{data.heading}</h2>
            <p>{data.text}</p>
            {/* Use Link to navigate to the page */}
            <Link to={`/${data.link}`}>
              <button>Click here</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DSServices;
