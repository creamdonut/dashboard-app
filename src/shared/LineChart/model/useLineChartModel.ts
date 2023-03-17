import { useState } from 'react';

import { getSvgX } from '../lib/getSvgX';
import { getSvgY } from '../lib/getSvgY';

import { ActivePoint } from 'entities/ActivePoint';
import { Point } from 'entities/Point';

export const useLineChartModel = (
  fetchedData: Point[],
  svgWidth: number,
  svgHeight: number,
  yLabelSize: number,
  xLabelSize: number,
  lineChartRef: React.RefObject<SVGSVGElement>,
  onChartHover: (
    relativeLoc: number | null,
    closestPoint: ActivePoint | null
  ) => void
) => {
  const [hoverLocation, setHoverLocation] = useState<number | null>(null);
  const [activePoint, setActivePoint] = useState<ActivePoint | null>(null);

  const onMouseLeave = () => {
    setHoverLocation(null);
    setActivePoint(null);
    onChartHover(null, null);
  };

  const onCoordinatesChange = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (!lineChartRef.current) return;

    const svgLocation = lineChartRef.current.getBoundingClientRect();
    const relativeLoc = e.clientX - svgLocation.left;

    const svgData: ActivePoint[] = fetchedData.map((point) => ({
      svgX: getSvgX(point.xCoordinate, yLabelSize, svgWidth, fetchedData),
      svgY: getSvgY(point.yCoordinate, xLabelSize, svgHeight, fetchedData),
      timestamp: point.timestamp,
      price: point.price,
    }));

    let closestPoint: ActivePoint | null = null;
    let closestDistance: number = Number.MAX_VALUE;

    svgData.forEach((point) => {
      const distance = Math.abs(point.svgX - hoverLocation!);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestPoint = point;
      }
    });

    if (relativeLoc - yLabelSize < 0) {
      onMouseLeave();
    } else {
      setHoverLocation(relativeLoc);
      setActivePoint(closestPoint);

      onChartHover(relativeLoc, closestPoint);
    }
  };

  const viewBox = `0 0 ${svgWidth + 20} ${svgHeight + 20}`;

  return {
    onCoordinatesChange,
    onMouseLeave,
    activePoint,
    hoverLocation,
    viewBox,
  };
};
