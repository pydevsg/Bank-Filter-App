import React from "react";
import "./styles.css";
class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      banks: [],
      ct: ["BANGALORE", "CHENNAI", "DELHI", "KOLKATA", "MUMBAI"],
      displayMenu: false
    };
    this.fetchData = this.fetchData.bind(this);
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    let { city } = this.state.ct;
    let base_url = "https://vast-shore-74260.herokuapp.com/banks?city=";
    let fc = base_url + city;
    fetch(fc)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          banks: json
        });
      });
    return (
      <table>
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
          {this.state.banks.map(bank => (
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
    );
  }
  render() {
    return (
      <div className="dropdown" style={{ background: "red", width: "200px" }}>
        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          Cities{" "}
        </div>
        {this.state.displayMenu ? (
          <ul>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE"
              >
                BANGALORE
              </a>
              {/*<button onClick={this.fetchData()}>{this.state.ct[0]}</button>*/}
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=CHENNAI"
              >
                CHENNAI
              </a>
              {/*<button onClick={this.fetchData()}>{this.state.ct[1]}</button>*/}
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=DELHI"
              >
                DELHI
              </a>
              {/*<button onClick={this.fetchData()}>{this.state.ct[2]}</button>*/}
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA"
              >
                KOLKATA
              </a>
              {/*<button onClick={this.fetchData()}>{this.state.ct[3]}</button>*/}
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
              >
                MUMBAI
              </a>
              {/*<button onClick={this.fetchData()}>{this.state.ct[4]}</button>*/}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default Dropdown;
