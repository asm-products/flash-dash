/**
* @jsx React.DOM
*/


'use strict';

var React = require('react');


//css
require('./../../styles/ModalForm.less');



var ModalForm = React.createClass({

  render: function(){

    return (

      <div className='editable-forms'>
        
        {/*<i onClick={this.handleCloseClick} >X</i>*/}
        <h2>Code Your Awesome Form Right Here</h2>


      </div>

    );

  }

});

module.exports = ModalForm;
