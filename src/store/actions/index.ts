import * as BoardsActionCreators from './boards';
import * as ListsActionCreators from './lists';

export default {
  ...BoardsActionCreators,
  ...ListsActionCreators,
};
