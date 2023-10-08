import { Outlet } from "react-router-dom";
import NavBar from "@navbar/Navbar";
import { Provider } from "react-redux";
import store from "@store/store";

const RootLayout = ()=>{
    return (
        <>
        <Provider store={store}>
            <NavBar />
            <Outlet />
        </Provider>    
        </>
    )
}

export default RootLayout;