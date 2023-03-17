import { FC } from 'react';

import {
  DEFAULT_TIME_FORMAT,
  MIBILE_THRESHOLD,
  useTooltipModel,
} from '../model';

import styles from './tooltip.module.scss';

import { ActivePoint } from 'entities/ActivePoint';

type TooltipProps = {
  hoverLocation: number;
  activePoint: ActivePoint;
  lineChartRef: React.RefObject<SVGSVGElement>;
  dateFormat?: string;
};

export const Tooltip: FC<TooltipProps> = ({
  hoverLocation,
  activePoint,
  lineChartRef,
  dateFormat = DEFAULT_TIME_FORMAT,
}) => {
  const { price, dateTime, placementStyles, placementStylesMobile, width } =
    useTooltipModel(hoverLocation, activePoint, lineChartRef, dateFormat);

  return (
    <div
      className={styles.hover}
      style={width > MIBILE_THRESHOLD ? placementStyles : placementStylesMobile}
    >
      <div className={styles.date}>{dateTime} </div>
      <div className={styles.price}>{price}</div>
    </div>
  );
};
