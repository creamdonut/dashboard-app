import { useEffect, useRef, useState } from 'react';

import { Labels } from './types';
import { xLabelsAdapter, yLabelsAdapter } from '../lib/labelsAdapter';

import { ActivePoint } from 'entities/ActivePoint';
import { Point } from 'entities/Point';
import { useWindowSize } from 'shared/customHooks/useWindowSize';

export const useViewLineChart = (fetchedData: Point[]) => {
  const [hoverLocation, setHoverLocation] = useState<number | null>(null);
  const [activePoint, setActivePoint] = useState<ActivePoint | null>(null);
  const [xLabels, setXLabels] = useState<Labels | null>(null);
  const [yLabels, setYLabels] = useState<Labels | null>(null);
  const lineChartRef = useRef<SVGSVGElement>(null);
  const [width] = useWindowSize();

  useEffect(() => {
    xLabelsAdapter(fetchedData, setXLabels);
    yLabelsAdapter(fetchedData, setYLabels);
  }, [fetchedData]);

  const onChartHover = (
    hoverLocation: number | null,
    activePoint: ActivePoint | null
  ) => {
    setHoverLocation(hoverLocation);
    setActivePoint(activePoint);
  };

  return {
    width,
    hoverLocation,
    activePoint,
    onChartHover,
    lineChartRef,
    xLabels,
    yLabels,
  };
};
