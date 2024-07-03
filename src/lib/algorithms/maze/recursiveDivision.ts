import { GridType, SpeedType, TileType } from "../../../utils/types";
import { horizontalDivision } from "./horizontalDivision";
import { verticalDivision } from "./verticalDivision";

export default async function recursiveDivision(
    {
        grid,
        startTile,
        endTile,
        height,
        width,
        row,
        col,
        setIsDisabled,
        speed
        
    }: {

            grid: GridType,
            startTile: TileType,
            endTile: TileType,
            height: number,
            width: number,
            row: number,
            col: number,
            setIsDisabled:(disabled:boolean)=>void,
            speed:SpeedType
        
    }
) {
    if (height <= 1 || width <= 1) {
        return;
    }
    if (height > width) {
        await horizontalDivision({
          
            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed,
        }
        );
    } else {
        await verticalDivision({

            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed,
        }
        );
    }
}