import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';

const router = createBrowserRouter([{
  path: '/g121/',
  element: <Home/>,
}]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
