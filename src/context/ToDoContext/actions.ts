import { ToDo } from './types';

type AddToDoAction = {
  type: 'AddToDo';
  payload: Pick<ToDo, 'title' | 'description'>;
};

type UpdateToDoAction = {
  type: 'UpdateToDo';
  payload: Pick<ToDo, 'id' | 'title' | 'description'>;
};

type CompleteToDoAction = {
  type: 'CompleteToDo';
  payload: string;
};

type DeleteToDoAction = {
  type: 'DeleteToDo';
  payload: string;
};

export type MyToDosActionType =
  | AddToDoAction
  | UpdateToDoAction
  | CompleteToDoAction
  | DeleteToDoAction;
