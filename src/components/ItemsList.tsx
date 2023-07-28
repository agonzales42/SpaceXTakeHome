import { FC } from 'react';
import SingleItem from './SingleItem.tsx';
import { LaunchBrief } from '../types.ts';
import '../App.css'

interface Props {
    launches: Array<LaunchBrief>,
    handleSelect: Function,
    selectedLaunchId: String,
}

const ItemsList: FC<Props> = props => { 

    return (
        <div className="itemsList"><h1>Launches</h1>
        <ul className="itemsListUL">
            {props.launches.map(launch => (
                <SingleItem 
                    key={launch.id}
                    launch={launch}
                    handleSelect={props.handleSelect}
                    isSelected={launch.id === props.selectedLaunchId}
                />
            ))}
        </ul>
        </div>
    );
}

export default ItemsList;