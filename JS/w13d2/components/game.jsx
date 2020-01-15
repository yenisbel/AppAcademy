import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from './board';
import Tile from './tile';

export default class Game extends React.Component {
	constructor() {
		super();
		const gameboard = new Minesweeper.Board(9, 9);
		this.state = {
			board: gameboard
		};
		this.updateGame = this.updateGame.bind(this);
	}
	// update game will take the tile and as setState for the board
	updateGame(tile, eventTile) {
		if (eventTile === true) {
			tile.toggleflag();
		} else {
			tile.explore();
		}
		this.setState({ board: this.state.board });
		// winner
		if (this.state.board.won()) {
			alert('you did it!!');
		} else if (this.state.board.lost()) {
			this.render();
			window.setTimeout(alert('next time'), 3000);
		}

		// loser
	}

	render() {
		// let board = this.state.board;

		return (
			<div>
				<Board board={this.state.board} updateGame={this.updateGame} />
			</div>
		);
	}
}

//board= (is a prop we are creating)
//Board is name of component we are creating
//this.state.board is the Game component's state and board key being track of (line9)
