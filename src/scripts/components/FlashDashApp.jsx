/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    TopHeader = React.createFactory(require('./TopHeader.jsx'));


// Export React so the devtools can find it

(window !== window.top ? window.top : window).React = React;
(window !== window.top ? window.top : window).Router = Router;

// CSS
require('./../../styles/normalize.css');

var FlashDashApp = React.createClass({
  render: function() {
    return (
      <div>
        {Router.renderRoutesToStaticMarkup}
        <TopHeader title={this.props.activeRouteHandler().props.pageTitle} />

        <div className="main-content">

          <this.props.activeRouteHandler />

        </div>
      </div>
    );
  }
});

module.exports = FlashDashApp;
