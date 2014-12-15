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
          <h2 className="title">Deployed via Heroku <i className="fa fa-heart"></i></h2>
        </div>
        <div className="row">
          <h2 className="title">Main Buttons</h2>
          <h2 className="subtitle">States for main buttons: normal | hover | active | disabled</h2>
        </div>

        <h2 className="title">FontAwesome <i className="fa fa-heart"></i></h2>

        <div className="row">
          <i className="fa fa-heart"></i>
          <i className="fa fa-angellist"></i>
          <i className="fa fa-lastfm"></i>
          <i className="fa fa-soccer-ball-o"></i>
        </div>

        <div className="row">
          <Button buttonColor="blue" buttonExtraClass="link">
            <i className="fa fa-heart"></i>
            Love it
          </Button>
          <Button buttonColor="blue">
            <i className="fa fa-flash"></i>
            Flash Dash APP
          </Button>
        </div>

        <h2 className="title">Link Buttons</h2>

        <div className="row">
          <Button buttonColor="blue" buttonExtraClass="link">blue</Button>
          <Button buttonState="hover" buttonColor="blue" buttonExtraClass="link">blue hover</Button>
          <Button buttonState="active" buttonColor="blue" buttonExtraClass="link">blue active</Button>
          <Button buttonState="disabled" buttonColor="blue" buttonExtraClass="link">blue disabled</Button>
        </div>
        <div className="row">
          <Button buttonColor="green" buttonExtraClass="link">green</Button>
          <Button buttonState="hover" buttonColor="green" buttonExtraClass="link">green hover</Button>
          <Button buttonState="active" buttonColor="green" buttonExtraClass="link">green active</Button>
          <Button buttonState="disabled" buttonColor="green" buttonExtraClass="link">green disabled</Button>
        </div>
        <div className="row">
          <Button buttonColor="red" buttonExtraClass="link">red</Button>
          <Button buttonState="hover" buttonColor="red" buttonExtraClass="link">red hover</Button>
          <Button buttonState="active" buttonColor="red" buttonExtraClass="link">red active</Button>
          <Button buttonState="disabled" buttonColor="red" buttonExtraClass="link">red disabled</Button>
        </div>
        <div className="row">
          <Button buttonColor="yellow" buttonExtraClass="link">yellow</Button>
          <Button buttonState="hover" buttonColor="yellow" buttonExtraClass="link">yellow hover</Button>
          <Button buttonState="active" buttonColor="yellow" buttonExtraClass="link">yellow active</Button>
          <Button buttonState="disabled" buttonColor="yellow" buttonExtraClass="link">yellow disabled</Button>
        </div>

        <h2 className="title">Buttons</h2>

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
          <h2 className="title">Dark button buttons</h2>
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
