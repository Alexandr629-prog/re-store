import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./serveces/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";
import HomePage from "./components/pages/home-page";
import CardPage from "./components/pages/card-page"




import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <Route path='/' component={App}/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)