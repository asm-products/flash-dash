/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('!style!css!less!./../../styles/HelloWorld.less');


var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        <p>Hello World component</p>
      </div>
    );
  }
});

module.exports = HelloWorld;
