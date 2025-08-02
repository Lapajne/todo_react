  import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TaskList from './TaskList';
import Actions from './Actions';
import AddTask from './AddTask';
import EditTask from './EditTask';


const UIRoot = ():JSX.Element => {
  const [tasks, setTasks] = useState<string[]>(["Do dishes", "Make bed", "Have fun"]);
  const navigate = useNavigate();

  const handleDelete = (index: number) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };
  
  const handleGoToEdit = (index: number) => {
    const task_text = tasks[index];
    navigate('/edit', { state: { task: task_text, index } });
  };
  
  const handleAdd = (newTask: string) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleEdit = (newTask: string) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <>
      <header>
        <div className='jumbotron text-center bg-light'>
          <strong>Yer ol' ToDO list</strong>
        </div>
      </header>
      <br />
      <div className='container text-primary'>
         <Actions />
      </div>
      <div className='container text-primary'>
       <Routes>
          <Route path="/" element={<TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleGoToEdit}/>} />
          <Route path="/add" element={<AddTask handleAdd={handleAdd} />} />
          <Route path="/edit" element={<EditTask handleEdit={handleEdit} />} />
        </Routes>
      </div>
      <br />
      <footer className='bg-light'>
          <div>&copy;2025 Alexander Lapajne</div>
      </footer>
    </  >
  );
} 

export default UIRoot;
