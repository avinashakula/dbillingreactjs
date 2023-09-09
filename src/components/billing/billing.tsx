import { Link, Outlet } from "react-router-dom";
import * as CONSTANT from "@utilities/constants/default"

function Billing(){
    return (
        <>           
           <div className="container">
                <div className="dropdown" >
                    <button className="btn btn-primary btn-sm"  id="dropdownMenu" data-bs-toggle="dropdown"><i className="bi bi-arrow-down-circle-fill"></i></button>
                    <ul style={{padding:"10px"}} className="dropdown-menu" aria-labelledby="dropdownMenu">
                            <li>
                                <Link to={CONSTANT.navBar.BILLING.BILLING.NESTED_ROUTE} className="list-group-item">
                                {CONSTANT.navBar.BILLING.BILLING.TITLE}
                                </Link>
                            </li>
                            <li>
                                <Link to="allTransactions" className="list-group-item ">
                                All Transactions
                                </Link>
                            </li>
                            <li>
                                <Link to="bills" className="list-group-item ">
                                Bills
                                </Link>
                            </li>
                            <li>
                                <Link to="purchases" className="list-group-item ">
                                Purchases
                                </Link>
                            </li>
                            <li>
                                <Link to="pendingCredits" className="list-group-item ">
                                Pending Credits
                                </Link>
                            </li>
                            <li>
                                <Link to="completedCredits" className="list-group-item ">
                                Completed Credits
                                </Link>
                            </li>
                            <li>
                                <Link to="payments" className="list-group-item ">
                                Payments
                                </Link>
                            </li>
                            <li>
                                <Link to="pendingInvoices" className="list-group-item ">
                                Pending Invoices
                                </Link>
                            </li>
                           
                    </ul>
                </div>   
            </div>                   
            <Outlet />
        </>
    )
}

export default Billing;