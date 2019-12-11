import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = ({ shop, addFeature }) => {
  // debugger;
  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {shop.length ? (
        <ol type='1'>
          {shop.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addFeature={addFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
