import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { FailedACtion, LOAD, SuccessACtion } from '../actions/todos.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodosEffect {
  todoEffect = createEffect(() =>
    this.actions.pipe(
      ofType(LOAD),
      mergeMap(() =>
        this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
          map((data) => new SuccessACtion(data)),
          catchError((err) => of(new FailedACtion(err)))
        )
      )
    )
  );

  constructor(private http: HttpClient, private actions: Actions) {}
}
