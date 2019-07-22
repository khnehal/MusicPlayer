import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import SongsList from './components/SongsList.jsx';
import Player from './components/Player.jsx';

class ReactRouter extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Switch>
                        <Route path="/songs/:id" component={Player} />
                        <Route path="/songs" component={SongsList} />
                        <Route path="/" component={HomePage} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const NotFound = () => <h5>page Not Found</h5>

ReactDOM.render(<ReactRouter/>, document.getElementById("root"));
