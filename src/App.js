
import './App.css';
import Login from './Pages/Login';
import TaskPage from './Pages/TaskPage';
// import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/taskPage",
    element: <TaskPage/>
  },

]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


