import React, { Component } from 'react';
import NavTemp from './components/NavTemp';
import SideTemp from './components/SideTemp';


class SideList extends Component {
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
                {this.state.favBeer.map((e, i) => <SideTemp
                    key={i}
                    img={e.image_url}
                    name={e.name}
                    title={e.tagline}
                    creator={e.contributed_by}
                />)}
                <NavTemp />
            </section>


        );
    }
}

export default SideList;