import React from "react";
import { Dropdown, Gap } from "../../atoms";
import "./card.scss";

const Card = ({ nama, nim, photo, alt }) => {
  return (
    <div className="container">
      <div className="content">
        <div className="wrapper">
          <div className="photoWrapper">
            <img src={photo} alt={alt} className="avatar"></img>
          </div>
          <p className="name">{nama}</p>
          <p className="nim">{nim}</p>
          <Gap height={40} />
          <Dropdown>
            <option value="">Kelas</option>
            <option value="1">RSBK</option>
            <option value="2">Multimedia</option>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Card;