import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";

import iconW from '../../assets/queen_W.svg'
import iconB from '../../assets/queen_B.svg'

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);

        this.icon = color === Colors.BLACK ? iconB : iconW
        this.name = FigureNames.QUEEN
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if (this.cell.isEmptyVertical(target))
            return true
        if (this.cell.isEmptyHorizontal(target))
            return true
        if (this.cell.isEmptyDiagonal(target))
            return true
        return false
    }
}
