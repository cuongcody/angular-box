import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Box as BoxCore } from '@core/models/box.model';
import { LoadingStore } from '@core/stores/loading.store';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { BoxService } from './box.service';
import { Box } from './models/box.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  private readonly innerBoxDetails$ = new ReplaySubject<Box>(1);

  get boxDetails$(): Observable<Box | undefined> {
    return this.innerBoxDetails$.asObservable();
  }

  public boxes$!: Observable<Box[]>;
  public isShowDetails = false;

  public constructor(
    private boxService: BoxService,
    private loadingStore: LoadingStore,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.loadingStore.openLoading();
    this.boxes$ = this.boxService
      .getList()
      .valueChanges.pipe(map(list => list.data.boxes.edges.map((it: { node: BoxCore }) => ({ ...it.node }))));

    this.boxes$.subscribe({
      next: () => this.loadingStore.closeLoading(),
      error: () => this.loadingStore.closeLoading()
    });
  }

  public toggleBox(value: Box | undefined, isShow: boolean): void {
    this.isShowDetails = isShow;
    this.updateBoxDetails(value);
    this.changeDetectorRef.detectChanges();
  }

  private updateBoxDetails(value: Box | undefined): void {
    this.innerBoxDetails$.next(value);
  }
}
