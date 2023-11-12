import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import DonationPage from "../pages/DonationPage/DonationPage";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import Statistics from "../pages/Statistics/Statistics";


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
                    path:'/donation-details/:id',
                    element: <DonationDetails></DonationDetails>,
                    loader: ()=> fetch('/data.json'),
                },
                {
                    path: '/donation',
                    element: <DonationPage></DonationPage>,
                },
                {
                    path: '/statistics',
                    element: <Statistics></Statistics>,
                    loader: ()=> fetch('/data.json'),
                },
            ]
        },
    ]
);

export default myRouter;