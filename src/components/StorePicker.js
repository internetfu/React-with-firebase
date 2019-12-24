import React, { Component, Fragment } from 'react';

class StorePicker extends Component {
    render() {
        return (
            <Fragment>
                <form className="store-selector">
                    <h2>Please enter the store</h2>
                    <input type="text" name="" id="" placeholder="Store Name" />
                    <button type="submit">Visit Store -></button>
                </form>
                <p>
                    To put Sibling elements, should wrap the elements in
                    Fragment
                </p>
            </Fragment>
        );
    }
}

export default StorePicker;
