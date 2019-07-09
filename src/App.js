import React from 'react';
import Nav from './Nav';
import Dog from './Dog';
import Dogs from './Dogs';
import { Switch, Route } from 'react-router-dom';  
import './App.css';

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: 'whiskey',
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: 'hazel',
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: 'tubby',
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {
    let links = this.props.dogs.map(dog => (dog.name));
    return (
      <div className='App'>
        <Nav links={links} />
        <Switch>
          <Route exact path='/dogs' render={() => <Dogs allDogs={this.props.dogs} />} />
          <Route 
            path="/dogs/:dogName"
            render={(routeProps) => {
              let dogObj = this.props.dogs.filter(dog => 
                (dog.name.toLowerCase() === routeProps.match.params.dogName))[0];
              return <Dog dog={dogObj} />;
            }} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
