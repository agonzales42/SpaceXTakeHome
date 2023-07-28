import { FC } from 'react';

interface Props {
  launchpad: String,
}

const ListItem : FC<Props> = (props) => {
  console.log(props);
  return (<div>hi</div>);
}

export default ListItem;