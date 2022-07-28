/** @format */

import React from "react";
import "./styles/homeTabsStyles.css";
import { Link } from "react-router-dom";

const HomeTabs = (props) => {
  const homeLinks = require("../../data/data.json")?.links;

  return (
    <>
      <div className="tabs-container">
        {homeLinks?.map((link) => {
          return (
            <div className="tab-card">
              <div className="tab-title">{link.title}</div>
              <Link to={"/" + link.title}>
                <img className="tab-image" src={link.image} alt={link.title} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeTabs;
