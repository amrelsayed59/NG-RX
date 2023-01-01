export const INCREMENT = '[Counter] increment';
export const DECREMENT = '[Counter] decrement';
export const RESET = '[Counter] reset';

export class IncrementAction {
  type: string = INCREMENT;
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}

export class DecrementAction {
  type: string = DECREMENT;
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}

export class ResetAction {
  type: string = RESET;
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}
