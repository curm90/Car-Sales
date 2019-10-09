export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = ({ item }) => ({
  type: ADD_FEATURE,
  item
});

export const addFeature = ({ id }) => ({
  type: REMOVE_FEATURE,
  id
});
