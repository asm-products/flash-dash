/**
* @jsx React.DOM
*/

'use strict';

var React = require('react');

//css
require('../../styles/LogoutMessage.less');

var LogoutMessage = React.createClass({

  render: function(){

    return (
      <div className='logoutMessage'>
        <p>Log Out?</p>
      </div>
    );

  }

});


module.exports = LogoutMessage;
