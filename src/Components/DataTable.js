import React from "react";
import Dropdown from "./Dropdown";
import "./Datatable.css";
import "./styles.css";
import Table from "./Table";

class DataTable extends React.Component {
  constructor(props) {
    super(props);    
}

Pop(){
 this.setState({
   selected_menu:"BANGALORE"
 })
}
  render() {
    
      return (
        <div>
          <div class="header"><h1>BANK DETAILS FILTER APPLICATION</h1></div>
          

          
          <Table/>     
        </div>
      );
    }
}

export default DataTable;
