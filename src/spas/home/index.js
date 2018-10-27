import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import './home.font'
import GithubKitty from './github.svg'
import { WelcomeScreen } from './components/WelcomeScreen'
import { GameScreen } from './components/GameScreen'
import { EndGameScreen } from './components/EndGameScreen'

class HomeSPA extends Component {
    constructor() {
        super();
        this.state = {
            firstGameScreen: true,
            gameInProgress: false,
            gameEnded: false,
            userWon: false,
        }
    }

    hideFirstGameScreen() {
        this.setState((state, props) => {
            return {
                firstGameScreen: false
            };
        });
        this.startNewGame();
    }

    startNewGame() {
        this.setState((state, props) => {
            return {
                gameInProgress: true
            };
        });
    }

    gameEnded() {
        this.setState((state, props) => {
            return {
                gameInProgress: false,
                gameEnded: true
            };
        });
    }

    userWon(result) {
        this.setState((state, props) => {
            return {
                userWon: result
            };
        });
    }

    render() {
        if (this.state.firstGameScreen) {
            return (
                <div className="spa-wrapper">
                    <WelcomeScreen hideFirstGameScreen={this.hideFirstGameScreen.bind(this)} />
                </div>
            );
        }
        if (this.state.gameInProgress) {
            return (
                <div className="spa-wrapper">
                    <GameScreen gameEnded={this.gameEnded.bind(this)} userWon={this.userWon.bind(this)} />
                </div>
            )
        }
        if (this.state.gameEnded) {
            return (
                <div className="spa-wrapper">
                    <EndGameScreen win={this.state.userWon} startNewGame={this.startNewGame.bind(this)} />
                </div>
            )
        }
    }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))
