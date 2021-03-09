import React, { Component } from 'react'

export default class Composant1 extends Component {
    state = {
        count : 0
    }
    click = () => {
        this.setState({
            count : this.state.count+1
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Composant 1 </h1>
                <h2>{this.props.propsDonnee}</h2>
                <h2>{this.props.allState.age}</h2>
                <p>{this.state.count}</p>
                <button onClick={this.click}>Clique</button>
            </div>
        )
    }
}
