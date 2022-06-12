import React, {useEffect, useRef, useState} from 'react';
import {Player} from "../../models/Player";
import {Colors} from "../../models/Colors";

import s from './style.module.scss'

interface TimerProps {
    currentPlayer: Player |null
    restart: () => void
}

const Timer: React.FC<TimerProps> = ({currentPlayer, restart}) => {
    const initialTime = 1000
    const [blackTime, setBlackTime] = useState(initialTime)
    const [whiteTime, setWhiteTime] = useState(initialTime)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }

        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhite : decrementBlack
        timer.current = setInterval(callback, 1000)
    }

    function decrementWhite() {
        setWhiteTime(prev => prev - 1)
    }
    function decrementBlack() {
        setBlackTime(prev => prev - 1)
    }

    const handleRestart = () => {
        setWhiteTime(initialTime)
        setBlackTime(initialTime)
        restart()
    }

    return (
        <div className={s.timer}>
            {/*<div>*/}
            {/*    <button onClick={handleRestart}>Restart</button>*/}
            {/*</div>*/}

            <div className={s.headings}>
                <h2>Black</h2>
                <h2>White</h2>
            </div>

            <div className={s.body}>
                <p className={s.time}>{blackTime}</p>
                <span className={s.dots}>:</span>
                <p className={s.time}>{whiteTime}</p>
            </div>
        </div>
    );
};

export default Timer;
