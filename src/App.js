import React from "react";
import {Helmet} from "react-helmet";
import "./App.css";
import DataTable from "./Components/DataTable";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Bank Filter App</title>
                {/* <link rel="canonical" href="https://bank-filter-app.herokuapp.com/" /> */}
        </Helmet>
        <DataTable />
        
      </div>
    );
  }
}
export default App;
