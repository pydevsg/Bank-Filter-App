import React from "react";
import "./Datatable.css";
import "./styles.css";
import Table from "./Table";

class DataTable extends React.Component {
    Pop(){
        this.setState({
          selected_menu:"BANGALORE"
        })
    }
    render() {
      return (
        <div>
          <div class="header"></div>
          <Table/>     
        </div>
      );
    }
}

export default DataTable;
