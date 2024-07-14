import React, { Component } from 'react';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.stat = {
            votesToSkip: 2,
            guestCanpause: false,
            isHost: false,
        }
    }

    render() {
        return <div>
            <p>Votes: {this.state.votesToSkip}</p>
            <p>Guest Can Pause: {this.stat.guestCanpause}</p>
            <p>Host: {this.state.isHost}</p>
        </div>
    }
}