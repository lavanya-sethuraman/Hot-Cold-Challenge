import React from 'react';
import '../index.css';
import TopMenu from './top-menu';
import GuessButton from './guess-button';
import GuessInput from './guess-input';
import GuessOutput from './guess-output';
import { Container } from 'semantic-ui-react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.gameGuess = Math.floor(Math.random() * 100);
        this.guessCount = 0;
        this.guessedNumbers = [];
        this.state = {
            hotCold: ""
        }
    }

    resetGame() {
        this.gameGuess = Math.floor(Math.random() * 100);
        this.guessCount = 0;
        this.guessedNumbers = [];
        this.setState({
            hotCold: ""
        });
    }

    getUserGuess(e) {
        this.input = e.target.value;
    }
    verifyGuess() {

        const userGuess = parseInt(this.input, 10);
        const gameGuess = this.gameGuess;
        const userGuessTens = Math.floor(userGuess / 10);
        const gameGuessTens = Math.floor(gameGuess / 10);
        this.guessCount++;
        this.guessedNumbers.push(userGuess);

        console.log(gameGuess);

        if (!isNaN(userGuess) && userGuess !== 0 && userGuess <= 100) {
            if (userGuess === gameGuess) {
                this.setState({
                    hotCold: 'Bravo! You did it! Play Again!'
                });
                this.gameGuess = Math.floor(Math.random() * 100);
                this.guessedNumbers = [];
                this.guessCount = 0;
            }
            else {
                if (userGuessTens === gameGuessTens) {
                    this.setState({
                        hotCold: 'HOT'
                    });
                }
                else if ((userGuessTens === gameGuessTens - 1) || (userGuessTens === gameGuessTens + 1)) {
                    this.setState({
                        hotCold: 'Kinda HOT'
                    });
                }
                else {
                    this.setState({
                        hotCold: 'COLD'
                    });

                }
            }
        }
        else {
            alert("Please enter a number between 1-100. ");
            this.resetGame();
        }
    }
    render() {

        return (
            <Container>
                <TopMenu onClick={this.resetGame.bind(this)} />
                <Container className="game">
                    <h1>HOT or COLD</h1>
                    <GuessOutput placeholder="Make a Guess" value={this.state.hotCold} />
                    <GuessInput placeholder="Enter a Number" onChange={this.getUserGuess.bind(this)} />
                    <GuessButton value="Guess" onClick={this.verifyGuess.bind(this)} />
                    <GuessOutput placeholder="Guess#" value={"Guess#" + this.guessCount} />
                    <GuessOutput placeholder="Guessed num" value={"Guessed" + this.guessedNumbers} />
                </Container>
            </Container>


        );
    }
}

