/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        <h2 className="title">Hello World component title</h2>
        <h3 className="subtitle">Awesome subtitle for Hello World component</h3>
      </div>
    );
  }
});

module.exports = HelloWorld;
