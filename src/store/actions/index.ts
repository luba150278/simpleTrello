import * as BoardsActionCreators from './boards';
import * as ListsActionCreators from './lists';
import * as BoardActionCreators from './boardPost';
import * as BoardEditActionCreators from './editBoard';

export default {
  ...BoardsActionCreators,
  ...ListsActionCreators,
  ...BoardActionCreators,
  ...BoardEditActionCreators,
};
