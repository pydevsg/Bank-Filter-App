import React from "react";
import "./App.css";
import AutoCompleteText from "./Components/AutoCompleteText";
import "./Components/AutoCompleteText.css";
import DataTable from "./Components/DataTable";
import Dropdown from "./Components/Dropdown";
import bank from "./bank";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <AutoCompleteText items={bank} />
        </div>
        <Dropdown />
        <DataTable />
      </div>
    );
  }
}
export default App;
