// src/components/Board.tsx
import React, { useState } from 'react';
import { IBoard } from '../src/models.ts';
import TaskItem from '../src/components/TaskItem.tsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

const Board: React.FC<{ board: IBoard }> = ({ board }) => {
    const [tasks, setTasks] = useState(board.tasks);

    const handleUpdateTaskCalories = (id: string, calories: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task => (task.id === id ? { ...task, calories } : task))
        );
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{board.name}</Typography>
                <List>
                    {tasks.map(task => (
                        <TaskItem key={task.id} task={task} onUpdate={handleUpdateTaskCalories} />
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default Board;


