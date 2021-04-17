import React from 'react';
import { Link } from 'react-router-dom';
import Boards from './components/boards/Boards';

const Main: React.FC = () => (
  <section>
    <div className="container mb-4">
      <Link className="board-title mr-4" to="/boardCreate">
        Add Board
      </Link>
    </div>
    <div className="container">
      <h1>My Boards</h1>
      <p>This is a training React-project. An analogue of the "Trello" service.</p>
      <Boards />
    </div>
  </section>
);
export default Main;
