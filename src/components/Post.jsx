import React from "react";
import { Link } from "react-router-dom";
import "./Post.scss";

export default ({ data }) => (
  <div className="Post">
    <Link to="/posts/2">
      <h1>
        {data.name} <img src={data.image} alt={data.name} />
      </h1>
    </Link>
  </div>
);
