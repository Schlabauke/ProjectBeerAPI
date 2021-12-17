import React, { Component } from 'react';
import DetailTemp from './DetailTemp';
/* import SideTemp from './SideTemp'; */
{/*  <Route path='/RandomTemp' element={<RandomTemp />} /> */ }
/* import RandomTemp from './components/RandomTemp'; */
class RandomTemp extends Component {
    state = {
        randomBeer: []
    }
    /*   componentDidMount() {
          fetch('https://ih-beers-api2.herokuapp.com/beers/random')
              .then(response => response.json())
              .then(json => this.setState({ randomBeer: json })
              );
      } */
    render() {
        return (<div>
            {/*   <h1>{randomBeer.name}</h1>

            <DetailTemp key={i}
                img={randomBeer.image_url}
                name={randomBeer.name}
                title={randomBeer.tagline}
                creator={randomBeer.contributed_by}
                description={randomBeer.description}
                brewed={randomBeer.first_brewed}
                acidlevel={randomBeer.attenuation_level}
            /> */}
        </div>);
    }
}

export default RandomTemp;