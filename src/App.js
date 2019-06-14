import React, { Component } from "react";
import StarwarsCard from "./components/Starwarscard";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";



class App extends Component {
  state = {
    characters
  }

  render() {
    return (
      <Wrapper>

      {this.state.characters.map(character => (
        <StarwarsCard 
          id={character.id}
          image={character.image}
        />
      ))}



      </Wrapper>
    )
  }
}

export default App;
