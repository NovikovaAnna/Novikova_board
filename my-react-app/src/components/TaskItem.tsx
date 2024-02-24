import React, { useState } from 'react';
import { ITask } from '../models';
import TextField from '@mui/material/TextField';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';

interface TaskItemProps {
    task: ITask;
    onUpdate: (id: string, calories: number) => void; // Добавьте функцию обновления в props
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate }) => {
    const [calories, setCalories] = useState(task.calories?.toString() || '');

    const handleCaloriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCalories = parseInt(event.target.value, 10) || 0;
        setCalories(event.target.value);
        onUpdate(task.id, newCalories); // Вызываем функцию обновления с новыми калориями
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
                label="Калории"
                type="number"
                value={calories}
                onChange={handleCaloriesChange}
                variant="outlined"
                size="small"
            />
            {calories && parseInt(calories) < 2000 ? (
                <CheckCircleOutlineIcon style={{ color: 'green' }} />
            ) : (
                <CancelIcon style={{ color: 'red' }} />
            )}
        </Box>
    );
};

export default TaskItem;
