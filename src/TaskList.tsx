type TaskListProps = {
  tasks: string[];
  onDelete?: (index: number) => void;
  onEdit?: (index: number) => void;
};

const TaskList = ({ tasks, onDelete, onEdit }: TaskListProps): JSX.Element => {

  return (
    <div className='container'>
      <ul className='list-group'>
        {tasks.map((task, idx) => (
          <li className='list-group-item d-flex justify-content-between align-items-center' key={idx}>
            {task}
            <button className="btn btn-danger btn-sm" onClick={() => onDelete && onDelete(idx)}>Delete</button>
            <button className="btn btn-warning btn-sm" onClick={() => onEdit && onEdit(idx)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;