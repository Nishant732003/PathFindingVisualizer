import { useContext } from "react"
import { PathfindingContext,PathfindingContextInterface } from "../context/PathFinderContext"

export const usePathfinding = ():PathfindingContextInterface => {
    const context = useContext(PathfindingContext);
    if (!context) {
        throw new Error("usePathfinding must be used within a PathfindingProvider");
    }
    return context;
}