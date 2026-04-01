import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgetPassword/ForgetPassword";
import EventDetails from "./pages/EventDetails/EventDetails";
import MyProfile from "./pages/MyProfile/MyProfile";
import MyBookings from "./pages/MyBookings/MyBookings";
import NotFound from "./pages/NotFound/NotFound";import PrivateRoute from "./routes/PrivateRoute";
import './App.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      {
        path: "/events/:id",
        element: <PrivateRoute><EventDetails /></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><MyProfile /></PrivateRoute>
      },
      {
        path: "/my-bookings",
        element: <PrivateRoute><MyBookings /></PrivateRoute>
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />;
    </>
  )
}

export default App
