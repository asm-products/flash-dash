/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
	Button = React.createFactory(require('./Button.jsx')),
    Link = Router.Link;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;



// CSS
require('../../styles/normalize.css');
require('!style!css!less!../../styles/main.less');

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
            <Button><Link to="/"> Home </Link></Button>
          </li>
          <li>
            <Button><Link to="hello">Hello World</Link></Button>
          </li>
		  <li>
            <Button buttonType='link'><Link to="maindashboard">Main Dashboard</Link></Button>
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
