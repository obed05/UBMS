import React from 'react';
import { Link } from 'react-router-dom';
function App(){
const Home = () => {
  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <div>
        <Link to="/electricity">Electricity Bill</Link>
      </div>
      <div>
        <Link to="/water">Water Bill</Link>
      </div>
      <div>
        <Link to="/maintenance">House Maintenance</Link>
      </div>
    </div>
  );
}};

export default Home;
