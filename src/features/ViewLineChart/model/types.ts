import { Point } from 'entities/Point';

export type ViewLineChartProps = {
  fetchedData: Point[];
};

export type Labels = {
  min: string;
  center: string;
  max: string;
};
