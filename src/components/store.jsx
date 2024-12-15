// store.js
import { createStore } from 'redux';
import Cookies from 'js-cookie';

// Define action types as constants
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';


// Action creators
export const toggleDarkMode = () => ({ type: TOGGLE_DARK_MODE });


// Initial state
const initialState = {
  darkMode: Cookies.get('darkMode') === 'true',
  isMenuOpen: false,
  cardData: [
    { id: 1, icon: 'wifi', title: 'WIFI' },
    { id: 2, icon: 'biking', title: 'Biking' },
    { id: 3, icon: 'swimmer', title: 'POOL' },
    { id: 4, icon: 'parking', title: 'PARKING' },
    { id: 5, icon: 'wine', title: 'BAR' },
    { id: 6, icon: 'music', title: 'MUSIC' },
    { id: 7, icon: 'bed', title: 'ROOMS' },
  ],
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      // Toggle darkMode and update the cookie
      Cookies.set('darkMode', !state.darkMode, { expires: 365 }); // Set cookie to expire in 365 days
      return {
        ...state,
        darkMode: !state.darkMode,
      };
   
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
