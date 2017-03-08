import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        	<div className="slogan"><h2>Aprendiendo React</h2></div>
		<div className="socialnetworks">
			<ul className="actionsocial">	
			<li id="fbk"><a tittle="Facebook" href=""></a></li>
			<li id="gp"></li>
			<li id="tw" ></li>				
			</ul>
		</div>
	</div>
      		<div ClassName="wrapper">
		   <div className="gridarticles">
			<div className="slidebar">Velocidad</div>
			<div className="cube" id="cub1">Facil de codificar</div>
			<div className="cube" id="cub2">Automatizaciòn de procesos</div>
			<div className="cube" id="cub3">Compilaciòn</div>
			<div className="cube" id="cub4">Componentes</div>
			<div className="cube" id="cub5">Depende de node</div>
			<div className="cube" id="cub6">Una maravilla</div>
		 </div>
		</div>
	</div>
    );
  }
}

export default App;
