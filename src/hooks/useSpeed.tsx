import { useContext } from "react"
import { SpeedContext, SpeedContextInterface } from "../context/SpeedContext"

export const useSpeed = ():SpeedContextInterface => {
    const context = useContext(SpeedContext);
    if (!context) {
        throw new Error("useSpeed must be used within a SpeedProvider");
    }
    return context;
}