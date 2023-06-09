import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface NewTaskProps {
  onCreateNewTask:(description: string) => void
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateNewTask(newTaskDescription);    
   
    setNewTaskDescription('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskDescription(event.target.value);
  }
  
  return(
      <form className={styles.container} onSubmit={handleCreateNewTask}>
        <input
          className={styles.input}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskDescription}
          onChange={handleNewTaskChange}
        />
        <button 
          type="submit"
          className={styles.button}
        >
          Criar <PlusCircle size={20} />
        </button>
      </form>
  )
}