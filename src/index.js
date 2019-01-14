import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Loadable from 'react-loadable';

import Albums from './pages/albums'
import Tags from './pages/tags'
import Add from './pages/add'

import Header from './components/Header'
import Content from './components/Content'

import './components/common.css';

// loadable для роутинга
// const Loading = () => <div>Loading...</div>;

// const Home = Loadable({
//   loader: () => import(/* webpackChunkName: "home" */'./Home/Home'),
//   loading: Loading,
// });

// const Blog = Loadable({
//   loader: () => import(/* webpackChunkName: "blog" */'./Blog/Blog'),
//   loading: Loading,
// });

// const Projects = Loadable({
//   loader: () => import(/* webpackChunkName: "projects" */'./Projects/Projects'),
//   loading: Loading,
// });

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Content>
            <Route exact path='/albums' component={Albums} />
            <Route exact path='/tags' component={Tags} />
            <Route exact path='/add' component={Add} />
            <Redirect from="/" to="albums" />
          </Content>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
