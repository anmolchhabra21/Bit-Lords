import Home from './components/Home'
import JobDetails from './components/Job-Details/JobDetails';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddJob from './components/AddJob';
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import SignUp from './components/signup';
import Hero from './components/FrontPage/Hero';

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
  },
  {
    path: '/signin',
    element: <SignIn/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/',
    element: <Hero/>
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
