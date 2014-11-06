'use strict';

describe('Main', function () {
  var FlashDashApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    FlashDashApp = require('../../../src/scripts/components/FlashDashApp.jsx');
    component = FlashDashApp();
  });

  it('should create a new instance of FlashDashApp', function () {
    expect(component).toBeDefined();
  });
});
