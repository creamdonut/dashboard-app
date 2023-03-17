import { ApiResponse } from 'shared/api';
import { PRICE_IDX, TIMESTAMP_IDX } from '../model';

export const responseAdapter = (response: ApiResponse) =>
  response.prices.map((el, idx) => ({
    timestamp: el[TIMESTAMP_IDX],
    price: el[PRICE_IDX],
    xCoordinate: idx,
    yCoordinate: el[PRICE_IDX],
  }));
