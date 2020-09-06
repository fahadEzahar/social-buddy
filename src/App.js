import React from 'react';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Comments from './components/Comments/Comments';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route path="/home">
            <Header/>
            <Home/>
          </Route>
          <Route path="/post/:id">
            <Header/>
            <PostDetail/>
            <Comments/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
