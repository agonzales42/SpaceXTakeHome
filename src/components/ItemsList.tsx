import { FC } from 'react';
import ItemsListHeader from './ItemListHeader.tsx';
import SingleItem from './SingleItem.tsx';
import { LaunchBrief } from '../types.ts';
import '../App.css'

interface Props {
    launches: Array<LaunchBrief>,
    handleSelect: Function,
    selectedLaunchId: string,
    setListDisplayed: Function,
    listDisplayed: string,
    favorites: Array<string>,
}

const ItemsList: FC<Props> = ({setListDisplayed, listDisplayed, handleSelect, ...props}) => { 
    
    return (
        <div className="itemsListContainer">
            <ItemsListHeader
                setListDisplayed={setListDisplayed}
                listDisplayed={listDisplayed}    
            />
            <ul className='itemsListUL'>
                {props.launches?.map((launch: LaunchBrief) => (
                <SingleItem 
                    key={launch.id}
                    launch={launch}
                    handleSelect={handleSelect}
                    isSelected={launch.id === props.selectedLaunchId}
                    isFavorite={props.favorites?.includes(launch.id as string)}
                />
            ))}
            </ul>
        </div>
    );
}

export default ItemsList;