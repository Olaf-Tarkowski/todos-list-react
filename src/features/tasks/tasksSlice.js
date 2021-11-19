import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksInLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload)
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(index, 1)
        },
        setAllDone: (state) => {
            for (const task of state.tasks) {
                task.done = true
            }
        },
        fetchExampleTasks: () => {
        },
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    },
});

const selectTasksState = state => state.tasks;

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks } = tasksSlice.actions;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectSetEveryTaskDone = state => selectTasksState(state).tasks.every(({ done }) => done);
export const selectHideDoneTasks = state => selectTasksState(state).tasks.every(({ done }) => !done);
export const selectAreListEmpty = state => selectTasksState(state).tasks.length > 0;

export default tasksSlice.reducer;
