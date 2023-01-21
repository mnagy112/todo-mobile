export interface ToDo {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface MyToDosState {
  toDos: ToDo[];
}
