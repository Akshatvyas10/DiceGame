


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import GamePlay from './components/GamePlay'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/play',
    element: <GamePlay />
  }




])
function App() {


  return (
    <>
      <RouterProvider router={Router}>

      </RouterProvider>
    </>
  )
}

export default App
