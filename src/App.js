import Home from './components/Home'
import Profile from './components/Profile';
import JobDetails from './components/Job-Details/JobDetails';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddJob from './components/AddJob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "profile/",
    element: <Profile />,
  },
  {
    path: "newjob/",
    element: <AddJob/>,
  },
  {
    path: '/job-details',
    element: < JobDetails/>
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
