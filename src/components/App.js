import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import fishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

export default class App extends Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.refs);
    }

    addFish = fish => {
        //1. take a copy of current state
        const fishes = { ...this.state.fishes };

        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        });
    };

    loadSampleFishes = () => {
        this.setState({
            fishes: fishes
        });
    };

    addToOrder = key => {
        const order = { ...this.state.order };

        order[key] = order[key] + 1 || 1;

        this.setState({ order: order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"></Header>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                orderKey={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            ></Fish>
                        ))}
                    </ul>
                </div>
                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                ></Order>
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                ></Inventory>
            </div>
        );
    }
}
