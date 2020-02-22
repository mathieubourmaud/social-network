import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostPage from './pages/Posts/PostPage';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/posts">
          <PostPage />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
