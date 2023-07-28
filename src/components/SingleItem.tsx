import { FC } from 'react'
import { LaunchBrief } from '../types.ts'
import '../App.css'

interface Props {
    launch: LaunchBrief
    handleSelect: Function
    isSelected: Boolean
}

const SingleItem: FC<Props> = (props) => {

    const formatDate: Function = ((date: Date) => {
        return date.toString().substring(0, 10);
    });

    return (<span 
        className={`singleItem ${props.isSelected ? "rowSelected" : ''}`}
        onClick={() => props.handleSelect(props.launch.id)}>
        <div className="left">{props.launch.name}</div>
        <div className="middle">{formatDate(props.launch.date)}</div>
        <div className="right">{props.launch.flight_number}</div>
        </span>
    );
}

export default SingleItem;