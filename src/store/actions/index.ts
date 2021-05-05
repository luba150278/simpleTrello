import * as BoardsActionCreators from './boards';
import * as ListsActionCreators from './lists';
import * as ItemEditActionCreators from './itemEdit';
import * as ItemDeleteActionCreators from './itemDelete';
import * as ItemAddActionCreators from './itemAdd';

export default {
  ...BoardsActionCreators,
  ...ListsActionCreators,
  ...ItemEditActionCreators,
  ...ItemDeleteActionCreators,
  ...ItemAddActionCreators,
};
