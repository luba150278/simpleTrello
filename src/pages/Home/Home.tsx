import React from 'react';
import { BOARDS, HOME_PAGE_DESC } from '../../common/constans/messages';
import AddButton from './components/AddButton/AddButton';
import Boards from './components/Boards/Boards';

/**
 * The page has 3 components: the "Add Board" button, the board's list, and modal window (MW) for add a new board.
 * MW is hidden by default and stays visible by clicking the button.
 * @returns Main page
 */
const Main: React.FC = () => (
  <section>
    <AddButton />
    <div className="container">
      <h1>{BOARDS}</h1>
      <p>{HOME_PAGE_DESC}</p>
      <Boards />
    </div>
  </section>
);
export default Main;
