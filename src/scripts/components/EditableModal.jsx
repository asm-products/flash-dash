/**
* @jsx React.DOM
*/

'use strict';

var React = require('react/addons');

require('./../../styles/EditingModal.less');

var EditableModal = React.createClass({

  getDefaultProps: function(){

    return {
      action: null,
    }

  },

  getInitialState: function(){

    return {content:[]};

  },

  open: function(){

    var self = this.getDOMNode();
    var modal = self.children[1];
    modal.classList.add('openDialog');

  },

  content: function(e){

    this.props.content = e;

  },

  handleClick: function(){

    var self = this.getDOMNode();
    var modal = self.children[1];
    this.props.opened({opened:true});
    modal.classList.add('openDialog');

  },

  visible: function(e){

    var e = e || 'visible';
    var button = this.getDOMNode().children[0];

    if(e === 'visible'){
      button.classList.remove('invisible');
    }

    else{

      button.classList.add('invisible');

    }

  },

  handleCloseClick: function(){

    var self = this.getDOMNode();
    var modal = self.children[1];

    modal.classList.remove('openDialog');

  },


  render: function(){

    var template = this.props.template ? this.props.template : 'content';

    return (

      <div className='editableModal'>

        <button onClick={this.handleClick} className="modalButton">{this.props.label}</button>

        <div id="openModal" className="modalbg">

          <div className="dialog">

            <button onClick={this.handleCloseClick} title="Close" className="close">X</button>

            <div className='wrapper'>
              {template}
            </div>

          </div>
        </div>

      </div>
    );

  }

});

module.exports = EditableModal;
