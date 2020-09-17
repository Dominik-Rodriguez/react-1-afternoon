import React, {Component} from 'react'

export default class Palindrome extends Component{
    constructor() {
        super();
    
        this.state = {
          userInput: '',
          palindrome: ''
        };
      }
    
      handleChange(val) {
        this.setState({ userInput: val });
      }

    assignPalindrome(userInput){
        let word = userInput;
        let reverse = userInput;
        reverse = reverse.split('');
        reverse = reverse.reverse();
        reverse = reverse.join('');

        if(reverse === word){
            this.setState({palindrome: 'true'});
        }
        else{
            this.setState({palindrome: 'false'});
        }
    }

    render() {
        return (
          <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.assignPalindrome(this.state.userInput) }> Check </button>
            <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
          </div>
        )
      }
    
}