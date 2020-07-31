import React from "react";
import { Link } from "react-router-dom";
import "./CharactersListItem.scss";

export default ({ data }) => (
  <Link to={`/list/${data.id}`} className="list_item">
    {data.name}
    <div className="list_item_img">
      <img src={data.image} alt={data.name} />
    </div>
  </Link>
);
