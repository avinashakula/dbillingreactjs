import {Routes, Route} from "react-router-dom"
import AllTransactions from "@components/billing/allTransactions";
import Billing from "@components/billing/billing";
import Purchases from "@components/billing/purchases";
import PendingCredits from "@components/billing/pendingCredits";
import Bills from "@components/billing/bills";
import CompletedCredits from "@components/billing/completedCredits";
import Payments from "@components/billing/payments";
import PendingInvoices from "@components/billing/pendingInvoices";
export function BillingRoutes(){
    return (
        <Routes>
            <Route index element={<Billing />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/billing/allTransactions" element={<AllTransactions />} />    
            <Route path="/billing/bills" element={<Bills />} />
            <Route path="/billing/purchases" element={<Purchases />} />
            <Route path="/billing/pendingCredits" element={<PendingCredits />} />
            <Route path="/billing/completedCredits" element={<CompletedCredits />} />
            <Route path="/billing/payments" element={<Payments />} />
            <Route path="/billing/pendingInvoices" element={<PendingInvoices />} />
        </Routes>
    )
}