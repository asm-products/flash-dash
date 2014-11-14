'use strict';

var React = require('react'),
    TestUtils = require('react/addons').addons.TestUtils;

describe('Button', function () {
  var Button, container, component;

  beforeEach(function () {
    Button = require('../../../src/scripts/components/Button.jsx');

    container = document.createElement('div');

    component = React.render(Button(), container);
  });

  afterEach(function() {
    React.unmountComponentAtNode(container);
  });

  it('should make an anchor', function() {
    component.setProps({
      href: "#"
    });
    expect(component.getDOMNode().tagName).toBe("A");
  });

  it('should make a button', function() {
    expect(component.getDOMNode().tagName).toBe("BUTTON");
  });

  it('should create a new instance of Button', function () {
    expect(Button()).toBeDefined();
  });

  it('should change button color', function() {
    component.setProps({
      buttonColor: "red"
    });
    expect(component.getDOMNode().className).toMatch(/red/);
  });

  it('should change button state', function() {
    component.setProps({
      buttonState: "active"
    });
    expect(component.getDOMNode().className).toMatch(/active/);
  });

});
