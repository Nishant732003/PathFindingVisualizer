import { GridType, TileType } from "./types";
import { MAX_ROWS,MAX_COLS } from "./constants";

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
    const currentRow = [];
    for (let col = 0; col < MAX_COLS; col++) {
        currentRow.push({
            row,
            col,
            isEnd: row === endTile.row && col == endTile.col,
            isWall: false,
            isPath: false,
            distance: Infinity,
            isStart: row === startTile.row && col === startTile.col,
            isTraversed: false,
            parent: null

        });
    }
    return currentRow;
};

export const createGrid = (startTile: TileType, endTile: TileType) => {
    const grid: GridType = [];
    for (let row = 0; row < MAX_ROWS; row++) {
        grid.push(createRow(row, startTile, endTile));
    }
    return grid;
};

export const checkIfStartOrEnd = (row: number, col: number) => {
    return (row===1 && col===1 || (row===MAX_ROWS-2 && col===MAX_COLS-2))
}
export const createNewGrid = (grid: GridType, row: number, col: number) => {
    //wew are creating shallow copy of grid not want to mutate original grid
    const newGrid = grid.slice();
    const newTile = {
        ...newGrid[row][col],
        isWall: !newGrid[row][col].isWall,
        
    }
    newGrid[row][col] = newTile;
    return newGrid;
};
export const isEqual = (a: TileType, b: TileType)=>{
    return (a.row === b.row && a.col === b.col); 
}

export const isRowEqual = (row: number,col:number, tile: TileType) => {
    return (row === tile.row && col=== tile.col);
}
export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
