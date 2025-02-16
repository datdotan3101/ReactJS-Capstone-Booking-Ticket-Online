import React from "react";
import "./style.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelected } from "./slice";
export default function Seat({ item }) {
  const [isChoosing, setIsChoosing] = useState(false);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        setIsChoosing(!isChoosing);
        dispatch(setSelected(item));
      }}
      className={`seat ${item.daDat ? "seatSold" : ""} ${
        isChoosing ? "seatChoosing" : ""
      }`}
    >
      {item.soGhe}
    </button>
  );
}
