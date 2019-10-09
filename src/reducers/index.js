import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const initialVehicleState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg'
  },
  features: []
};

const initialShopState = [
  { id: 1, name: 'V-6 engine', price: 1500 },
  { id: 2, name: 'Racing detail package', price: 1500 },
  { id: 3, name: 'Premium sound system', price: 500 },
  { id: 4, name: 'Rear spoiler', price: 250 }
];

export const vehicleReducer = (state = initialVehicleState, action) => {
  switch (action.type) {
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.item.price,
        features: state.features.filter(({ id }) => id !== action.item.id)
      };
    case ADD_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.item.price,
        features: [...state.features, action.item]
      };
    default:
      return state;
  }
};

export const shopReducer = (state = initialShopState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
