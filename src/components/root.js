import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import {HashRouter, Link, Route} from 'react-router-dom'
import FinishedList from "./finishedlist";
import TodoList from "./todolist";
import WebSockets from './websocket'
const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <div>
                <Link to="/"> todo list </Link>{'|'}
                <Link to={{pathname: '/finished'}}> finished </Link>{'|'}
                <Link to="/websocket"> WebSocket </Link>
                <Route exact path="/" component={TodoList} />
                <Route exact path="/finished" component={FinishedList} />
                <Route exact path="/websocket" component={WebSockets} />
            </div>
        </HashRouter>

    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root