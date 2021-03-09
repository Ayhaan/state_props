import React, { Component } from 'react'

export default class Composant2 extends Component {
    state = {
        personnage : [
            {prenom : "ayhan", age:23},
            {prenom : " elias", age:25},
        ]
    }
    render() {
        // console.log(this.state);
        return (
            <div className="card">
                <h1>Composant card </h1>
                {this.state.personnage.map( (el, i) => {
                    return (
                        <h1 key={i} >{el.prenom}</h1>
                    )
                })}
            </div>
        )
    }
}
