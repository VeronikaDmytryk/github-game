import React, { Component } from 'react'
import gameConfig from '../game.config.json'

export class GameStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: gameConfig.game.timeToWinInCemiseconds
        }
    }
    /**
     * Decrese game timer 
     */
    tick() {
        this.setState((state, props) => {
            return {
                time: state.time - 1
            };
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 10);
    }

    /**
     * End game if time is over
     */
    componentDidUpdate() {
        if (this.state.time <= 0) {
            this.props.timeEnded();
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let icons = [];
        for (let i = 0; i < this.props.currentScore; i++) {
            const icon = <span key={i} className="icon icon-beer" />;
            icons.push(icon);
        }

        let seconds = (Math.floor(this.state.time / 100) <= 9) ? "0" + Math.floor(this.state.time / 100) : Math.floor(this.state.time / 100);
        let centiseconds = (Math.floor(this.state.time % 100) <= 9) ? "0" + Math.floor(this.state.time % 100) : Math.floor(this.state.time % 100);

        return (
            <nav>
                <div className="game-stats-text">Score: {icons} </div>
                <div className="game-stats-text">Time: <span className="timer">{seconds}:{centiseconds}</span></div>
            </nav>
        )
    }
}
