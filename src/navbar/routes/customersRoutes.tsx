import {Routes, Route} from "react-router-dom"
import AddCustomers from "@components/customers/addCustomers"
import Customers from "@components/customers/customers"
import Purchasers from "@components/customers/purchasers"

export function CustomerRoutes(){
    return (
        <Routes>
            <Route path="/customers/add" element={<AddCustomers />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/purchasers" element={<Purchasers />} />
        </Routes>
    )
}