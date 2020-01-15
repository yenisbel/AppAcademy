import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.board = this.props.board;
	}

	render() {
		return (
			<div>
				<p>Game</p>
				{this.props.board.grid.map((row, idxR) => (
					<div className="row" key={idxR}>
						{row.map((tile, idxT) => (
							<Tile tile={tile} key={idxT} updateGame={this.props.updateGame} board={this.props.board} />
						))}
					</div>
				))}
			</div>
		);	
	}
}

// return <div>{this.props.board.grid.map((row, idx) => <div key={idx}>{row}</div>)}</div>;
//es6 allows implicit returns when you substituted {} for ()
