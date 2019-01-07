/* eslint-disable */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Fullscreen enabled={this.props.isFull}> */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/game" component={Game} />
					</Switch>
				{/* </Fullscreen> */}
			</div>
		);
	}
}

export default App;
