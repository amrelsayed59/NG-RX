import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DECREMENT, INCREMENT, RESET } from '../actions/counter.action';

export interface Counter {
  count: number;
}

let initialState = {
  count: 0,
};

export function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        count: state.count - action.payload,
      };
    case RESET:
      return {
        count: action.payload,
      };
    default:
      return state;
  }
}

let counterFS = createFeatureSelector<Counter>('counter');
export let nSelector = createSelector(counterFS, (state) => state.count);
