import * as BoardsActionCreators from './boards';
import * as ListsActionCreators from './lists';
import * as BoardActionCreators from './boardPost';

export default {
  ...BoardsActionCreators,
  ...ListsActionCreators,
  ...BoardActionCreators,
};
