import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./CharacterInfo.scss";

export default function CharactersInfo() {
  const { id } = useParams();
  const characterData = useSelector((state) =>
    state.list.listItems.find((el) => el.id == id)
  );
  return (
    <div className="character_card_container">
      {characterData ? (
        <div className="character_card_body">
          <div className="character_card_img">
            {" "}
            <img src={characterData.image} alt="" />
          </div>
          <div className="character_card_info">
            <h1>{characterData.name}</h1>
            <p>Gender: {characterData.gender}</p>
            <p>Species: {characterData.species}</p>
            <p>Status: {characterData.status}</p>
            <p>Location: {characterData.location.name}</p>
            <p>Origin: {characterData.origin.name}</p>
          </div>
        </div>
      ) : (
        <Link to={`/posts`} className="back_to_list_btn">
          Back to List of characters
        </Link>
      )}
    </div>
  );
}
