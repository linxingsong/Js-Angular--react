import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    // one way to initial state
    constructor(props) {
        super(props);

        // this is only time to direct assignment to this.state
        this.state = {lat: null, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //update state using setState
                this.setState({lat: position.coords.latitude});

                //never do following
                // this.state.lat = position.coords.latitude;
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }


    // React says render is needed.
    render(){
        
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>

    }
}

ReactDom.render(
    <App />, document.querySelector('#root')
);

