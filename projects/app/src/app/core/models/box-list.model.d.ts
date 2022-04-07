import { Box } from '@core/models/box.model';

export interface BoxList {
  boxes: {
    edges: {
      node: Box;
    }[];
  };
}
