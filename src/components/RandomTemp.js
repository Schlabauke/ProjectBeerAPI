import React, { Component } from 'react';
/* import SideTemp from './SideTemp'; */

class RandomTemp extends Component {
    state = {
        randomBeer: []
    }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => response.json())
            .then(json => this.setState({ randomBeer: json })
            );
    }
    render() {
        return (<div>
            <h1>{randomBeer.name}</h1>
            {/*   <SideTemp
                img={randBeer[0].image_url}
                name={randBeer[0].name}
                title={randBeer[0].tagline}
                creator={randBeer[0].contributed_by} /> */}
        </div>);
    }
}

export default RandomTemp;