import Immutable, { Map, List } from 'immutable';

export default function createReducer(initialState, actionHandlers) {
  return (state = initialState, action) => {
    if (!Map.isMap(state) && !List.isList(state)) {
      state = Immutable.fromJS(state);
    }

    const handler = actionHandlers[action.type];
    console.log(action.type);
    if (!handler) {
      return state;
    }

    state = handler(state, action);
    if (!Map.isMap(state) && !List.isList(state)) {
      throw new TypeError('Reducers must return Immutable objects.');
    }
    console.log('createReducer');
    return state;
  };
}