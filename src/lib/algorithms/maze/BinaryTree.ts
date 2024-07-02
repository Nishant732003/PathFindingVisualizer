import { createwalls } from "../../../utils/createWalls";
import { GridType, SpeedType, TileType } from "../../../utils/types"
export const binaryTree = async (
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
    setIsDisabled: (isDisabled: boolean) => void,
    speed:SpeedType,
    
) => {
    createwalls(startTile, endTile, speed);
    await sleep()
}

