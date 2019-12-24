import React, { Component } from 'react';
class StorePicker extends Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please enter the store</h2>
                <input type="text" name="" id="" placeholder="Store Name" />
                <button type="submit">Visit Store -></button>
            </form>
        );
    }
}

export default StorePicker;
