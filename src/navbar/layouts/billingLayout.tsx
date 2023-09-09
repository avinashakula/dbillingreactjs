import {Outlet, Link} from "react-router-dom"
export function BillingLayout(){
    return (
        <>
            <div className="container">
                <div className="dropdown" >
                    <button className="btn btn-primary btn-sm"  id="dropdownMenu" data-bs-toggle="dropdown"><i className="bi bi-arrow-down-circle-fill"></i></button>
                    <ul style={{padding:"10px"}} className="dropdown-menu" aria-labelledby="dropdownMenu">
                            <li>
                                <Link to="/billing" className="list-group-item">
                                Billing
                                </Link>
                            </li>
                            <li>
                                <Link to="/billing/allTransactions" className="list-group-item ">
                                All Transactions
                                </Link>
                            </li>
                            <li>
                                <Link to="/billing/bills" className="list-group-item ">
                                Bills
                                </Link>
                            </li>
                            <li>
                                <Link to="/billing/purchases" className="list-group-item ">
                                Purchases
                                </Link>
                            </li>
                            <li>
                                <Link to="/billing/pendingCredits" className="list-group-item ">
                                Pending Credits
                                </Link>
                            </li>
                            <li>
                                <Link to="/billing/completedCredits" className="list-group-item ">
                                Completed Credits
                                </Link>
                            </li>
                            <li>
                                <Link to="/billing/payments" className="list-group-item ">
                                Payments
                                </Link>
                            </li>
                            <li>
                                <Link to="/billing/pendingInvoices" className="list-group-item ">
                                Pending Invoices
                                </Link>
                            </li>
                    </ul>
                </div>   
            </div>     
            <Outlet context={{welcome:"hi"}} />
        </>
    )
}