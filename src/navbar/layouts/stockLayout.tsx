import {Outlet, Link} from "react-router-dom"
export function StockLayout(){
    return (
        <>
            <div className="container">
                <div className="dropdown" >
                    <button className="btn btn-primary btn-sm"  id="dropdownMenu" data-bs-toggle="dropdown"><i className="bi bi-arrow-down-circle-fill"></i></button>
                    <ul style={{padding:"10px"}} className="dropdown-menu" aria-labelledby="dropdownMenu">
                    <li>
                    <Link className="list-group-item" to="/stock/add">
                      Add Stock
                    </Link>
                  </li>
                  <li>
                    <Link className="list-group-item" to="/stock">
                      Stock
                    </Link>
                  </li>
                  <li>
                    <Link className="list-group-item" to="/stock/inactive">
                      Inactive Stock
                    </Link>
                  </li>
                  <li>
                    <Link className="list-group-item" to="/stock/createMeasure">
                      Create Measure
                    </Link>
                  </li>
                  <li>
                    <Link className="list-group-item" to="/stock/inactiveMeasure">
                      Inactive Measure
                    </Link>
                  </li>                           
                    </ul>
                </div>   
            </div>     
            <Outlet context={{welcome:"hi"}} />
        </>
    )
}