import { MazeSelectType, SpeedSelectType } from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIGURATION = {
    row: 1,
    col: 1,
    isWall: false,
    isEnd: false,
    isPath: false,
    distance: 0,
    isStart: false,
    isTraversed: false,
    parent:null
    
}
export const END_TILE_CONFIGURATION = {
    row: MAX_ROWS-2,
    col: MAX_COLS-2,
    isEnd: false,
    isPath: false,
    isWall:false,
    distance: 0,
    isStart: false,
    isTraversed: false,
    parent: null
}

export const TILE_STYLE = " lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

export const MAZES: MazeSelectType[] = [
    { name: "No Maze", value: "NONE" },
    { name: "Binary Tree", value: "BINARY TREE" },
    { name: "Recursive Division", value: "RECURSIVE_DIVISION" },
]
    
export const SPEEDS: SpeedSelectType[] = [
    { name: 'slow', value: 2 },
    { name: ';medium', value: 1 },
    {name:'fast',value:2}
    
]
