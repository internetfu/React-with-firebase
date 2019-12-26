import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import fishes from '../sample-fishes';

export default class App extends Component {
    state = {
        fishes: {},
        order: {}
    };

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

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"></Header>
                </div>
                <Order></Order>
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                ></Inventory>
            </div>
        );
    }
}
