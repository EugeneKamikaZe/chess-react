import React from 'react';
import {Figure} from "../../models/figures/Figure";

import s from './style.module.scss'

interface LostFiguresProps {
    // title: string,
    figures: Figure[]
}

const LostFigures: React.FC<LostFiguresProps> = ({figures}) => {
    return (
        <div className={s.wrapper}>
            {figures.map(figure =>
                <div key={figure.id}
                     className={s.figure}
                >
                    {figure.icon && <img src={figure.icon} alt={figure.name}/>}
                </div>
            )}
        </div>
    );
};

export default LostFigures;
