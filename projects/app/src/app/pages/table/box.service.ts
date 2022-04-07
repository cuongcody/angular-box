import { Injectable } from '@angular/core';
import { BoxApi } from '@core/api/box.api';
import { BoxList } from '@core/models/box-list.model';
import { QueryRef } from 'apollo-angular';

@Injectable()
export class BoxService {
  public constructor(private boxApi: BoxApi) {}

  public getList(): QueryRef<BoxList, any> {
    return this.boxApi.getList();
  }
}
