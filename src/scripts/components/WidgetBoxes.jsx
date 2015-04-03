/**
* @jsx React.DOM
*/

'use strict';


/***document.querySelector('#box').classList.add('wrap
This new technique uses the new classList API to add, remove, and toggle class names.

var container = document.querySelector('#box');

container.classList.add('wrap');
container.classList.remove('wrap');
container.classList.toggle('wrap');
***/


var React = require('react/addons'),
Button = React.createFactory(require('./Button.jsx')),
EditableModal = React.createFactory(require('./EditableModal.jsx')),
ModalForm = React.createFactory(require('./ModalForm.jsx')),
DeletePrompt = React.createFactory(require('./DeletePrompt'));


// CSS
require('./../../styles/MainDashboard.less');

/***
The Widget Boxes refer to the three big squares on the page
***/


var WidgetBoxes = React.createClass({

  getDefaultProps: function(){
    return {
      opened: false,
      action: 'none'
    };
  },

  getInitialState: function(){

    return {data: []};

  },

  componentDidMount: function(){

    this.setState({
      opened: false,
      action: 'open',
      template: this.props.template
    });

    //since the edit and delete button are only shown during hover, hide them
    this.refs.modal.visible('invisible');
    this.refs.modalDelete.visible('invisible');

  },

  templateFunc: function(data){

    this.setState({template: data});

  },

  MouseOver: function(){

    //show the buttons
    this.refs.modal.visible('visible');
    this.refs.modalDelete.visible('visible');

  },

  MouseOut: function(){

    //hide the buttons
    this.refs.modal.visible('invisible');
    this.refs.modalDelete.visible('invisible');

  },

  handleOpen:function(e){

    //make sure the popup doesn't get changed when the user hovers mouse outside of viewport
    this.setState({opened: e.opened});

  },

  handleEdit: function(e){

    //logic

  },

  handleCloseClick: function(){

    //logic

  },

  render: function(){

    //The editable modal has a template property that allows you to pass in a template that fits inside the componentDidMount
    //The label prop is for the open that opens it. We need ref to trigger its open/close function from another element.
    //We need an opened handler to trigger logic for when it's opened.

    return (

      <div onMouseOut={this.MouseOut} onMouseOver={this.MouseOver} className='big-images'>
        <div className='image-wrapper'>

          {this.state.template}

        </div>
        <div className='big-image editDelete'>
          <div className='editbutton'>
            <EditableModal template={<ModalForm></ModalForm>} label='edit' ref='modal' opened={this.handleOpen} className='editableModal'></EditableModal>
          </div>
          <div className='deletebutton'>
            <EditableModal template={<DeletePrompt></DeletePrompt>} label='delete' ref='modalDelete' opened={this.handleOpen} className='editableModal delete'></EditableModal>
          </div>
        </div>

      </div>

    );

  }

});




module.exports = WidgetBoxes;
