import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Register from './components/Register';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isUser: false,
            buttonTriggered: false

        };
        this.buttonOnclick = this.buttonOnclick.bind(this);
    }

    buttonOnclick(event) {
        this.setState({
            buttonTriggered: true
        });
        const buttonId = event.target.id;
        if(buttonId === "register"){
            this.display =  <Register />
        }else if(buttonId === "signIn"){
            this.display =  <Register />
        }
    }

    render() {
        const triggered = this.state.buttonTriggered;
        return (
            <React.Fragment>
            {triggered ? 
                (this.display)
             :  
                    (   <React.Fragment>
                        <Header
                        onClick={this.buttonOnclick} />
                    <Feature />
                    <About />
                    </React.Fragment>)
                
            
            }
            </React.Fragment>
        );
    }
}