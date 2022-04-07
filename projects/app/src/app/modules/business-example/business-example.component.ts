import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-business-example',
  templateUrl: './business-example.component.html',
  styleUrls: ['./business-example.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessExampleComponent {}
