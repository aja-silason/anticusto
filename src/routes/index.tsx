import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomeAcademy from "../modules/academy/page";

export function RoutePath () {
    return (
        <Router>
            <Routes>
                <Route path="estoque" element={<HomeAcademy/>}/>
                {/* <Route path="academy/support" element={<SupportAcademy/>}/>
                <Route path="academy/contentmanagement" element={<ContentAcademy/>}/>
                <Route path="academy/menumanagement" element={<MenuAcademy/>}/>
                <Route path="academy/schedulemanagement" element={<ScheduleAcademy/>}/>
                <Route path="academy/settings" element={<Settings/>}/> */}

            </Routes>
        </Router>
    )
}
