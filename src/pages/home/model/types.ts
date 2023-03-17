import { ActivePoint } from 'entities/ActivePoint';
import { Point } from 'entities/Point';

export type HomePageModelState = {
  fetchedData: Point[];
  hoverLocation: number | null;
  activePoint: ActivePoint | null;
};

export enum PickerTypeEnum {
  Hour = 'hour',
  Day = 'day',
  Week = 'week',
  Month = 'month',
}

export enum State {
  Loading,
  Error,
  Data,
  Idle,
}

export type StateData = {
  loading: boolean;
  error?: Error;
  data?: Point[];
};
