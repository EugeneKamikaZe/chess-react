import React, {useEffect, useState} from 'react'
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";

import BoardComponent from "./components/BoardComponent";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

import s from './App.module.scss'
import SvgIcon from "./components/SVGIcon";

function App() {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    function restart() {
        const newBoard = new Board()

        newBoard.initCells()
        newBoard.addFigures()

        setBoard(newBoard)
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <>
            {/*<SvgIcon icon='bishop_B'/>*/}

            <div>
                <div className={s.currentPlayer}>
                    <h2>Current Player Is</h2>
                    <h3 className={s.current}>{currentPlayer?.color}</h3>
                </div>

                <div className={s.history}>
                    <h3 className={s.containerTitle}>History</h3>

                    <div className={s.containerWrapper}>

                    </div>
                </div>
            </div>

            <BoardComponent board={board}
                            setBoard={setBoard}
                            currentPlayer={currentPlayer}
                            swapPlayer={swapPlayer}
                            className={currentPlayer?.color === Colors.WHITE ? 'currentPlayer_1' : 'currentPlayer_2'}
            />

            <div>
                <Timer currentPlayer={currentPlayer}
                       restart={restart}
                />

                <div className={s.lostFigures}>
                    <h3 className={s.containerTitle}>Lost Figures</h3>

                    <div className={s.containerWrapper}>
                        <LostFigures figures={board.lostBlackFigures}/>
                        <LostFigures figures={board.lostWhiteFigures}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
