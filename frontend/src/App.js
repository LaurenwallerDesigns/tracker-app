import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Register from './components/Register';
import UserPage from './components/UserPage';

// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};
const headers = {
  'Content-Type': 'application/json',
};
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modifiedData: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                verifyPassword: "",
                boolean: true
            },
            isUser: false,
            buttonTriggered: false

        };
        this.buttonOnclick = this.buttonOnclick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buttonOnclick(event) {
        this.setState({
            buttonTriggered: true
        });
        const buttonId = event.target.id;
        if(buttonId === "register"){
            this.display =  <Register
                                submit={this.handleSubmit}
                                change={this.handleInputChange} />
        }else if(buttonId === "signIn"){
            this.display =  <Register />
        }
    }

    handleInputChange = ({ target: { name, value }}) => {
        this.setState(prev => ({
            ...prev,
            modifiedData: {
                ...prev.modifiedData,
                [name]: value
            }
        }));
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        console.log('clicked');

        try {
            await fetch('http://localhost:1337/new-users', {
                method: "POST",
                headers: headers,
                body: JSON.stringify(this.state.modifiedData)
            })
            .then(checkStatus)
            .then(parseJSON);
            this.setState({
                isUser: true
            });
        } catch (error) {
            this.setState({ error });
        }
    }

    render() {
        const triggered = this.state.buttonTriggered;
        const loggedIn = this.state.isUser;
        const userInfo = this.state.modifiedData;
        
        console.log(userInfo);
        return (
            <React.Fragment>
            {loggedIn ? (
                <UserPage
                    fname={this.state.modifiedData.firstName} />
        
            ) : (
            triggered ? 
                (this.display)
             :  
                    (   <React.Fragment>
                        <Header
                        onClick={this.buttonOnclick} />
                    <Feature />
                    <About />
                    </React.Fragment>)
                
            
            )}
            </React.Fragment>
        );
    }
}