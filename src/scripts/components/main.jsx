/** @jsx React.DOM */

var FlashDashApp = require('./FlashDashApp');
var HelloWorld = require('./HelloWorld');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <DefaultRoute name="home" handler={FlashDashApp} />
    <Route name="hello" path="/hello-world" handler={HelloWorld} />
  </Routes>
), document.body);
