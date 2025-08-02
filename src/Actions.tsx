import { Link } from 'react-router-dom';

const Actions = (): JSX.Element => {

  return (
    <div className="d-flex justify-content-center my-3">
      <Link to="/" className="btn btn-primary mx-2">List</Link>
      <Link to="/add" className="btn btn-primary mx-2">Add</Link>
    </div>
  );
}

export default Actions;

//       <Link to="/edit" className="btn btn-secondary mx-2">Edit</Link>
