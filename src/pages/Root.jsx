import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createContext, useState } from 'react';

export const RootContext = createContext({
    headerHeight: 0,
    setHeaderHeight: () => {},
});

export default function Root() {
    const [headerHeight, setHeaderHeight] = useState(0);
    
    return (
        <RootContext.Provider value={{headerHeight, setHeaderHeight}}>
            <Header />
            <Outlet />
            <Footer />
        </RootContext.Provider>
    );
}