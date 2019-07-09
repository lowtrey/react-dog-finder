import React from 'react';

class Dog extends React.Component {
  render() {
    let facts = this.props.dog.facts.map(fact => <h3>* {fact} *</h3>);
    return(
      <div className='Dog'>
        <h1>{this.props.dog.name}</h1>
        <h3>Age: {this.props.dog.age}</h3>
        {facts}
      </div>
    );
  }
}

export default Dog;