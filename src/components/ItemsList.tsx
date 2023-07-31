import { FC } from 'react';
import SingleItem from './SingleItem.tsx';
import { LaunchBrief } from '../types.ts';
import '../App.css'

interface Props {
    launches: Array<LaunchBrief>,
    handleSelect: Function,
    selectedLaunchId: String,
    setListDisplayed: Function,
    listDisplayed: string,
    favorites: Array<string>,
}

const ItemsList: FC<Props> = props => { 

    return (
        <div className="itemsList"><h1>Launches</h1>
        <div className='listOptions'>
            <div className='optionNull'> </div>
            <div className={`option ${props.listDisplayed === 'all' && 'selected'}`} onClick={() => props.setListDisplayed('all')}>All</div>
            <div className={`option ${props.listDisplayed === 'favorites' && 'selected'}`} onClick={() => props.setListDisplayed('favorites')}>Favorites</div>  
        </div>
        <ul className='itemsListUL'>
            {props.launches.map(launch => (
                <SingleItem 
                    key={launch.id}
                    launch={launch}
                    handleSelect={props.handleSelect}
                    isSelected={launch.id === props.selectedLaunchId}
                    isFavorite={props.favorites?.includes(launch.id as string)}
                />
            ))}
        </ul>
        </div>
    );
}

export default ItemsList;