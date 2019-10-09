export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = item => ({
  type: REMOVE_FEATURE,
  item
});

export const addFeature = item => ({
  type: ADD_FEATURE,
  item
});
