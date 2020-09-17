import React, {Component} from 'react';

export default class EvenAndOdd extends Component{
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val});
    }

    assignEvenAndOdds(userInput){
        let arr = userInput.split(',');
        let even = [];
        let odd = [];

        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                even.push(parseInt(arr[i]));
            }
            else{
                odd.push(parseInt(arr[i]));
            }
        }
        this.setState({evenArray: even, oddArray: odd});
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)} />
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}