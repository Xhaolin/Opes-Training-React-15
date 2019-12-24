import React from 'react';
import ReactDOM from 'react-dom';

var createReactClass = require('create-react-class');

import Icono1 from '../images/icon1.png';

import * as links from './linkComponents.jsx';

var Link1 = links.link1; 


const DivHola = createReactClass({

  getInitialState: function() {

    return {filters: this.props.filtros, show: this.props.mostrar}
  },


  componentWillReceiveProps(nextProps) {

      var _filters = this.state.filters;
      _filters.width = nextProps.filtros.width;

      this.setState({filters: _filters});  

  },

  render: function() {

    var _style = {display: "inline-block", backgroundColor: "cyan", width: this.state.filters.width+"px"};

    return (

        <div style={_style}>
            <span>Hola!!!</span>
        </div>
    );
  }
});


const DivMundo = createReactClass({

  render() {
    return (
        <div>Mundo!!!
        </div>
    );
  }
});

export { DivHola, DivMundo}

