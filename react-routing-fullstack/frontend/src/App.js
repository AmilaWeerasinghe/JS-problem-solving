// Challenge / Exercise
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import EditEventPage from "./pages/EditEventPage";
import EventsPage from './pages/EventsPage';
import EventDetails from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import MainNavigations from "./components/MainNavigation";

const router = createBrowserRouter([
  {path: '/', element: <MainNavigations/> ,
   children:[
    {index: true,element: <HomePage/> },
    {path:'/events', element: <EventsPage/>},
    {path: 'events/:eventId', element: <EventDetails/>},
    {path: 'events/new', element: <NewEventPage/>},
    {path: 'events/:eventId/edit', element: <EditEventPage/>},
   ]},
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
