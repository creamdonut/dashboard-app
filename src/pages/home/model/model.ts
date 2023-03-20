import { useState, useEffect, useRef, useCallback } from 'react';
import { ActivePoint } from 'entities/ActivePoint';
import {
  getDayStatistics,
  getYearStatistics,
  getMonthStatistics,
  getWeekStatistics,
} from 'shared/api';
import { useWindowSize } from 'shared/customHooks/useWindowSize';
import { PickerTypeEnum, State, StateData } from './types';

import { xLabelsAdapter, yLabelsAdapter } from '../lib/labelsAdapter';

type Labels = {
  min: string;
  center: string;
  max: string;
};

export const useHomePageModel = () => {
  const [currentState, setCurrentState] = useState<State>(State.Idle);
  const [stateData, setStateData] = useState<StateData>({
    loading: false,
    data: [],
  });
  const [hoverLocation, setHoverLocation] = useState<number | null>(null);
  const [activePoint, setActivePoint] = useState<ActivePoint | null>(null);
  const [pickerType, setPickerType] = useState<PickerTypeEnum | null>(null);

  const [xLabels, setXLabels] = useState<Labels | null>(null);
  const [yLabels, setYLabels] = useState<Labels | null>(null);

  const lineChartRef = useRef<SVGSVGElement>(null);

  const [width] = useWindowSize();

  const availableButtons = Object.values(PickerTypeEnum);

  const fetchSelector = useCallback((pickerType: PickerTypeEnum | null) => {
    if (pickerType === PickerTypeEnum.Day) {
      return getDayStatistics();
    }

    if (pickerType === PickerTypeEnum.Week) {
      return getWeekStatistics();
    }

    if (pickerType === PickerTypeEnum.Month) {
      return getMonthStatistics();
    }

    if (pickerType === PickerTypeEnum.Year) {
      return getYearStatistics();
    }

    return null;
  }, []);

  const fetchData = useCallback(
    async (pickerType: PickerTypeEnum | null) => {
      if (pickerType === null) return;

      setStateData({ loading: true, data: [] });
      setCurrentState(State.Loading);

      try {
        const fetchedData = await fetchSelector(pickerType);

        if (!fetchedData) return;

        setStateData({ loading: false, data: fetchedData });
        setCurrentState(State.Data);
        xLabelsAdapter(fetchedData, setXLabels);
        yLabelsAdapter(fetchedData, setYLabels);
      } catch (error) {
        console.log(123);

        setStateData({
          loading: false,
          data: [],
          error: new Error('got trouble'),
        });
        setCurrentState(State.Error);
      }
    },
    [fetchSelector]
  );

  useEffect(() => {
    fetchData(pickerType);
  }, [pickerType, fetchData]);

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
    setPickerType,
    pickerType,
    currentState,
    stateData,
    availableButtons,
    xLabels,
    yLabels,
  };
};
