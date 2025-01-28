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
import { ProtectedRouteMaster, ProtectedRouteSaler, ProtectedRouteStock } from "../common/hook";
import { MasterScreen } from "../modules/allmodule";
import { NotFound } from "../modules/NoteFound.screen";


export function RoutePath () {
    return (
        <Router>
            <Routes>

                <Route path="/master" element={<ProtectedRouteMaster><MasterScreen/></ProtectedRouteMaster>}/>

                <Route path="/" element={<LoginScreen/>}/>

                <Route path="stock" element={<ProtectedRouteStock><HomeStock/></ProtectedRouteStock>}/>
                <Route path="stock/stockmanagement" element={<ProtectedRouteStock><StockManagement/></ProtectedRouteStock>}/>
                <Route path="stock/support" element={<ProtectedRouteStock><SupportStock/></ProtectedRouteStock>}/>
                <Route path="stock/settings" element={<ProtectedRouteStock><Settings/></ProtectedRouteStock>}/> 
                <Route path="stock/supplymanagement" element={<ProtectedRouteStock><SupplyManagement/></ProtectedRouteStock>}/> 

                <Route path="sale" element={<ProtectedRouteSaler><HomeSale/></ProtectedRouteSaler>}/> 
                <Route path="sale/client" element={<ProtectedRouteSaler><ClientManagement/></ProtectedRouteSaler>}/> 
                <Route path="sale/support" element={<ProtectedRouteSaler><SupportSale/></ProtectedRouteSaler>}/>

                <Route path="*" element={<NotFound/>} />
                

            </Routes>
        </Router>
    )
}
