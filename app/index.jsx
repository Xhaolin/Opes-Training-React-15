import React from 'react';
import ReactDOM from 'react-dom';

var createReactClass = require('create-react-class');

import './css/styles1.css';

import * as divComponents from './components/divComponents.jsx';

var DivHola = divComponents.DivHola; 

const Newdiv = createReactClass({

  getInitialState: function() {

    return ({width: "300"})
  },

  refresh: function(event) {

    this.setState({ width: this.refs.inputWidth.state.text });
  },

  render() {

    var filters = {color: "blue", width: this.state.width};

    return (
      <div>	
        <DivHola filtros={filters} mostrar={true} />

        <div>
            Width: <InputWidth ref="inputWidth" />

           <a href="#" onClick={(e) => this.refresh(e)}>Refresh</a>
        </div>

      </div>


    );
  }
});


const InputWidth = createReactClass({

  getInitialState: function() {

    return ({text: "300"})
  },

  change: function(event) {

    this.setState({ text: event.target.value });
  },

  render: function() {
    return <input type="text" onChange={this.change} value={this.state.text} />
  }

});

ReactDOM.render(<Newdiv />, document.getElementById('content'));



