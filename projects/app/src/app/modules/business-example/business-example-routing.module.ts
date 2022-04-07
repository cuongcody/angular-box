import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessExampleComponent } from './business-example.component';

const routes: Routes = [{ path: '', component: BusinessExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessExampleRoutingModule {}
