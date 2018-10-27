import React, { Component } from 'react'

export const EndGameScreen = (props) => {
    if (props.win) {
        return (
            <div className="welcome-winning-screen">
                <h1 className="welcome-winning-text">Congrats!<br />You won :)</h1>
                <button className="restart-button" onClick={props.startNewGame}>Start again</button>
            </div>
        )
    }
    else {
        return (
            <div className="welcome-winning-screen">
                <h1 className="welcome-winning-text">Sorry<br />You lost :(</h1>
                <button className="restart-button" onClick={props.startNewGame}>Try again</button>
            </div>
        )
    }
}
