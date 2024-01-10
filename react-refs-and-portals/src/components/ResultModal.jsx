import { forwardRef } from "react";
const ResultModal = forwardRef(({targetTime, remainingTime, onReset},ref) => {

    const userLost = remainingTime <= 0;

    const formattedRemainingTime = (remainingTime/1000).toFixed(2);

    const score = Math.round((remainingTime/ (targetTime *1000)) *100);

    return(
        <dialog ref={ref} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>You scored {score}</h2>}
            <p>
                The target time was <strong>{targetTime}</strong> seconds.
            </p>
            <p>
                You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds left
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;