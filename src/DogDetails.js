import React from 'react';

class DogDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.dog.name}</h1>
      </div>
    );
  }
}

export default DogDetails;