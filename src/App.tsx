import { v4 as uuidv4 } from 'uuid'
import { Header } from './Components/Header';
import styles from './App.module.css';
import { NewTask } from './Components/NewTask';
import { TasksInfos } from './Components/TasksInfos';
import { useState } from 'react';

type Tasks = {
  id: string;
  description: string;
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  console.log(tasks);
  function addNewTask(newTaskDescription: string) {
    const newId = uuidv4();
    const newTask: Tasks = { id: newId, description: newTaskDescription, isCompleted: true}
    setTasks([...tasks, newTask]);
  }


  return (
      <div className={styles.wrapper}>
        <Header />
        <NewTask onCreateNewTask={addNewTask}/>
        <TasksInfos 
          tasks={tasks}
        />
      </div>
  )
}

export default App
