import React from 'react';
import './DogDetails.css';

class DogDetails extends React.Component {
  render() {
    let {dog} = this.props;
    return (
      <div className='container'>
        <div className='DogDetails row'>
          <div className='col-11 col-lg-5'>
            <div className='DogDetails-card card'>
              <img className='card-img-top' src={dog.src} alt={dog.name} />
              <div className='card-body'>
                <h2 className='card-title'>{dog.name}</h2>
                <h4 className='card-subtitle text-muted'>
                  {dog.age} years old
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails;