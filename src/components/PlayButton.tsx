import { MouseEventHandler } from "react";

export function PlayButton({
    handleRunVisualizer,
    isDisabled,
    isGraphVisualized,

}: {
        isDisabled: boolean;
        isGraphVisualized: boolean;
        handleRunVisualizer: MouseEventHandler<HTMLButtonElement>;


    
    }) {
    return (
        <button>
            disabled={isDisabled}
        </button>
    )
}