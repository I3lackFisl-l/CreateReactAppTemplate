import React, { Component } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const folderApp = process.env.REACT_APP_FOLDER_APPLICATION;
    return (
      <Router basename={folderApp}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Page2">Page2</Link>
            </li>
            <li>
              <Link to="/Page3">Page3</Link>
            </li>
          </ul>

          <hr />
          <Route exact path={"/"} render={() => <h1>Home</h1>} />
          <Route path={"/Page2"} component={() => <h1>Page2</h1>} />
          <Route
            path={"/Page3"}
            component={() => (
              <div className="App-header">
                <img src="./images/pin.png" />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
