import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { LoadingStore } from '@core/stores/loading.store';
import { LoadingState } from 'projects/app-ui/src/lib/loading-indicator/loading-state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet> <ui-loading-indicator [state]="loadingState$ | async"></ui-loading-indicator>
  `
})
export class AppComponent implements OnInit {
  get loadingState$(): Observable<LoadingState> {
    return this.loadingStore.loadingState$;
  }

  public constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private loadingStore: LoadingStore,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.loadingState$.subscribe(state =>
      state === LoadingState.LOADING ? this.addStylesToBody() : this.removeStylesFromBody()
    );
  }

  private removeStylesFromBody(): void {
    this.renderer.removeStyle(this.document.body, 'overflow');
    this.renderer.removeStyle(this.document.body, 'max-height');
    this.changeDetectorRef.detectChanges();
  }

  private addStylesToBody(): void {
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    this.renderer.setStyle(this.document.body, 'max-height', '100vh');
    this.changeDetectorRef.detectChanges();
  }
}
