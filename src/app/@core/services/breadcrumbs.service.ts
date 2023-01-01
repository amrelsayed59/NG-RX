import { Injectable, Output, EventEmitter } from '@angular/core';
import { Breadcrumb } from '../data/breadcrumb';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {

  @Output() breadcrumbsChanged = new EventEmitter<Breadcrumb[]>();
  @Output() breadcrumbsClicked = new EventEmitter<Breadcrumb>();

  public breadcrumbs: Breadcrumb[] = [];

  constructor() {

  }

  setBreadcrumbs(breadcrumbs: Breadcrumb[]) {
    this.breadcrumbs = breadcrumbs;
    this.breadcrumbsChanged.emit(this.breadcrumbs);
  }

  returnBreadcrumbs() {
    return this.breadcrumbs;
  }

}
