import React from 'react';
import ReactDOM from 'react-dom';

var createReactClass = require('create-react-class');


const link1 = createReactClass({

  getInitialState: function( ) {

     return { pressed: false, respuesta: null, mensaje: null }
  },

  clickLink: function(e) {

  	 this.setState({pressed: true});

  	 this.fgetURL("http://localhost:37468");

  	 e.preventDefault();
  },


  fgetURL: function( pURL) {

    var _this = this;

  	fetch(pURL)

	  .then(

	    function(response) {
	      console.log("response");
	      if (response.status !== 200  && response.status !== 404) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);

          _this.setState({pressed: false, respuesta: true, mensaje: "error status:" + response.status});

	        return;
	      }

	      // Examine the text in the response
        response.json()
	      .then(function(contenido) {

  	         _this.setState({pressed: false, respuesta: true, mensaje: "ok"});

	      });
	    }
	  )
	  .catch(function(err) {

	    console.log('Fetch Error :-S', err);
      _this.setState({pressed: false, respuesta: true, mensaje: "network error"});      
	  });

  },

  render: function() {

  	var _link = "";

    var _respuesta = this.state.respuesta;

    var _divMensaje = "";

    if (_respuesta != null) {

      _divMensaje = <div className="mensaje">{this.state.mensaje}</div>;
    }

    if (this.state.pressed) {

    	_link = "Procesando..."
    }
    else {

    	_link = <a href="" onClick={(e) => this.clickLink(e)}>Invocar http URL</a>

    }

    return (
      <div>
      	<div>
          	{_link} &nbsp;
        </div>
        {_divMensaje}
      </div>
    );
  }

});


export { link1}

