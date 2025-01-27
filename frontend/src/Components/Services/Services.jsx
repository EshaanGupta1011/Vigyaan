import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import DSPhoto from "../../assets/DSPhoto.jpg";
import MLPhoto from "../../assets/MLPhoto.jpg";

const Services = () => {
  return (
    <div className="section-services">
      <h1 className="services-heading">What we offer?</h1>
      <p className="services-desc">
        We offer a platform where a user can perform data science as well as
        machine learning models.
      </p>

      <div className="services-grid">
        <div className="services-container">
          <img src={DSPhoto} alt="" />
          <h2 className="services-container-heading">Data Science</h2>
          <p>
            We offer a platform for young as well as experienced data scientist
            to explore and use our serices to perform various tasks.
          </p>
          <Link to={"/datascience"}>
            <button>Explore !</button>
          </Link>
        </div>

        <div className="services-container">
          <img src={MLPhoto} alt="" />
          <h2 className="services-container-heading">Machine Learning</h2>
          <p>
            We offer a platform for young as well as experiences machine
            learning exgineers to use our services
          </p>
          <Link to={"/machinelearning"}>
            <button>Explore !</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
