import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCharacterData } from "../../store/actions/actions";

import Loader from "../Loader/Loader";

import { API_CHARACTER_INFO_URL } from "../../common/config";
import "./CharacterInfo.scss";

export default function CharactersInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const characterData = useSelector(
    (state) => state.character.fetchedData.data
  );

  if (
    !characterData ||
    (characterData !== undefined && characterData.id !== +id)
  ) {
    dispatch(fetchCharacterData(API_CHARACTER_INFO_URL + id));
    return <Loader />;
  }

  return (
    <div className="character_card_container">
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
      <Link to={`/`} className="back_to_list_btn">
        Back to List of characters
      </Link>
    </div>
  );
}
