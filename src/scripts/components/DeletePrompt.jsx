/**
* @jsx React.DOM
*/

'use strict';

var React = require('react');

//css
require('../../styles/DeletePrompt.less');

var DeletePrompt = React.createClass({

  render: function(){

    return (
      <div className='deletePrompt'>
        <p>Delete?</p>
      </div>
    );

  }

});

module.exports = DeletePrompt;
