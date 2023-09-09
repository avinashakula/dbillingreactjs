import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Home } from "@components/home/home";
import Customers from "@components/customers/customers";
import AddCustomers from "@components/customers/addCustomers";
import Purchasers from "@components/customers/purchasers";
import NoMatch from "@components/noMatch/noMatch";
import Moderators from "@components/moderators/moderators";
import AddModerators from "@components/moderators/addModerators";
import AddStock from "@components/stock/addStock";
import InactiveStock from "@components/stock/inactiveStock";
import CreateMeasure from "@components/stock/createMeasure";
import InactiveMeasure from "@components/stock/inactiveMeasure";
import Stock from "@components/stock/stock";
import ExistedCustomers from "@components/customers/existedCustomers";
import ExistedModerators from "@components/moderators/existedModerators";
import ExistedStock from "@components/stock/existedStock";
import Billing from "@components/billing/billing";
import NewBilling from "@components/billing/newBilling";
import AllTransactions from "@components/billing/allTransactions";
import Bills from "@components/billing/bills";
import Purchases from "@components/billing/purchases";
import PendingCredits from "@components/billing/pendingCredits";
import CompletedCredits from "@components/billing/completedCredits";
import Payments from "@components/billing/payments";
import PendingInvoices from "@components/billing/pendingInvoices";
import LedgerRetail from "@components/reports/ledgerRetail";
import LedgerPurchase from "@components/reports/ledgerPurchase";
import ChangePassword from "@components/profile/changePassword";
import Logout from "@components/profile/logout";
import Profile from "@components/profile/profile";
import Login from "@components/login/login";
import RootLayout from "@navbar/rootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Login />} />
        <Route index path="home" element={<Home />} />
        <Route path="billing" element={<Billing />}>
          <Route path="newBilling" element={<NewBilling />} />
          <Route path="allTransactions" element={<AllTransactions />} />
          <Route path="bills" element={<Bills />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="pendingCredits" element={<PendingCredits />} />
          <Route path="completedCredits" element={<CompletedCredits />} />
          <Route path="payments" element={<Payments />} />
          <Route path="pendingInvoices" element={<PendingInvoices />} />
        </Route>
        <Route path="stock" element={<Stock />}>
          <Route path="add" element={<AddStock />} />
          <Route path="existedStock" element={<ExistedStock />} />
          <Route path="inactive" element={<InactiveStock />} />
          <Route path="createMeasure" element={<CreateMeasure />} />
          <Route path="inactiveMeasure" element={<InactiveMeasure />} />
        </Route>
        <Route path="ledgerRetail" element={<LedgerRetail />} />
        <Route path="ledgerPurchase" element={<LedgerPurchase />} />
        <Route path="customers" element={<Customers />}>
          <Route path="add" element={<AddCustomers />} />
          <Route path="existedCustomers" element={<ExistedCustomers />} />
          <Route path="purchasers" element={<Purchasers />} />
        </Route>
        <Route path="moderators" element={<Moderators />}>
          <Route path="add" element={<AddModerators />} />
          <Route path="existedModerators" element={<ExistedModerators />} />
        </Route>
        <Route path="profile" element={<Profile />}>
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />

      {/* <NavBar />
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Login />} />
        <Route index path="home" element={<Home />} />
        <Route path="billing" element={<Billing />}>
          <Route path="newBilling" element={<NewBilling />} />
          <Route path="allTransactions" element={<AllTransactions />} />
          <Route path="bills" element={<Bills />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="pendingCredits" element={<PendingCredits />} />
          <Route path="completedCredits" element={<CompletedCredits />} />
          <Route path="payments" element={<Payments />} />
          <Route path="pendingInvoices" element={<PendingInvoices />} />
        </Route>
        <Route path="stock" element={<Stock />}>
          <Route path="add" element={<AddStock />} />
          <Route path="existedStock" element={<ExistedStock />} />
          <Route path="inactive" element={<InactiveStock />} />
          <Route path="createMeasure" element={<CreateMeasure />} />
          <Route path="inactiveMeasure" element={<InactiveMeasure />} />
        </Route>
        <Route path="ledgerRetail" element={<LedgerRetail />} />
        <Route path="ledgerPurchase" element={<LedgerPurchase />} />
        <Route path="customers" element={<Customers />}>
          <Route path="add" element={<AddCustomers />} />
          <Route path="existedCustomers" element={<ExistedCustomers />} />
          <Route path="purchasers" element={<Purchasers />} />
        </Route>
        <Route path="moderators" element={<Moderators />}>
          <Route path="add" element={<AddModerators />} />
          <Route path="existedModerators" element={<ExistedModerators />} />
        </Route>
        <Route path="profile" element={<Profile />}>
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route> */}
    </>
  );
}

export default App;
