import { createContext, useContext, useReducer } from "react";

interface IChildrenProps {
  children: JSX.Element;
}

interface IStateType {
  count: number;
}

export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export interface IAction {
  type: ActionType;
  payload: number;
}

export const AppContext = createContext({});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`Context missing provider`);
  }
  return context;
};

export const AppContextProvider = ({ children }: IChildrenProps) => {
  const initialState: IStateType = {
    count: 20,
  };

  const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + action.payload };
      case "DECREMENT":
        return { count: state.count - action.payload };
    }
  };

  const [appState, appStateDispatch] = useReducer(reducer, initialState);
  return (
    <>
      <AppContext.Provider value={{ appState, appStateDispatch }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
