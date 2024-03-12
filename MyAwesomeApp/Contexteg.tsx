// context.tsx
import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

interface CountState {
  count: number;
}

interface CountAction {
  type: 'increment' | 'decrement';
  payload?: number;
}

type CountContextType = {
  state: CountState;
  dispatch: Dispatch<CountAction>;
};

const CountContext = createContext<CountContextType>({
  state: { count: 0 },
  dispatch: () => {},
});

const countReducer = (state: CountState, action: CountAction): CountState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + (action.payload || 1) };
    case 'decrement':
      return { count: state.count - (action.payload || 1) };
    default:
      return state;
  }
};

export function CountProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return <CountContext.Provider value={{ state, dispatch }}>{children}</CountContext.Provider>;
}

export const useCountContext = () => useContext(CountContext);
