import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import {HashRouter, Link, Route, Switch} from 'react-router-dom'
import FinishedList from "./finishedlist";
import TodoList from "./todolist";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <div>
                <Link to="/"> todo list </Link>{'|'}
                <Link to={{pathname: '/finished'}}> finished </Link>{'|'}
                <Link to="/contact">haha</Link>
                <Switch>
                    <Route exact path="/" component={TodoList} />
                    <Route path="/finished" component={FinishedList} />
                </Switch>
            </div>
        </HashRouter>

    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root