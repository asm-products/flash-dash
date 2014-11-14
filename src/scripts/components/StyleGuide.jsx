/** @jsx React.DOM */

'use strict';

var React = require('react'),
    Button = React.createFactory(require('./Button.jsx')),
    Router = require('react-router');

var StyleGuide = React.createClass({

  render: function () {
    return (
      <div>
        <div className="row">
          <h2 className="title">Main Buttons</h2>
          <h2 className="subtitle">States for main buttons: normal | hover | active | disabled</h2>
        </div>
        <div className="row">
          <Button buttonColor="blue">blue</Button>
          <Button buttonState="hover" buttonColor="blue">blue hover</Button>
          <Button buttonState="active" buttonColor="blue">blue active</Button>
          <Button buttonState="disabled" buttonColor="blue">blue disabled</Button>
        </div>
        <div className="row">
          <Button buttonColor="green">green</Button>
          <Button buttonState="hover" buttonColor="green">green hover</Button>
          <Button buttonState="active" buttonColor="green">green active</Button>
          <Button buttonState="disabled" buttonColor="green">green disabled</Button>
        </div>
        <div className="row">
          <Button buttonColor="red">red</Button>
          <Button buttonState="hover" buttonColor="red">red hover</Button>
          <Button buttonState="active" buttonColor="red">red active</Button>
          <Button buttonState="disabled" buttonColor="red">red disabled</Button>
        </div>
        <div className="row">
          <Button buttonColor="yellow">yellow</Button>
          <Button buttonState="hover" buttonColor="yellow">yellow hover</Button>
          <Button buttonState="active" buttonColor="yellow">yellow active</Button>
          <Button buttonState="disabled" buttonColor="yellow">yellow disabled</Button>
        </div>

        <div className="row">
          <h2 className="title">All buttons</h2>
          <h3 className="subtitle">8 Manually crafted buttons ^^</h3>
        </div>
        <div className="row">
          <Button buttonColor="blue">blue</Button>
          <Button buttonColor="red">red</Button>
          <Button buttonColor="green">green</Button>
          <Button buttonColor="yellow">yellow</Button>
        </div>
        <div className="row">
          <Button buttonColor="dark-blue">Dark blue</Button>
          <Button buttonColor="dark-red">Dark red</Button>
          <Button buttonColor="dark-green">Dark green</Button>
          <Button buttonColor="dark-yellow">Dark yellow</Button>
        </div>
      </div>
      );
  }
});

module.exports = StyleGuide;
