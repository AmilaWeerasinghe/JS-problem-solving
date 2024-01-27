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
                    {event.name}
                </li>
                )
            }
        </ul>
        </>
        
    )
}

export default EventsPage;