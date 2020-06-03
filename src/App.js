import React from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  state = {
    dogs: [
      {
        name: "Scruffles",
        type: "Chihuahua",
      },
      {
        name: "Snarf",
        type: "Border Collie",
      },
      {
        name: "Wookie",
        type: "English Sheepdog",
      },
    ],
    favorite: "",
  };

  pickNewFavorite() {
    let pickADog = Math.floor(Math.random() * this.state.dogs.length);
    return this.state.dogs[pickADog];
  }

  onPickNewFavorite = () => {
    this.setState({ favorite: this.pickNewFavorite() });
  }

  render() {
    return (
      <div>
        <Header numDogs={this.state.dogs.length} />
        <h1>Dank Doggos</h1>


        
        <div>
          {this.state.dogs.map((dog, index) => (
            <Dog dog={dog} key={index}/>
          ))}
        </div>



        <h2>My Favorite dog is {this.state.favorite.name}</h2>
        <button onClick={this.onPickNewFavorite}>Pick New Favorite</button>
      </div>
    );
  }
}

export default App;