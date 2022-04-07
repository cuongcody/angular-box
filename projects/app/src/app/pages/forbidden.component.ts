import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `
    <h1>You have no right to access the resource!</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForbiddenComponent {}
