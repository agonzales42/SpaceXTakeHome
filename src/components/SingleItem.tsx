import { FC, useState, useEffect } from 'react'
import { LaunchBrief } from '../types.ts'
import '../App.css'

interface Props {
    launch: LaunchBrief
    handleSelect: Function
    isSelected: boolean
    isFavorite: boolean
}

const SingleItem: FC<Props> = (props) => {

    const [className, setClassName] = useState<string>('');
      
    const formatDate: Function = ((date: Date) => {
        return date.toString().substring(0, 10);
    });

    const handleClass: Function = () => {
        let newClassName: string = '';
        if (props.isFavorite) {
            newClassName = newClassName.concat('favoriteSingleItem');
            if (props.isSelected) {
                newClassName = newClassName.concat(' selectedFavorite');
            }
        } else {
            newClassName = newClassName.concat('singleItem');
            if (props.isSelected) {
                newClassName = newClassName.concat( ' selected');
            }
        }
        setClassName(newClassName);
    }

    useEffect(() => {
        handleClass();
    }, [props.launch.id, props.isSelected, props.isFavorite]);

    return (<span 
        className={className}
        onClick={() => props.handleSelect(props.launch.id)}>
        <div className="left">{props.launch.name}</div>
        <div className="middle">{formatDate(props.launch.date)}</div>
        <div className="right">{props.launch.flight_number}</div>
        </span>
    );
}

export default SingleItem;