import React from "react";
import ReactDOM from "react-dom";
import AutoCompleteText from "./Components/AutoCompleteText";
import Dropdown from "./Components/Dropdown";
import DataTable from "./Components/DataTable";

var displayDropdown = (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Dropdown />
  </div>
);
ReactDOM.render(<AutoCompleteText />, document.getElementById("root"));
ReactDOM.render(displayDropdown, document.getElementById("root"));
ReactDOM.render(<DataTable />, document.getElementById("root"));
