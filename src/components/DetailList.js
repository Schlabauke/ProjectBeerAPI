import React, { Component } from 'react';
import DetailTemp from './DetailTemp';
import NavTemp from './NavTemp';


class DetailList extends Component {
    state = {
        favBeer: []
    }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => this.setState({ favBeer: json })
            );
    }
    render() {
        return (
            <section>
                <DetailTemp
                    img={favBeer[0].image_url}
                    name={favBeer[0].name}
                    title={favBeer[0].tagline}
                    creator={favBeer.contributed_by}
                    description={favBeer[0].description}
                    brewed={favBeer[0].first_brewed}
                    acidlevel={favBeer[0].attenuation_level}
                />
                <NavTemp />
            </section>
        );
    }
}

export default DetailList;