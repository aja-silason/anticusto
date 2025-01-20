import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomeStock from "../modules/stock/page";
import StockManagement from "../modules/stock/page/stock-management";
import Settings from "../modules/stock/page/settings";
import SupportStock from "../modules/stock/page/support";
import SupplyManagement from "../modules/stock/page/supply-management";


export function RoutePath () {
    return (
        <Router>
            <Routes>
                <Route path="stock" element={<HomeStock/>}/>
                <Route path="stock/stockmanagement" element={<StockManagement/>}/>
                <Route path="stock/support" element={<SupportStock/>}/>
                <Route path="stock/settings" element={<Settings/>}/> 
                <Route path="stock/supplymanagement" element={<SupplyManagement/>}/> 
                

            </Routes>
        </Router>
    )
}
