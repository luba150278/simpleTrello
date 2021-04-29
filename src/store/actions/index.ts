import * as BoardsActionCreators from './boards';
import * as ListsActionCreators from './lists';
import * as BoardActionCreators from './boardPost';
import * as BoardEditActionCreators from './editBoard';
import * as BoardDeleteActionCreators from './boardDelete';
import * as ListAddActionCreators from './listAdd';
import * as ListDeleteActionCreators from './listDelete';

export default {
  ...BoardsActionCreators,
  ...ListsActionCreators,
  ...BoardActionCreators,
  ...BoardEditActionCreators,
  ...BoardDeleteActionCreators,
  ...ListAddActionCreators,
  ...ListDeleteActionCreators,
};
