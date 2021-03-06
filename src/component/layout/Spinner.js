import { AutoComplete } from "material-ui";
import React from "react";
import spinner from "./spinner.gif";

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: 200, margin: "auto", display: "block" }}
        alt="Loading...."
      />
    </div>
  );
}

export default Spinner;
