import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

type AddTaskProps = {
  handleAdd: (taskName: string) => void;
};

const AddTask = ({ handleAdd }: AddTaskProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const addTaskCallback = () => {
    const value = inputRef.current?.value.trim();
    if (!value) return;
    handleAdd(value);
    if (inputRef.current) inputRef.current.value = '';
    navigate('/'); // Redirect to TaskList
  };
  
  return (
    <div className='container'>
      <form>
        <div className='mb-3'>
          <label htmlFor='taskName' className='form-label'>Task Name</label>
          <input type='text' className='form-control' id='taskName' ref={inputRef} />
        </div>
        <button type="button" onClick={addTaskCallback} className='btn btn-primary'>Add</button>
      </form>
    </div>
  );
}

export default AddTask;