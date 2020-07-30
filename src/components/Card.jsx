import React from "react";
import { useParams } from "react-router-dom";

export default function Card() {
  const { id } = useParams();
  return (
    <div>
      <h1>User id is {id}</h1>
    </div>
  );
}