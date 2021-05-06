import { useActions } from '../hooks/useActions';
import { isValidTitle } from './validTitles';

type Data = {
  title: string;
  list_id: number;
};

type Title = {
  title: string;
};

type Pos = {
  position: number;
  title: string;
};

type Props = {
  update: boolean;
  url: string;
  newData: Title | Data | Pos;
  boardID: string;
};

export function editTitle({ update, newData, url, boardID }: Props): boolean {
  const { editItem, fetchLists } = useActions();
  if (isValidTitle(newData.title)) {
    editItem(newData, url);
    if (update) {
      fetchLists(boardID);
    }
    return true;
  }
  return false;
}
