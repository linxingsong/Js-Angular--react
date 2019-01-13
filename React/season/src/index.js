import React from 'react';
import ReactDom from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // // one way to initial state
    // constructor(props) {
    //     super(props);

    //     // this is only time to direct assignment to this.state
    //     this.state = {lat: null, errorMessage: ''};
    // }
    state = { lat: null, errorMessage:''};

    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //update state using setState
                this.setState({lat: position.coords.latitude});

                //never do following
                // this.state.lat = position.coords.latitude;
            },
            err => this.setState({errorMessage: err.message})
            
        );
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        }
        return <Spinner message='Pleas accept location request. '></Spinner>;

    }

    // React says render is needed.
    render(){
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDom.render(
    <App />, document.querySelector('#root')
);

