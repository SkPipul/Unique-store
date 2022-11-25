import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Category from "../../pages/Category/Category";
import CategoryDetails from "../../pages/CategoryDetails";
import Home from "../../pages/Home/Home";

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
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/category/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    }
]);

export default router;