/**
* @jsx React.DOM
*/

'use strict';

var React = require('react/addons'),
Router = require('react-router'),
Button = React.createFactory(require('./Button.jsx')),
WidgetBoxes = React.createFactory(require('./WidgetBoxes.jsx')),
EditableModal = React.createFactory(require('./EditableModal.jsx')),
LogoutMessage = React.createFactory(require('./LogoutMessage.jsx'));


// CSS
require('./../../styles/main.less');
require('./../../styles/variables.less');
require('./../../styles/MainDashboard.less');
require('./../../../node_modules/font-awesome/css/font-awesome.css');


var MainDashboard = React.createClass({

  //for themes, track state of the color clicked

  getInitialState: function () {
    return {
      currentColor: 'red',
    };
  },

  componentDidMount: function(){

    //for triggering open modals when we don't need the modal button (i.e. for logout)
    this.refs.modal.visible('invisible');
    this.refs.widgetOne.templateFunc(<WidgetOne></WidgetOne>);
    this.refs.widgetTwo.templateFunc(<WidgetTwo></WidgetTwo>);
    this.refs.widgetThree.templateFunc(<WidgetThree></WidgetThree>);

  },

  handleColorClick: function(i,e){

    //set state of current color, border the box clicked, and remove previous border
    var items = ['dark-blue', 'green', 'red', 'blue', 'yellow'];

    this.setState({currentColor: items[i]});

    var elem = document.querySelectorAll('.color-square')[i];
    elem.style.border = 'solid white 5px';
    for(var tick = 0;tick<5;tick++){

      if(tick != i){

        var e = document.querySelectorAll('.color-square')[tick];
        e.style.border = 'solid white 1px'

      }

    }

  },

  getNodeIndex(node){

    //utility function
    var index = 0;
    while ( (node = node.previousSibling) ) {
      if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
        index++;
      }
    }
    return index;

  },

  handleLogout: function(){

    //references the hidden modal in the page and triggers open
    //modal has function property open()
    var modal = this.refs.modal;
    modal.open();

  },

  render: function() {

    //assign color classes to color squares
    var items = ['dark-blue color-square', 'green color-square', 'red color-square', 'blue color-square', 'yellow color-square'];

    return (

      <div className='mainDashboard'>

        <nav className='nav-menu'>

          <div className='image-wrap'>
            <img className='color-choose' id='smallLogo' src='../../images/flashdash_logo.png' />
          </div>

          <nav className='menu-right'>

            <EditableModal template={<LogoutMessage></LogoutMessage>} ref='modal'></EditableModal>

            <div className='button-group'>

              {items.map(function(item,i) {
                return (
                  <div onClick={this.handleColorClick.bind(this,i,item)} key={i} className={item} ></div>
                );
              }, this)}

            </div>

            <div className='widget-logout'>

              <Button buttonState='active' buttonColor='white' buttonExtraClass="link">+ Add Widget</Button>
              <Button onClick={this.handleLogout} buttonState='active' buttonColor='white' buttonExtraClass='link'>Logout</Button>

            </div>

          </nav>

        </nav>

        <div id='main-images' className='main-images'>

          <WidgetBoxes ref='widgetOne'></WidgetBoxes>
          <WidgetBoxes ref='widgetTwo' ></WidgetBoxes>
          <WidgetBoxes ref='widgetThree' ></WidgetBoxes>

        </div>

      </div>

    )
  }
});

var WidgetOne = React.createClass({
  render: function() {

    return (

      <img id='center-image' src='../../images/bookoflife.jpg' />

    );

  }

});

var WidgetTwo = React.createClass({
  render: function() {

    return (

      <div className='songtext'>
        <img id='center-image' className='faded' src='../../images/bookoflife.jpg' />
        <div className='subsong'>
          <p className='title'>Song Title</p>
          <p className='subtitle'>Artist Name</p>
        </div>
      </div>


    );

  }

});

var WidgetThree = React.createClass({
  render: function() {

    return (

      <div className='tweets'>
        <img id='center-image' className='faded' src='../../images/bookoflife.jpg' />
        <div className='subtweet subsong'>
          <p className='title'>"<i>Tweet Text</i>"</p>
          <p className='title'>url</p>
        </div>
      </div>

    );

  }

});


module.exports = MainDashboard;
