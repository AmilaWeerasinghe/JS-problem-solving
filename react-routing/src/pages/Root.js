import { Outlet } from "react-router-dom";
import classes from './Root.module.css';
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
    return (
        <>
        <MainNavigation/>
        <main className="content">
        <Outlet/>
        </main>     
        </>)
}

export default RootLayout;