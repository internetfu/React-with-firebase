import React, { Component } from 'react';
import { getFunName } from '../helpers';
class StorePicker extends Component {
    constructor() {
        super();

        this.myInput = React.createRef();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore = event => {
        event.preventDefault();
        // this.ref.current
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter the store</h2>
                <input
                    type="text"
                    required
                    placeholder="Store Name"
                    ref={this.myInput}
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store -></button>
            </form>
        );
    }
}

export default StorePicker;
