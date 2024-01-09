import { forwardRef } from "react";
const ResultModal = forwardRef(({result, targetTime},ref) => {
    return(
        <dialog ref={ref} className="result-modal">
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime}</strong> seconds.
            </p>
            <p>
                You stopped the timer with <strong>X</strong> seconds left
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;