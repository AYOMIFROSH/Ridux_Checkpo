import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../Action/actions';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [id, setId] = useState(task.id);
    const [description, setDescription] = useState(task.description);
    const [isDone, setIsDone] = useState(task.isDone);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask(id, description, isDone));
        setIsEditing(false);
    };

    return isEditing ? ([
        <div>
            <input value={id} onChange={e => setId(e.target.value)} />
            <input value={description} onChange={e => setDescription(e.target.value)} />
            <input type="checkbox" checked={isDone} onChange={e => setIsDone(e.target.checked)} />
            <button onClick={handleEdit}>Save</button>
        </div>
    ]) : ([
        <div>
            <p>ID: {task.id}</p>
            <p>Description: {task.description}</p>
            <p>Done: {task.isDone ? 'Yes' : 'No'}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    ]);
};

export default Task;