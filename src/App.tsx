import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import Courses from './pages/Courses';
import Resources from './pages/Resources';
import AboutUs from './pages/AboutUs';
import Jobs from './pages/Jobs';

const router = createBrowserRouter([{
  path: '/g121/',
  element: <Home />,
},
{
  path: '/g121/consultation',
  element: <Consultation />
},
{
  path: '/g121/courses',
  element: <Courses />
},
{
  path: '/g121/resources',
  element: <Resources />
},
{
  path: '/g121/aboutus',
  element: <AboutUs />
},
{
  path: '/g121/jobs',
  element: <Jobs />
},
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
