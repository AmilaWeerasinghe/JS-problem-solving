// Challenge / Exercise
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import EditEventPage from "./pages/EditEventPage";
import EventsPage from './pages/EventsPage';
import EventDetails from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import Root from "./pages/Root";

const router = createBrowserRouter([
  {path: '/', element: <Root/> ,
   children:[
    {index: true,element: <HomePage/> },
    {path:'/events', element: <EventsPage/>},
    {path: '/events/:eventId', element: <EventDetails/>},
    {path: 'events/new', element: <NewEventPage/>},
    {path: 'events/:eventId/edit', element: <EditEventPage/>},
   ]},
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
