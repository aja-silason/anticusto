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
import { ProtectedRouteAdministrator, ProtectedRouteMaster, ProtectedRouteSaler, ProtectedRouteStock } from "../common/hook";
import { MasterScreen } from "../modules/allmodule";
import { NotFound } from "../modules/NoteFound.screen";
import HomeAdm from "../modules/administrator/page";
import UserManagement from "../modules/administrator/page/user-management";
import SupportAdministrator from "../modules/administrator/page/support";
import RoleManagement from "../modules/administrator/page/role-management";
import EmployerManagement from "../modules/administrator/page/employer-management";
import ProductManagement from "../modules/stock/page/product-management";
import { PrintScreenTicket } from "../modules/sale/page/print-screen-ticket";


export function RoutePath () {
    return (
        <Router>
            <Routes>

                <Route path="/master" element={<ProtectedRouteMaster><MasterScreen/></ProtectedRouteMaster>}/>

                <Route path="/" element={<LoginScreen/>}/>

                <Route path="stock" element={<ProtectedRouteStock><HomeStock/></ProtectedRouteStock>}/>
                <Route path="stock/stockmanagement" element={<ProtectedRouteStock><StockManagement/></ProtectedRouteStock>}/>
                <Route path="stock/productmanagement" element={<ProtectedRouteStock><ProductManagement/></ProtectedRouteStock>}/>
                <Route path="stock/support" element={<ProtectedRouteStock><SupportStock/></ProtectedRouteStock>}/>
                <Route path="stock/settings" element={<ProtectedRouteStock><Settings/></ProtectedRouteStock>}/> 
                <Route path="stock/supplymanagement" element={<ProtectedRouteStock><SupplyManagement/></ProtectedRouteStock>}/> 

                <Route path="sale" element={<ProtectedRouteSaler><HomeSale/></ProtectedRouteSaler>}/> 
                <Route path="sale/client" element={<ProtectedRouteSaler><ClientManagement/></ProtectedRouteSaler>}/> 
                <Route path="sale/support" element={<ProtectedRouteSaler><SupportSale/></ProtectedRouteSaler>}/>
                
                <Route path="sale/sale-print-sale-ticket/:data" element={<ProtectedRouteSaler><PrintScreenTicket/></ProtectedRouteSaler>}/>

                <Route path="administrator" element={<ProtectedRouteAdministrator><HomeAdm/></ProtectedRouteAdministrator>} />
                <Route path="administrator/employer" element={<ProtectedRouteAdministrator><EmployerManagement/></ProtectedRouteAdministrator>} />
                <Route path="administrator/user" element={<ProtectedRouteAdministrator><UserManagement/></ProtectedRouteAdministrator>} />
                <Route path="administrator/support" element={<ProtectedRouteAdministrator><SupportAdministrator/></ProtectedRouteAdministrator>} />
                <Route path="administrator/role" element={<ProtectedRouteAdministrator><RoleManagement/></ProtectedRouteAdministrator>} />
                
                
                <Route path="*" element={<NotFound/>} />
                

            </Routes>
        </Router>
    )
}
