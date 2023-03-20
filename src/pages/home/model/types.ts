import { ActivePoint } from 'entities/ActivePoint';
import { Point } from 'entities/Point';

export type HomePageModelState = {
  fetchedData: Point[];
  hoverLocation: number | null;
  activePoint: ActivePoint | null;
};

export enum PickerTypeEnum {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export enum State {
  Loading,
  Error,
  Data,
  Idle,
}

export type StateData = {
  loading: boolean;
  data: Point[];
  error?: Error;
};

export type Labels = {
  min: string;
  center: string;
  max: string;
};
