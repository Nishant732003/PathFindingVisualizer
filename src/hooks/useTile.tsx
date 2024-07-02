import { useContext } from "react"
import { TileContext,TileContextInterface } from "../context/TileContext"

export const  useTile = ():TileContextInterface => {
    const context = useContext(TileContext);
    if (!context) {
        throw new Error("useTile must be used within a Tileprovider");
    }
    return context;
}