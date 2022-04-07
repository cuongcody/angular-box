import { Injectable } from '@angular/core';
import { UserApi } from '@core/api/user.api';
import { QueryRef } from 'apollo-angular';

@Injectable()
export class UserService {
  public constructor(private userApi: UserApi) {}

  public authentication(): QueryRef<unknown, any> {
    return this.userApi.authentication();
  }
}
