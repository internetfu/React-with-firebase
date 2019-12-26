import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import fishes from '../sample-fishes';
import Fish from './Fish';
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
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                details={this.state.fishes[key]}
                            ></Fish>
                        ))}
                    </ul>
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
