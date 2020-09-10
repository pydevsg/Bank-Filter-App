import React from "react";
import "./styles.css";
class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      selected_menu:"",
      ct: ["BANGALORE", "CHENNAI", "DELHI", "HYDERABAD", "INDORE" , "KOLKATA", "MUMBAI", "PATNA", "PUNE"],
      displayMenu: false

    };
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

  render() {
    return (
      <div>
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
              <button onClick={this.setState({selected_menu:"BANGLORE"})}>BANGALORE</button>
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=CHENNAI"
              >
                CHENNAI
              </a>
              <button onClick={this.setState({selected_menu:"CHENNAI"})}>CHENNAI</button>
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=DELHI"
              >
                DELHI
              </a>
              <button onClick={this.setState({selected_menu:"DELHI"})}>DELHI</button>
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=HYDERABAD"
              >
                HYDERABAD
              </a>
              <button onClick={this.setState({selected_menu:"HYDERABAD"})}>HYDERABAD</button>
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=INDORE"
              >
                INDORE
              </a>
              <button onClick={this.setState({selected_menu:"INDORE"})}>INDORE</button>
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA"
              >
                KOLKATA
              </a>
              <button onClick={this.setState({selected_menu:"KOLKATA"})}>KOLKATA</button>
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
              >
                MUMBAI
              </a>
              <button onClick={this.setState({selected_menu:"MUMBAI"})}>MUMBAI</button>
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=PATNA"
              >
                PATNA
              </a>
              <button onClick={this.setState({selected_menu:"PATNA"})}>PATNA</button>
            </li>
            <li>
              <a
                className="active"
                href="https://vast-shore-74260.herokuapp.com/banks?city=PATNA"
              >
                PUNE
              </a>
              <button onClick={this.setState({selected_menu:"PUNE"})}>PUNE</button>
            </li>
          </ul>
        ) : null}
      </div>

      </div>
    );
  }
}
export default Dropdown;
