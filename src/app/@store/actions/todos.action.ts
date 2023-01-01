export const SUCCESS = '[Todo] success';
export const FAILED = '[Todo] failed';
export const LOAD = '[Todo] load';

export class LoadTodosAction {
  type: string = LOAD;
}

export class SuccessACtion {
  type: string = SUCCESS;
  payload: any;

  constructor(payload: any) {
    this.payload = payload;
  }
}

export class FailedACtion {
  type: string = FAILED;
  payload: any;

  constructor(payload: any) {
    this.payload = payload;
  }
}
