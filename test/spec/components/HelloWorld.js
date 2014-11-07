'use strict';

describe('HelloWorld', function () {
  var HelloWorld, component;

  beforeEach(function () {
    HelloWorld = require('../../../src/scripts/components/HelloWorld.jsx');
    component = HelloWorld();
  });

  it('should create a new instance of HelloWorld', function () {
    expect(component).toBeDefined();
  });
});
