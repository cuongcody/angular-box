import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `
    <h1>Not found page</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {}
