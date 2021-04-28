import axios from 'axios';
import React from 'react';

type IUrl = {
  url: string;
};

const AddList: React.FC<IUrl> = ({ url }) => {
  type IList = {
    title: string;
    position: number;
  };

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
      <input type="text" id="addList" placeholder="Enter list name" />
      <button
        className="btn btn-add-board mt-2"
        onClick={(): void => {
          const newList = { title: 'aaaa', position: 2 };
          addList(newList);
        }}
      >
        Add List
      </button>
    </div>
  );
};

export default AddList;
