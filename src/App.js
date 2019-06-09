import React from 'react';
import Auth0 from './Auth0';

const auth = new Auth0();

class App extends React.Component {
  componentDidMount(){
    auth.login();
  }
  render() {
    return (
      <div/>
    );
  }
}

export default App;
