import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'app/@store/store';
import {
  IncrementAction,
  DecrementAction,
  ResetAction,
} from 'app/@store/actions/counter.action';
import { nSelector } from 'app/@store/reducers/counter.reducer';
import { LoadTodosAction } from 'app/@store/actions/todos.action';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  count: number = 0;
  todoArray: any[] = [];

  constructor(private store: Store<StoreInterface>) {
    this.store.select(nSelector).subscribe((count) => (this.count = count));
    this.store.subscribe((data) => (this.todoArray = data.todos));
  }

  increase() {
    this.store.dispatch(new IncrementAction(1));
  }

  decrease() {
    this.store.dispatch(new DecrementAction(1));
  }

  reset() {
    this.store.dispatch(new ResetAction(0));
  }

  //Todos
  load() {
    this.store.dispatch(new LoadTodosAction());
  }
}
