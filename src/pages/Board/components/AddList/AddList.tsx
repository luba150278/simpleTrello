/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';

type Props = {
  url: string;
  countLists: number;
};

type IList = {
  title: string;
  position: number;
};

const AddList: React.FC<Props> = ({ url, countLists }) => {
  const [title, setTitle] = useState<string>('');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);

  async function addList(newList: IList): Promise<Response> {
    return axios.post(`${url}/list`, newList, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
  }
  return (
    <div>
      <input type="text" id="addList" placeholder="Enter list name" onChange={changeHandler} value={title} />
      <button
        className="btn btn-add-board mt-2"
        onClick={(): void => {
          const newList = { title, position: countLists + 1 };
          addList(newList);
        }}
      >
        Add List
      </button>
    </div>
  );
};

export default AddList;
