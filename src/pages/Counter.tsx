import React from 'react';
import Button from '../components/default/Button';
import { useAppContext } from '../context/AppContextProvider';

export const Counter = () => {
  const { appState, appStateDispatch }: any = useAppContext();

  return (
    <div className="mx-auto text-center">
      <h5 className="m-2">
        Counter: <span className="font-semibold">{appState?.count}</span>
      </h5>

      <Button
        value="Increase"
        color="blue-700"
        size="sm"
        textColor="white"
        rounded="rounded-full"
        onClick={() => {
          appStateDispatch({
            type: 'INCREMENT',
            payload: 1
          });
        }}
      />

      <Button
        value="decrease"
        color="blue-700"
        margin="mx-2"
        textColor="white"
        size="sm"
        onClick={() => {
          appStateDispatch({
            type: 'DECREMENT',
            payload: 1
          });
        }}
      />
    </div>
  );
};
