import { LoadingState } from '@app-ui';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export class LoadingStore {
  private readonly innerLoadingState$ = new BehaviorSubject<LoadingState>(LoadingState.READY);
  private _timer!: any;

  get loadingState$(): Observable<LoadingState> {
    return this.innerLoadingState$.pipe(shareReplay(1));
  }

  public openLoading(): void {
    this.innerLoadingState$.next(LoadingState.LOADING);
  }

  public closeLoading(): void {
    if (this._timer) {
      clearTimeout(this._timer);
    }

    this._timer = setTimeout(() => this.innerLoadingState$.next(LoadingState.READY), 300);
  }
}
