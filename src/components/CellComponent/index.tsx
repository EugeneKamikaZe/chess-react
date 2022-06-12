import React from 'react';
import cn from 'classnames'

import s from './style.module.scss'

import {Cell} from "../../models/Cell";
import {Colors} from "../../models/Colors";

interface CellProps {
    cell: Cell,
    selected: boolean,
    click: (cell: Cell) => void
}

const CellComponent: React.FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div className={
            cn(
                s.cell,
                cell.color === Colors.BLACK ? s.black : s.white,
                {[s.selected]: selected},
                {[s.FFFF]: cell.available && cell.figure}
            )}
             onClick={() => click(cell)}
        >
            {cell.available && !cell.figure && <div className={s.available}/>}

            {cell.figure?.icon
            && <img src={cell.figure.icon}
                    className={s.figure}
                    alt={cell.figure.name}/>
            }
        </div>
    )
}

export default CellComponent;
