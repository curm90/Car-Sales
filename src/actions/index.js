export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = ({ id }) => ({
  type: REMOVE_FEATURE,
  id
});

export const addFeature = item => ({
  type: ADD_FEATURE,
  item
});
