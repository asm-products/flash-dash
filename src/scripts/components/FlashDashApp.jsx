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

// FlashDash Logo
var flashDashLogo = require('../../images/flashdash_logo.png');

var FlashDashApp = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header">
          <Link to="/"> <img src={flashDashLogo} /> </Link>
        </div>
        <ul className="navigation">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="hello">Hello World</Link>
          </li>
        </ul>

        <div className="main-content">
          {this.props.activeRouteHandler()}
        </div>
      </div>
    );
  }
});

module.exports = FlashDashApp;
