import React, { Component } from 'react'
import gameConfig from '../game.config.json'

export class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageNumber: 0
        }
        this.messages = gameConfig.game.messages;
    }

    /**
    * Changes the message number
    */
    componentDidMount() {
        this.forceUpdate();
    }

    /**
    * Returns true if there's more messages to show
    */
    showNextMessage(){
        return this.state.messageNumber < this.messages.length;
    }

    componentDidUpdate() {
        if (this.showNextMessage()) {
            this.messageTimer = setTimeout(() => {
                this.setState((state, props) => {
                    return {
                        messageNumber: state.messageNumber + 1,
                    };
                });
            }, 3000);
        }
        else {
            // Exit welcome screen
            this.props.hideFirstGameScreen();
        }
    }

    componentWillUnmount(){
        clearTimeout(this.messageTimer);
    }

    render() {
        let message = "";
        if (this.showNextMessage()) { 
            message = this.messages[this.state.messageNumber].replace("$MAXSCORE", gameConfig.game.maxScore); 
        }
        return (
            <div className="welcome-winning-screen">
                <div className="welcome-winning-text">{message}</div>
            </div>
        );
    }
}
