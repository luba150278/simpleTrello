/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../../common/constans/api';
import './boardCreate.css';

type ITitle = {
  title: string;
};
const BoardCreate: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const newBoard: ITitle = { title };
  const url = `${api.baseURL}/board`;
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>Board Creator</h1>
      <div className="fields mb-4">
        <div className="field mr-4">
          <label htmlFor="title" className="label">
            Board name
          </label>
          <input onChange={changeHandler} value={title} type="text" id="title" placeholder="Enter board name" />
        </div>
      </div>
      <button
        className="btn btn-success mr-2"
        onClick={async (): Promise<Response> =>
          axios.post(url, newBoard, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer 123',
            },
          })
        }
      >
        add use axios
      </button>
    </div>
  );
};

export default BoardCreate;
