import React from 'react';

export default class Tile extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.handleClick = this.handleClick.bind(this);
		this.state = { option: '' };
		// this.state.option ="flag",
	}

	handleClick(event) {
		event.preventDefault();
		let eventTile = event.altKey;
		this.props.updateGame(this.props.tile, eventTile);
	}

	render() {
		let classname = 'unexplored';
		if (this.props.tile.bombed) {
			this.state.option = 'b';
			classname = 'bomb';
		} else if (this.props.tile.flagged) {
			this.state.option = 'f';
			classname = 'flag';
		} else if (this.props.tile.explored && this.props.tile.adjacentBombCount() > 0) {
			this.state.option = 'e';
			classname = 'explored';
		}

		return (
			<div className={`tile ${classname}`} onClick={this.handleClick}>
				{this.state.option}
			</div>
		);
	}
}
