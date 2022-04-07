import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ButtonModule } from '@app-ui';
import { HeaderModule } from '@shared/header/header.module';

import { BoxService } from './box.service';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableRoutingModule, HeaderModule, MatTableModule, MatSortModule, ButtonModule],
  providers: [BoxService]
})
export class TableModule {}
