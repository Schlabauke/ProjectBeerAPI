import React, { Component } from 'react';
import DetailTemp from './DetailTemp';
import NavTemp from './NavTemp';

/* hier brauch ich nur ein Template, dass angezeigt wird. Das stimmt so nicht */
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
                {this.state.favBeer.map((e, i) => <DetailTemp
                    key={i}
                    img={e.image_url}
                    name={e.name}
                    title={e.tagline}
                    creator={e.contributed_by}
                    description={e.description}
                    brewed={e.first_brewed}
                    acidlevel={e.attenuation_level}
                />)}
                <NavTemp />
            </section>

        );
    }
}

export default DetailList;