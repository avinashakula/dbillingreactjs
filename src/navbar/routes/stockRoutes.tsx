import {Routes, Route} from "react-router-dom"
import AddStock from "@components/stock/addStock";
import Stock from "@components/stock/stock";
import InactiveStock from "@components/stock/inactiveStock";
import CreateMeasure from "@components/stock/createMeasure";
import InactiveMeasure from "@components/stock/inactiveMeasure";
export function StockRoutes(){
    return (
        <Routes>
            <Route index element={<Stock />} />
            <Route path="/stock/add" element={<AddStock />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/stock/inactive" element={<InactiveStock />} />
            <Route path="/stock/createMeasure" element={<CreateMeasure />} />
            <Route path="/stock/inactiveMeasure" element={<InactiveMeasure />} />
        </Routes>
    )
}