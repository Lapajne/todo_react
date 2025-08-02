type EditTaskProps = {
  task: string[];
};


const EditTask =  ({ task }: EditTaskProps): JSX.Element => {
  return (
    <div className='container'>
      <form>
        <div className='mb-3'>
          <label htmlFor='taskName' className='form-label'>New Task Name</label>
          <input type='text' className='form-control' id='taskName' />
        </div>
        <button type='submit' className='btn btn-primary'>Edit Task</button>
      </form>
    </div>
  );
}

export default EditTask;