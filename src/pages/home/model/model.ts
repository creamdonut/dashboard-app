import { useState, useEffect, useCallback } from 'react';
import {
  getDayStatistics,
  getYearStatistics,
  getMonthStatistics,
  getWeekStatistics,
} from 'shared/api';
import { PickerTypeEnum, State, StateData } from './types';

export const useHomePageModel = () => {
  const [currentState, setCurrentState] = useState<State>(State.Idle);
  const [stateData, setStateData] = useState<StateData>({
    loading: false,
    data: [],
  });
  const [pickerType, setPickerType] = useState<PickerTypeEnum | null>(null);

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

  return {
    setPickerType,
    pickerType,
    currentState,
    stateData,
    availableButtons,
  };
};
