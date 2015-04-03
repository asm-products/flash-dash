/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        <h2 className="title">Main Dashboard</h2>
        <h3 className="subtitle">the flash dash</h3>
      </div>
    );
  }
});

module.exports = HelloWorld;
