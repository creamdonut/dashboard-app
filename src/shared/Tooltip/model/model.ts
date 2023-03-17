import dayjs from 'dayjs';
import { ActivePoint } from 'entities/ActivePoint';
import { useWindowSize } from 'shared/customHooks/useWindowSize';
import { TOOLTIP_THRESHOLD } from './consts';

export const useTooltipModel = (
  hoverLoc: number,
  activePoint: ActivePoint,
  lineChartRef: React.RefObject<SVGSVGElement>,
  dateFormat?: string
) => {
  const [width] = useWindowSize();

  const svgLocation = lineChartRef.current?.getBoundingClientRect();

  const placementStyles = {
    left:
      width - hoverLoc < TOOLTIP_THRESHOLD
        ? `${width - TOOLTIP_THRESHOLD}px`
        : `${hoverLoc + (svgLocation?.left || 0) / 2}px`,
  };

  const placementStylesMobile = {
    left: `${width / 2}px`,
  };

  const dateTime =
    activePoint.timestamp &&
    dayjs(activePoint.timestamp * 1000).format(dateFormat);

  const price = activePoint.price && `Price: $${activePoint.price.toFixed(4)}`;

  return { price, dateTime, placementStyles, placementStylesMobile, width };
};
