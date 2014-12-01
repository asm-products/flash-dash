'use strict';

describe('TopHeader', function () {
  var TopHeader, component;

  beforeEach(function () {
    TopHeader = require('../../../src/scripts/components/TopHeader.jsx');
    var Button = require('../../../src/scripts/components/Button.jsx');
    component = TopHeader();
  });

  it('should create a new instance of TopHeader', function () {
    expect(component).toBeDefined();
  });
});
