import React from 'react';
import cn from "classnames";

import Sprite from '/src/assets/sprite/css/sprite-f8916ac7.svg'

interface SvgIconProps {
    className?: string,
    height?: number,
    width?: number,
    color?: string,
    icon: string
}

const SvgIcon: React.FC<SvgIconProps> = ({className, height, width, color, icon}) => {
    return (
        <svg className={cn('icon', `icon-${className}`)}
             fill={color}
             width={width}
             height={height}>
            <use xlinkHref={`${Sprite}#${icon}`}/>
        </svg>
    );
};

export default SvgIcon;
