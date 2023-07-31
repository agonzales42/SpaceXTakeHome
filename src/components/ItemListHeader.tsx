import { FC } from 'react';
import '../App.css';

interface Props {
  listDisplayed: string,
  setListDisplayed: Function,
}

const ItemsListHeader: FC<Props> = props => {  
  return (
    <div className="itemsListHeader">
      <h1>Launches</h1>
      <div className='listOptions'>
        <div className='optionNull'> </div>
        <div className={`option ${props.listDisplayed === 'all' && 'selected'}`} onClick={() => props.setListDisplayed('all')}>All</div>
        <div className={`option ${props.listDisplayed === 'favorites' && 'selected'}`} onClick={() => props.setListDisplayed('favorites')}>Favorites</div>  
    </div>
    </div>
  )
}

export default ItemsListHeader;