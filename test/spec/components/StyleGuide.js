'use strict';

describe('StyleGuide', function () {
  var StyleGuide, component;

  beforeEach(function () {
    StyleGuide = require('../../../src/scripts/components/StyleGuide.jsx');
    component = StyleGuide();
  });

  it('should create a new instance of StyleGuide', function () {
    expect(component).toBeDefined();
  });
});
