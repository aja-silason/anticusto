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

    const handleLogout = () => {
        localStorage.clear();
        navigate("/", {replace: true});
    }

    return (
        <div className="flex flex-col h-[100vh] p-[1em] items-center gap-[2em]">
            
            <div className="flex justify-end w-[100%]">
                <button onClick={handleLogout} className="bg-[#ff0500] font-[400] text-[#fff] p-[.4em] rounded-[.5em]">Terminar sessão</button>
            </div>
            <div className="flex flex-col gap-[1em] p-[1em] h-[80vh] items-center justify-center bg-[#fff] w-[70%] rounded-[.5em]">
            <h2 className="text-[#264A7D] text-[14pt] font-[400]">Escolha um dos módulos para adentrares</h2>

                <div className="flex gap-[1em] w-full items-center justify-center bg-[#fff] rounded-[.5em] overflow-auto flex-wrap">
                    <button onClick={() => handleSwitchModule("stock")} className="bg-[#264A7D] text-[#fff] w-[20%] h-[20%] flex items-center justify-center p-[3em] rounded-[.3em]">Gestão de Estoque</button>
                    <button onClick={() => handleSwitchModule("saler")} className="bg-[#264A7D] text-[#fff] w-[20%] h-[20%] flex items-center justify-center p-[3em] rounded-[.3em]">Venda</button>

                </div>

            </div>
        </div>
    )
}