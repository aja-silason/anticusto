import {  Airplay, Barn,
    DeviceRotate,
    //  Gear, 
     Info, SignOut, Users } from "@phosphor-icons/react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { USER_DATA_ROLE, USER_MASTER_VERIFY } from "../../../../common/utils/storageVariables";

export const SideBar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => location.pathname === path;

    const isMaster = localStorage.getItem(USER_MASTER_VERIFY);
    const parsedIsMaster = isMaster && JSON.parse(isMaster);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/", {replace: true})
    }

    const handleSwitchModule = (module: string) => {
        localStorage.setItem(USER_DATA_ROLE, JSON.stringify(module));
        localStorage.removeItem(USER_MASTER_VERIFY);
        navigate("/master", {replace: true});
    }

    return (
            <div className="bg-[#fff] md:h-[85vh] p-[.5em] rounded-[10px] xl:h-[80vh] sm:h-[80vh] ls:h-[80vh] md:w-[230px]  flex flex-col gap-[2em]">

                <div className="flex flex-col gap-[.7em]">
                    <div>
                        <p className="text-[#182F4F] font-[DM Sans] font-[400] text-[16px] opacity-[70%]">Menu</p>
                    </div>

                    <nav className="sidebar">
                        <ul className="flex flex-col gap-[1em] text-[14px]">
                            <Link to="/stock" className="flex justify-start gap-[.5em]">
                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/stock") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>
                                
                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/stock") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <Airplay className="w-[20px] h-[20px]"/>
                                    Página Inicial            
                                </li>
                            </Link>

                            <Link to="/stock/supplymanagement" className="flex justify-start gap-[.5em]">
                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/stock/supplymanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/stock/supplymanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <Users className="w-[20px] h-[20px]"/>
                                    Gerir Fonecedor
                                </li>
                            </Link>

                            <Link to="/stock/stockmanagement" className="flex justify-start gap-[.5em]">
                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/stock/stockmanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/stock/stockmanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <Barn className="w-[20px] h-[20px]"/>
                                    Gerir Estoque
                                </li>
                            </Link>

                        </ul>
                    </nav>
                </div>

                <div className="h-[100%] flex flex-col gap-[.5em]">

                    <div className="">
                        <p className="text-[#182F4F] font-[DM Sans] font-[400] text-[16px] opacity-[70%]">Ajuda</p>
                    </div>

                    <nav className="">
                        <ul className="flex flex-col gap-[1em] text-[14px]">
                            <Link to="/stock/support" className="flex justify-start gap-[.5em]">

                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/stock/support") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/stock/support") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <Info className="w-[20px] h-[20px]"/>
                                    Suporte            
                                </li>
                            </Link>

                            {/* <Link to="/stock/settings" className="flex justify-start gap-[.5em]">

                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/stock/settings") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/stock/settings") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <Gear className="w-[20px] h-[20px]"/>
                                    Configurações            
                                </li>
                            </Link> */}

                            {
                                parsedIsMaster && (
                                        <button className="flex justify-start gap-[.5em]" onClick={() => handleSwitchModule("master")}>
                                            <span className={`h-[40px] flex items-center gap-[.5em] bg-[#fff] w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>
                                            <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em]bg-[#fff]'} p-[.5em]`}>
                                                <DeviceRotate className="w-[20px] h-[20px]"/>
                                                Trocar de Módulo           
                                            </li>
                                        </button>
                                )
                            }

                            <button className="flex justify-start gap-[.5em]" onClick={handleLogout}>

                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/academy/settings") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/academy/settings") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <SignOut className="w-[20px] h-[20px]"/>
                                    Terminar sessão            
                                </li>
                            </button>
                        </ul>
                    </nav>
                </div>

                {/* <div className="flex items-center justify-center">
                    <img src={madeInAngola} alt="" />
                </div> */}
                
                

            </div>
    )
}