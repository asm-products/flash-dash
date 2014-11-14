/** @jsx React.DOM */

var React = require('react');
    Router = require('react-router'),
    Route = Router.Route,
    Routes = Router.Routes,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,

    FlashDashApp = React.createFactory(require('./FlashDashApp.jsx')),
    HelloWorld = React.createFactory(require('./HelloWorld.jsx')),
    StyleGuide = React.createFactory(require('./StyleGuide.jsx')),

require('./../../styles/main.less');

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
    <NotFoundRoute handler={NotFound} pageTitle="Ops. 404!"/>
    <DefaultRoute handler={Welcome} pageTitle="Home"/>
  </Route>
);

React.render(
  <Routes children={routes}/>,
  document.getElementById('content')
);
