import Header from "../components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    );
}