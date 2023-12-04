import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const [filter, setFilter] = useState('all'); // Add this line
    const tasks = useSelector(state => state.tasks);

    // Add this function
    const getFilteredTasks = () => {
        if (filter === 'done') {
            return tasks.filter(task => task.isDone);
        } 
        else if (filter === 'notDone') {
            return tasks.filter(task => !task.isDone);
        } 
        else {
            return tasks;
        }
    };

    return (
        <div>
            <select value={filter} onChange={e => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="done">Done</option>
                <option value="notDone">Not Done</option>
            </select>
            <ul>
                {getFilteredTasks().map((task) => (<Task key={task.id} task={task} />))}
            </ul>
        </div>
    );
};

export default ListTask;