import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Feature />
                <About />
            </React.Fragment>
        );
    }
}