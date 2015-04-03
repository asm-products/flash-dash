/** @jsx React.DOM */

var React = require('react');
Router = require('react-router'),
Route = Router.Route,
Routes = Router.Routes,
DefaultRoute = Router.DefaultRoute,
NotFoundRoute = Router.NotFoundRoute,

FlashDashApp = React.createFactory(require('./FlashDashApp.jsx')),
HelloWorld = React.createFactory(require('./HelloWorld.jsx')),
MainDashboard = React.createFactory(require('./MainDashboard.jsx')),
StyleGuide = React.createFactory(require('./StyleGuide.jsx'));

// Make Welcome and NotFound(404) separate components

var Welcome = React.createClass({
  render: function() {
    return <h1 className="title">Welcome to Flash Dash</h1>;
  }
});

var NotFound = React.createClass({
  render: function() {
    return <h2>NotFound</h2>;
  }
});

var routes = (
  <Route handler={FlashDashApp} >
    <Route name="hello" path="/hello-world" handler={HelloWorld} pageTitle="Dummy component"/>
    <Route name="styleguide" path="/styleguide" handler={StyleGuide} pageTitle="Style Guide"/>
    <Route name="maindashboard" path="/maindashboard" handler={MainDashboard} pageTitle="Main Dashboard"/>

    <NotFoundRoute handler={NotFound} pageTitle="Ops. 404!"/>
    <DefaultRoute handler={Welcome} pageTitle="Home"/>
  </Route>
);

React.render(
  <Routes children={routes}/>,
  document.getElementById('content')
);
