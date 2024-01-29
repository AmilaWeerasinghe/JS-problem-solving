// Challenge / Exercise
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import EditEventPage from "./pages/EditEventPage";
import EventsPage, {loader as eventLoader} from './pages/EventsPage';
import EventDetails from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import Root from "./pages/Root";
import EventLayout from "./pages/EventsLayout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {path: '/', element: <Root/> , errorElement: <Error/>,
   children:[
    {index: true,element: <HomePage/> },
    {path: 'events', element: <EventLayout/>, children: [
      {path:'', element: <EventsPage/>, loader: eventLoader},
      {path: '/events/:eventId', element: <EventDetails/>},
      {path: '/events/new', element: <NewEventPage/>},
      {path: '/events/:eventId/edit', element: <EditEventPage/>},
    ]},
   ]},
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
