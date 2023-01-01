import { ActionReducerMap } from '@ngrx/store';
import { Counter, counterReducer } from './reducers/counter.reducer';
import { ToDo, TodosReducer } from './reducers/todos.reducer';

export interface StoreInterface {
  counter: Counter;
  todos: ToDo[];
}

interface CustomAction {
  type: string;
  payload: any;
}

export const reducers: ActionReducerMap<any> = {
  counter: counterReducer,
  todos: TodosReducer,
};
