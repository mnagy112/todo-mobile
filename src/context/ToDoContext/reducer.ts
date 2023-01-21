import { MyToDosState } from './types';
import { MyToDosActionType } from './actions';
import uuid from 'react-native-uuid'

export const reducer = ({ toDos }: MyToDosState, { type,payload }: MyToDosActionType): MyToDosState => {
  switch (type) {
    case 'AddToDo':
      return {
        toDos: [
          ...toDos,
          {
            ...payload,
            id: uuid.v4().toString(),
            createdAt: new Date(),
          }
        ]
      }
    case 'UpdateToDo':
      return {
        toDos: toDos.map(toDo => {
          if (toDo.id === payload.id) {
            return {...toDo, ...payload}
          }

          return { ...toDo }
        })
      }
    case 'CompleteToDo':
      return {
        toDos: toDos.map(toDo => {
          if (toDo.id === payload) {
            return {...toDo, completedAt: new Date()}
          }

          return { ...toDo }
        })
      }
    case 'DeleteToDo':
      return {
        toDos: toDos.filter(toDo => toDo.id !== payload)
      }
    default:
      throw new Error();
  }
};
