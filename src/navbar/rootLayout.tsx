import { Outlet } from "react-router-dom";
import NavBar from "@navbar/Navbar";
import { Provider } from "react-redux";
import store from "@store/store";
// import dotenv from "dotenv";
// dotenv.config();

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