import { NavLink, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <NavLink to={'/'}>Celcius To Fahrenheit</NavLink >
        <NavLink to={'/kelvin'}>Celcius To Kelvin</NavLink >
        <NavLink to={'/reamur'}>Celcius To Reamur</NavLink >
      </div>
      <Outlet />
    </div>
  );
}

export default App;
