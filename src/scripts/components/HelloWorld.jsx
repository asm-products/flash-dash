/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link;


require('!style!css!less!./../../styles/HelloWorld.less');


var HelloWorld = React.createClass({
  render: function () {
    return (
        <div>
          <Link to="home">Back</Link>
          <p>Hello World</p>
        </div>
      );
  }
});

module.exports = HelloWorld;
