let nextTaskId = 5; // This should be one more than the id of the last task in the initial state

export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: {
        id: nextTaskId++,
        description,
        isDone: false
    }
});

export const editTask = (id, description, isDone) => ({
    type: 'EDIT_TASK',
    payload: {
        id,
        description,
        isDone
    }
});