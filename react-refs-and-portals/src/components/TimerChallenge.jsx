import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({title, targetTime})=>{
    const timer = useRef();
    const dialog = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired , setTimerExpired] = useState(false);

    const handleTimerStart = () =>{
        setTimerStarted(true);
        timer.current = setTimeout(()=>{
            //will be executed once the allocated time is finished
            setTimerExpired(true);
            dialog.current.showModal();
        },targetTime*1000)
    }

    const handleTimerStop = ()=>{
        clearTimeout(timer.current);
        setTimerStarted(false)
    }
    return(
        <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button onClick={timerStarted ? handleTimerStop : handleTimerStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
            </p>
            <p className={timerStarted ?  'active' : undefined}>
                {timerStarted? 'Timer is running' : 'Timer inactive'}
            </p>
        </section>
        </>
    )
}

export default TimerChallenge;