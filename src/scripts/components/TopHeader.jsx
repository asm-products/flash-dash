/**
* @jsx React.DOM
*/

'use strict';

var React = require('react/addons'),
Router = require('react-router'),
Button = React.createFactory(require('./Button.jsx'));

// FlashDash Logo
var flashDashLogo = require('../../images/flashdash_logo.png');

var TopHeader = React.createClass({

  mixins: [Router.Navigation],

  render: function () {
    return (
      <div className="top-header">
        <p className="current-page">{this.props.title}</p>
        <div className="header">
          <Button routeTo="/" buttonClass="logo">
            <img src={flashDashLogo} />
          </Button>
        </div>
        <ul className="navigation">
          <li>
            <Button buttonColor="blue" routeTo="/"> Home </Button>
          </li>
          <li>
            <Button buttonColor="blue" routeTo='hello'> Hello World </Button>
          </li>
          <li>
            <Button buttonColor="blue" routeTo="styleguide"> Style Guilde </Button>
          </li>
        </ul>
      </div>
    );
  },

  _handleClick: function(event) {
    this.transitionTo(event);
  }
});

module.exports = TopHeader;
