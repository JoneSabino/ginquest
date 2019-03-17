import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gincana from './screens/Quiz/Quiz';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';

interface Props {}

interface State {}

class App extends Component<Props, State> {

    render() {
        return (
          <div>
            <Header />
            <Router>
              <Route exact path="/" component={Home} />
              <Route path="/quiz" component={Gincana} />
            </Router>
          </div>
          
        );
    }
}

export default App;
