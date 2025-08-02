import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type EditTaskProps = {
  handleEdit: (taskName: string) => void;
};

const EditTask =  ({handleEdit}: EditTaskProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const { task } = location.state || {};
  const navigate = useNavigate();

  const editTaskCallback = () => {
    const value = inputRef.current?.value.trim();
    if (!value) return;
    handleEdit(value);
    if (inputRef.current) inputRef.current.value = '';
    navigate('/'); // Redirect to TaskList
  };

  return (
    <div className='container'>
      <form>
        <div className='mb-3'>
          <label htmlFor='taskName' className='form-label'>New Task Name</label>
          <input type='text' className='form-control' id='taskName' defaultValue={task} ref={inputRef}/>
        </div>
        <button type="button" onClick={editTaskCallback} className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

export default EditTask;
