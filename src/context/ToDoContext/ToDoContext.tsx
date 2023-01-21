import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { ToDo } from './types';
import { reducer } from './reducer';
import { MyToDosActionType } from './actions';

interface Props {
  children: React.ReactNode;
}

interface ContextValue {
  toDos: ToDo[];
  dispatch: Dispatch<MyToDosActionType>
}

const ToDoContext = createContext<ContextValue>({
  toDos: [],
  dispatch: () => undefined,
});

export const ToDoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, { toDos: [] })

  return (
    <ToDoContext.Provider
      value={{
        toDos: [
          ...state.toDos
            .filter(toDo => !toDo.completedAt)
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
          ...state.toDos
            .filter(toDo => !!toDo.completedAt)
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        ],
        dispatch
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDos = (): ContextValue => {
  return useContext(ToDoContext);
};
