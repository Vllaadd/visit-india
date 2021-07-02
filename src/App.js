import React from 'react';
import { Navbar } from 'reactstrap';
import './App.css';
import Greet from './components/Greet'
import Menu from './components/Menu';
import PLACES from './shared/Places';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      places : PLACES
    }
  }

    render(){
      return(
        <div className='App'> 
            <Navbar>
              <div>
                <h3>Incredible India</h3>
              </div>
            </Navbar>
            <Greet />
            <h1>Famous Places of India</h1>
            <Menu places={this.state.places}/>
        </div>
      )
    }
}

export default App;
