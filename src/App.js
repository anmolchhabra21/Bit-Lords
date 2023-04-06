import Home from './components/Home'
import JobDetails from './components/job-details/JobDetails';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddJob from './components/AddJob';
// import Sidebar from './components/Sidebar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "newjob/",
    element:<AddJob/>
  },
  {
    path: '/job-details',
    element: <JobDetails/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
