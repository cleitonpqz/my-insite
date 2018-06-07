import React, { Component } from 'react';
import Item from './item'

class Main extends Component {
    render() {
        return(
            <main className="container-fluid">
                <Item />
            </main>
        );
    }
}

export default Main;