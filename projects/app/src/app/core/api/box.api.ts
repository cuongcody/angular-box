import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gql } from '@apollo/client';
import { BoxList } from '@core/models/box-list.model';
import { Apollo, QueryRef } from 'apollo-angular';

const QUERY = gql`
  query BoxGrid {
    boxes(free: true, openable: true, purchasable: true) {
      edges {
        node {
          id
          name
          iconUrl
          cost
        }
      }
    }
  }
`;

@Injectable()
export class BoxApi {
  public constructor(protected http: HttpClient, private apollo: Apollo) {}

  public getList(): QueryRef<BoxList, any> {
    return this.apollo.watchQuery({
      query: QUERY
    });
  }
}
