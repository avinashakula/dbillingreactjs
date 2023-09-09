import { Link, Outlet } from "react-router-dom";

function Stock(){
    return (
        <>           
           <div className="container">
                <div className="dropdown" >
                    <button className="btn btn-primary btn-sm"  id="dropdownMenu" data-bs-toggle="dropdown"><i className="bi bi-arrow-down-circle-fill"></i></button>
                    <ul style={{padding:"10px"}} className="dropdown-menu" aria-labelledby="dropdownMenu">
                            <li>
                                <Link to="add" className="list-group-item">
                                Add
                                </Link>
                            </li>
                            <li>
                                <Link to="existedStock" className="list-group-item ">
                                Existed Stock
                                </Link>
                            </li>
                            <li>
                                <Link to="inactive" className="list-group-item ">
                                Inactive
                                </Link>
                            </li>
                            <li>
                                <Link to="createMeasure" className="list-group-item ">
                                Create Measure
                                </Link>
                            </li>
                            <li>
                                <Link to="inactiveMeasure" className="list-group-item ">
                                Inactive Measure
                                </Link>
                            </li>
                            
                    </ul>
                </div>   
            </div>    
            <Outlet />
            
        </>
    )
}

export default Stock;