import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePlaceData } from "../actions";

function Form() {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  return (
    <div className="inputArea">
      <input
        type="text"
        placeholder="Enter city name"
        value={place}
        onChange={(e) => {
          dispatch(updatePlace(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(updatePlaceData(place));
        }}
      >
        Get Weather Report
      </button>
    </div>
  );
}

export default Form;
