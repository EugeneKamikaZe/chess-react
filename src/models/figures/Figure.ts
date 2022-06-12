import {Colors} from "../Colors";
import {Cell} from "../Cell";
import React from "react";

export enum FigureNames {
    FIGURE = 'Figure',
    KING = 'King',
    QUEEN = 'Queen',
    ROOK = 'Rook',
    BISHOP = 'Bishop',
    KNIGHT = 'Knight',
    Pawn = 'Pawn'
}

export class Figure {
    color: Colors;
    icon: string | SVGElement | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.icon = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random()
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color)
            return false
        if (target.figure?.name === FigureNames.KING)
            return false
        return true
    }

    moveFigure(target: Cell) {

    }
}
