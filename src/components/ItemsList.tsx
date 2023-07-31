import { FC } from 'react';
import ItemsListHeader from './ItemListHeader.tsx';
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
        <div className="itemsListContainer">
            <ItemsListHeader
                setListDisplayed={props.setListDisplayed}
                listDisplayed={props.listDisplayed}    
            />
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