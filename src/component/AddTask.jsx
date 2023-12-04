import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Action/actions'; // Import the addTask action

const AddTask = () => {
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [isDone, setIsDone] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({ id, description, isDone })); // Dispatch the addTask action with the id, description, and isDone
        setId('');
        setDescription('');
        setIsDone(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={id} onChange={e => setId(e.target.value)} placeholder="ID" />
            <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <input type="checkbox" checked={isDone} onChange={e => setIsDone(e.target.checked)} /> Done
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;