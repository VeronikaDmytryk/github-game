import GithubKitty from '../github.svg'
import React, { Component } from 'react'

const SCREEN_OFFSET = 80;

export class Target extends Component {
    constructor() {
        super();
        this.state = {
            targetClicked: false,
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
            position: {
                x: Math.floor(Math.random() * (window.innerWidth + SCREEN_OFFSET)),
                y: Math.floor(Math.random() * (window.innerHeight + SCREEN_OFFSET))
            }
        }
        this.interval = setInterval(() => this.moveTarget(), 1500);
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.handleResize());
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState((state, props) => {
            return {
                screen: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            };
        });
    }

    moveTarget() {
        let randomX = Math.floor(Math.random() * (this.state.screen.width + SCREEN_OFFSET));
        let randomY = Math.floor(Math.random() * (this.state.screen.height + SCREEN_OFFSET));

        this.setState((state, props) => {
            return {
                position: {
                    x: randomX,
                    y: randomY
                }
            };
        });
    }

    targetClicked() {
        this.setState((state, props) => {
            return {
                targetClicked: true
            };
        });

        setTimeout(() => {
            this.setState((state, props) => {
                return {
                    targetClicked: false
                };
            });
        }, 100);
        this.props.targetClicked();
    }

    render() {
        return (
            <div className="gameField" >
                <div className={(this.state.targetClicked) ? "wrap clicked" : "wrap"} style={{ left: this.state.position.x + "px", top: this.state.position.y + "px" }}>
                    <GithubKitty id="target" className="targetIcon" onMouseDown={() => this.targetClicked()} />
                </div>
            </div>
        )
    };
}
