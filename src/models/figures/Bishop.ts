import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";

import iconB from '../../assets/bishop_B.svg'
import iconW from '../../assets/bishop_W.svg'

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);

        this.icon = color === Colors.BLACK ? iconB : iconW
        this.name = FigureNames.BISHOP
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if (this.cell.isEmptyDiagonal(target))
            return true
        return false
    }
}
