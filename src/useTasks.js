import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasksStorage")) || []);
  
    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id))
    };
  
    const setTasksDone = () => {
      setTasks(tasks => tasks.map(task => ({ ...task, done: true })))
    };
  
    const toggleDone = (id) => {
      setTasks(tasks => tasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done }
        };
        return task;
      }))
    };
  
    const addNewTaskContent = (newTaskContent) => {
      setTasks(tasks => [
        ...tasks,
        {
          content: newTaskContent,
          done: false,
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        },
      ])
    };
  
    useEffect(() => {
      localStorage.setItem("tasksStorage", JSON.stringify(tasks));
    }, [tasks]);
  
    return {tasks, removeTask, setTasksDone, toggleDone, addNewTaskContent};
  };
  