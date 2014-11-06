/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('!style!css!less!./../../styles/main.less');
// require('!style!css!less!./../../styles/helloworld.less');

var FlashDashApp = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="hello"><h1>Hello World</h1></Link>
      </div>
    );
  }
});

module.exports = FlashDashApp;
