import React, { Component } from 'react'
import Composant1 from './components/Composant1'
import Composant2 from './components/Composant2'

export default class App extends Component {
  state = {
    prenom: "Ayhan", 
    age : 23
  }


  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Composant App {this.state.prenom}</h1>
        < Composant1 propsDonnee="donnée de la props" allState = {this.state}/>
        < Composant2  />
      </div>
    )
  }
}
