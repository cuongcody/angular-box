import { Component, Input } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoadingState } from './loading-state.model';

@Component({
  selector: 'ui-loading-indicator',
  template: `
    <div class="loading-indicator" *ngIf="(ready$ | async) === false">
      <ui-spinner *ngIf="loading$ | async"></ui-spinner>
    </div>
  `,
  styleUrls: ['./loading-indicator.component.sass']
})
export class LoadingIndicatorComponent {
  private readonly stateSubject$ = new ReplaySubject<LoadingState>(1);

  @Input() set state(state: LoadingState) {
    this.stateSubject$.next(state);
  }

  get loading$(): Observable<boolean> {
    return this.getStateObservable(LoadingState.LOADING);
  }

  get ready$(): Observable<boolean> {
    return this.getStateObservable(LoadingState.READY);
  }

  private getStateObservable(state: LoadingState): Observable<boolean> {
    return this.stateSubject$.pipe(map(nextState => nextState === state));
  }
}
