import { Link, Outlet } from "react-router-dom";

function Profile(){
    return (
        <>           
           <div className="container">
                <div className="dropdown" >
                    <button className="btn btn-primary btn-sm"  id="dropdownMenu" data-bs-toggle="dropdown"><i className="bi bi-arrow-down-circle-fill"></i></button>
                    <ul style={{padding:"10px"}} className="dropdown-menu" aria-labelledby="dropdownMenu">
                            <li>
                                <Link to="changePassword" className="list-group-item">
                                Change password
                                </Link>
                            </li>
                            <li>
                                <Link to="logout" className="list-group-item ">
                                Logout
                                </Link>
                            </li>                           
                            
                    </ul>
                </div>   
            </div>    
            <Outlet />
            
        </>
    )
}

export default Profile;