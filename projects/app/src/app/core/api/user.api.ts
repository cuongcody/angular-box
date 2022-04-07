import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gql } from '@apollo/client';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';

const QUERY = gql`
  query CurrentUser {
    currentUser {
      id
      name
      wallets {
        id
        amount
        currency
      }
    }
  }
`;

@Injectable()
export class UserApi {
  public constructor(protected http: HttpClient, private apollo: Apollo) {}

  public authentication(): QueryRef<unknown, any> {
    return this.apollo.watchQuery({
      query: QUERY
    });
  }
}
