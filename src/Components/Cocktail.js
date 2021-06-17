import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="item">
        <div className="card">
          <div className="card-title">
            <img src={image} alt={name} />
          </div>
          <div className="card-body">
            <h3 className="name">{name}</h3>
            <h4 className="glass">{glass}</h4>
            <p className="info">{info}</p>
            <Link to={`/cocktail/${id}`} className="btn-details">
              DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
