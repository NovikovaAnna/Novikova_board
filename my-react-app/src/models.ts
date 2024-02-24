export interface ITask {
    id: string;
    title: string;
    completed: boolean;
    calories?: number;
}

export interface IBoard {
    id: string;
    name: string;
    tasks: ITask[];
}

