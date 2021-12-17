import React, { Component } from 'react';
import NavTemp from './components/NavTemp';
import SideTemp from './components/SideTemp';

class SideList extends Component {
    render() {
        return (
            <section>
                <SideTemp />
                <SideTemp />
                <SideTemp />
                <SideTemp />
                <NavTemp />
            </section>


        );
    }
}

export default SideList;