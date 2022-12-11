import * as React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div>{props.content}</div>
    </div>
  );
}
