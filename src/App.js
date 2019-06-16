import React, { Component } from "react";
import StarwarsCard from "./components/Starwarscard";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";



class App extends Component {
  state = {
    characters: characters.map(character => ({ ...character, clicked: false })),
    score: 0,
    highScore: 0
  }

  handleClick = character => {
    console.log(character)
    let { score, highScore, characters } = this.state;

    if (character.clicked === true) {
      highScore = score > highScore ? score : highScore;
      this.setState({
        characters: characters.map(character => ({ ...character, clicked: false })),
        score: 0,
        highScore: highScore
      }, () => { this.shuffleArray(this.state.characters) })
    } else if(character.clicked === false){

      this.setState({
        score: score +1
      })
      character.clicked = true;

      this.shuffleArray(characters)
    }
  }

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({
      characters: array
    })
  }


  render() {
    return (
      <div>
        <Nav 
        score={this.state.score}
        highScore={this.state.highScore}
        >
        
        </Nav>
        <Jumbotron></Jumbotron>

        <Wrapper>


          {this.state.characters.map(character => (
            <StarwarsCard
              character={character}
              onClick={this.handleClick}
              id={character.id}
              image={character.image}
            />
          ))}



        </Wrapper>

      </div>
    )
  }
}

export default App;
