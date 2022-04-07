import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BusinessExampleRoutingModule } from './business-example-routing.module';
import { BusinessExampleComponent } from './business-example.component';

@NgModule({
  declarations: [BusinessExampleComponent],
  imports: [CommonModule, BusinessExampleRoutingModule]
})
export class BusinessExampleModule {}
