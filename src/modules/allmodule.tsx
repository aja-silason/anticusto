import { useNavigate } from "react-router-dom";
import { USER_DATA_ROLE, USER_MASTER_VERIFY } from "../common/utils/storageVariables"

export const MasterScreen = () => {
    
    const navigate = useNavigate();

    const handleSwitchModule = (module: string) => {
        localStorage.setItem(USER_DATA_ROLE, JSON.stringify(module));
        localStorage.setItem(USER_MASTER_VERIFY, JSON.stringify(true));

        if(module == "stock"){
            navigate("/stock", {replace: true});
        } else if(module == "saler"){
            navigate("/sale", {replace: true});
        } else {
            navigate("/master", {replace: true});
        }
    }

    return (
        <div className="flex h-[100vh] justify-center items-center gap-[2em]">
            <button onClick={() => handleSwitchModule("stock")} className="bg-[#ccc] p-[.5em]">Stock Module</button>
            <button onClick={() => handleSwitchModule("saler")} className="bg-[#ccc] p-[.5em]">Saler Module</button>
        </div>
    )
}