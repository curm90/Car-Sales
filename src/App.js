import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { removeFeature, addFeature } from './actions';

const App = ({ shop, vehicle, removeFeature, addFeature }) => {
  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={vehicle.car} />
        <AddedFeatures car={vehicle} removeFeature={removeFeature} />
      </div>
      <div className='box'>
        <AdditionalFeatures shop={shop} addFeature={addFeature} />
        <Total car={vehicle.car} additionalPrice={vehicle.additionalPrice} />
      </div>
    </div>
  );
};

export default connect(
  state => state,
  { removeFeature, addFeature }
)(App);
