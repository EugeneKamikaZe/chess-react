import React, {useEffect, useState} from 'react';
import {Board} from "../../models/Board";

import s from './style.module.scss'

import CellComponent from "../CellComponent";
import {Cell} from "../../models/Cell";
import {Player} from "../../models/Player";
import cn from "classnames";

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void,
    currentPlayer: Player | null,
    swapPlayer: () => void,
    className?: string
}

const BoardComponent: React.FC<BoardProps> = ({
                                                  board,
                                                  setBoard,
                                                  currentPlayer,
                                                  swapPlayer,
                                                  className
                                              }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const handleClick = (cell: Cell) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    const highlightCells = () => {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <>
            <div className={cn(s.board, className)}>
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                key={cell.id}
                                cell={cell}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                click={handleClick}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </>
    )
}


export default BoardComponent;
