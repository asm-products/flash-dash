/** @jsx React.DOM */

var FlashDashApp = require('./FlashDashApp');
var HelloWorld = require('./HelloWorld');
var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

React.renderComponent((
  <Routes location="history">
    <Route handler={FlashDashApp}>
      <Route name="hello" path="/hello-world" handler={HelloWorld} />
    </Route>
  </Routes>
), document.getElementById('content'));
