import { useState, useEffect, useRef, useCallback } from 'react';
import { ActivePoint } from 'entities/ActivePoint';
import {
  getDayStatistics,
  getHourStatistics,
  getMonthStatistics,
  getWeekStatistics,
} from 'shared/api';
import { useWindowSize } from 'shared/customHooks/useWindowSize';
import { responseAdapter } from '../lib/responseAdapter';
import { PickerTypeEnum, State, StateData } from './types';

export const useHomePageModel = () => {
  const [currentState, setCurrentState] = useState<State>(State.Idle);
  const [stateData, setStateData] = useState<StateData>({
    loading: false,
  });

  const [hoverLocation, setHoverLocation] = useState<number | null>(null);
  const [activePoint, setActivePoint] = useState<ActivePoint | null>(null);

  const [pickerType, setPickerType] = useState<PickerTypeEnum | null>(null);

  const lineChartRef = useRef<SVGSVGElement>(null);

  const [width] = useWindowSize();

  const availableButtons = Object.values(PickerTypeEnum);

  const fetchSelector = useCallback((pickerType: PickerTypeEnum | null) => {
    if (pickerType === PickerTypeEnum.Hour) {
      return getHourStatistics();
    }

    if (pickerType === PickerTypeEnum.Day) {
      return getDayStatistics();
    }

    if (pickerType === PickerTypeEnum.Week) {
      return getWeekStatistics();
    }

    if (pickerType === PickerTypeEnum.Month) {
      return getMonthStatistics();
    }

    return null;
  }, []);

  const fetchPriceHistory = useCallback(
    async (pickerType: PickerTypeEnum | null) => {
      if (pickerType === null) return;

      setStateData({ loading: true });
      setCurrentState(State.Loading);

      try {
        const priceHistory = await fetchSelector(pickerType);

        if (!priceHistory) return;

        setStateData({ loading: false, data: responseAdapter(priceHistory) });
        setCurrentState(State.Data);
      } catch (error) {
        setStateData({ loading: false, error: new Error('got trouble') });
        setCurrentState(State.Error);
      }
    },
    [fetchSelector]
  );

  useEffect(() => {
    fetchPriceHistory(pickerType);
  }, [pickerType, fetchPriceHistory]);

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
  };
};
