import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import About_Cattolica from "./pages/About_Cattolica/About_Cattolica";


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about-cattolica" component={About_Cattolica} />
            </div>
        </Router>
    );
  }
}

export default App;
