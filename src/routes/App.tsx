import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="container mt-3">
      <Outlet />
    </div>
  );
};

export default App;
