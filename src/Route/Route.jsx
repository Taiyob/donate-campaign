import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import DonationPage from "../pages/DonationPage/DonationPage";


const myRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element: <Home></Home>,
                    loader: ()=> fetch('/data.json'),
                },
                {
                    path: '/donation',
                    element: <DonationPage></DonationPage>,
                }
            ]
        },
    ]
);

export default myRouter;