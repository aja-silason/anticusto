import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import { LoginScreen } from "../modules";

import HomeStock from "../modules/stock/page";
import StockManagement from "../modules/stock/page/stock-management";
import Settings from "../modules/stock/page/settings";
import SupportStock from "../modules/stock/page/support";
import SupplyManagement from "../modules/stock/page/supply-management";

import HomeSale from "../modules/sale/page";
import SupportSale from "../modules/sale/page/support";
import ClientManagement from "../modules/sale/page/client-management";
import { ProtectedRouteSaler } from "../common/hook";


export function RoutePath () {
    return (
        <Router>
            <Routes>

                <Route path="/master" element={<LoginScreen/>}/>

                <Route path="/" element={<LoginScreen/>}/>

                <Route path="stock" element={<HomeStock/>}/>
                <Route path="stock/stockmanagement" element={<StockManagement/>}/>
                <Route path="stock/support" element={<SupportStock/>}/>
                <Route path="stock/settings" element={<Settings/>}/> 
                <Route path="stock/supplymanagement" element={<SupplyManagement/>}/> 

                <Route path="sale" element={<ProtectedRouteSaler><HomeSale/></ProtectedRouteSaler>}/> 
                <Route path="sale/client" element={<ClientManagement/>}/> 
                <Route path="sale/support" element={<SupportSale/>}/>
                

            </Routes>
        </Router>
    )
}
