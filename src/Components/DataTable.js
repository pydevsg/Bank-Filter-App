import React from "react";
import Dropdown from "./Dropdown";
import AutoCompleteText from "./AutoCompleteText";
import "./Datatable.css";
class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      banks: []
    };
  }

  componentDidMount() {
    let ct = ["BANGALORE", "CHENNAI", "DELHI", "KOLKATA", "MUMBAI"];
    let url = "https://vast-shore-74260.herokuapp.com/banks?city=";
    for (let i = 0; i < 5; i++) {
      let curl = url + ct[i];
      fetch(curl)
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            banks: json
          });
        });
    }
  }

  render() {
    const { error, isLoaded, banks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <h1>BANK DETAILS FILTER APPLICATION</h1>
          <Dropdown />
          <AutoCompleteText />
          <table class="bd">
            <thead>
              <tr>
                <th>Bank IFSC</th>
                <th>Bank Name</th>
                <th>Bank ID</th>
                <th>Bank Branch</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {banks.map(bank => (
                <tr>
                  <td>{bank.ifsc}</td>
                  <td>{bank.bank_name}</td>
                  <td>{bank.bank_id}</td>
                  <td>{bank.branch}</td>
                  <td>{bank.address}</td>
                  <td>{bank.city}</td>
                  <td>{bank.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
export default DataTable;
