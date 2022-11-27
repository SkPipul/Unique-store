import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Category from "../../pages/Category/Category";
import ProductDetails from "../../pages/Category/ProductDetails";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
]);

export default router;