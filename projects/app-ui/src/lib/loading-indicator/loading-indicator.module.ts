import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingIndicatorComponent } from './loading-indicator.component';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [LoadingIndicatorComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [LoadingIndicatorComponent]
})
export class LoadingIndicatorModule {}
