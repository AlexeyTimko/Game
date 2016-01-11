/**
 * Created by Timko on 11.01.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mapReducer from './reducers/Map';
import {setState} from './action-creators/setState';
import App from './components/App';
import Map from './components/Map';

const store = createStore(mapReducer);

store.dispatch(setState());

const routes = <Route component={App}>
    <Route path="/" component={Map} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);