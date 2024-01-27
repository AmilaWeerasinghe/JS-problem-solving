import { Link } from "react-router-dom";

const events = [
    {id : 1 , name: 'event1'},
    {id : 2 , name: 'event2'},
    {id : 3 , name: 'event3'},
]


const EventsPage = () => {
    return(
        <>
        <h1>Events Page</h1>
        <ul>
            {
                events.map((event) => 
                <li key={event.id}>
                    <Link to={`/events/${event.id}`}>{event.name}</Link>
                </li>
                )
            }
        </ul>
        </>
        
    )
}

export default EventsPage;