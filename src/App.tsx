import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import Courses from './pages/Courses';
import Resources from './pages/Resources';
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
},
{
  path: '/consultation',
  element: <Consultation />
},
{
  path: '/courses',
  element: <Courses />
},
{
  path: '/resources',
  element: <Resources />
},
{
  path: '/aboutus',
  element: <AboutUs />
}

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
