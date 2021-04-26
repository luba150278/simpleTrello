import { ListsAction, ListsActionTypes, ListsState } from '../types/lists';

const initialState: ListsState = {
  getLists: {
    users: [{ id: 1, username: 'dff' }],
    lists: [
      {
        id: 1,
        title: 'to do',
        cards: [
          {
            id: 1,
            title: 'to buy a cat',
            description: 'dfdf',
            users: [1],
          },
        ],
      },
    ],
  },
  loading: false,
  error: null,
};

export const listsReducer = (state = initialState, action: ListsAction): ListsState => {
  switch (action.type) {
    case ListsActionTypes.FETCH_LISTS:
      return {
        loading: true,
        error: null,
        getLists: {
          users: [],
          lists: [],
        },
      };
    case ListsActionTypes.FETCH_LISTS_SUCCESS:
      return { loading: false, error: null, getLists: action.payload };
    case ListsActionTypes.FETCH_LISTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        getLists: {
          users: [],
          lists: [],
        },
      };
    default:
      return state;
  }
};
