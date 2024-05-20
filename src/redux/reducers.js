import { combineReducers } from 'redux';
import { ADVANCE_TIME } from './actions';

const initialState = {
  player: {
    name: '',
    guild: [],
    resources: {
      gold: 0,
      food: 0,
    },
  },
  world: {
    time: 0,
    map: [],
    factions: [],
  },
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADVANCE_TIME:
      return {
        ...state,
        world: {
          ...state.world,
          time: state.world.time + action.payload,
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game: gameReducer,
});

export default rootReducer;
