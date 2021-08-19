import React, {useContext} from 'react';
import { Link, Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page";
import CardPage from "../pages/card-page";
import BookPage from "../pages/bookPage";
import './app.css';
import ShopHeader from "../shop-header";

import SearchPanel from "../search-panel";

const App = () => {
  return(
      // <Switch>
      //     <Route path='/' exact component = {HomePage}/>
      //     <Route path='/card' exact component={CardPage}/>
      //
      // </Switch>
      <main role ="main" className="container">
          <ShopHeader/>
          <Switch>
              <Route path='/:page/:number/' exact component={HomePage}/>
              <Route path='/card' exact component={CardPage}/>
              <Route path='/:page/:number/:bookName/:id' exact component={BookPage}/>
          </Switch>
      </main>
  )
};

export default App;
