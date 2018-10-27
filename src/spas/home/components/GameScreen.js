import React, { Component } from 'react'
import { GameStats } from './GameStats'
import { Target } from './Target'
import gameConfig from '../game.config.json'

export class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timeEnded: false
        }
    }

    timeEnded() {
        this.setState((state, props) => {
            return {
                timeEnded: true
            };
        });
    }

    targetClicked() {
        this.setState((state, props) => {
            return {
                score: this.state.score + 1
            };
        });
    }

    componentDidUpdate() {
        if (this.state.score >= gameConfig.game.maxScore) {
            this.props.gameEnded();
            this.props.userWon(true);
        }
        else if (this.state.timeEnded) {
            this.props.gameEnded();
            this.props.userWon(false);
        }
    }

    render() {
        return (
            <div>
                <GameStats timeEnded={() => this.timeEnded()} currentScore={this.state.score} />
                <Target targetClicked={() => this.targetClicked()} />
            </div>
        );
    }
}
