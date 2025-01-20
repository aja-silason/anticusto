import { Horse } from "@phosphor-icons/react"
import { Link, useLocation } from "react-router-dom"

export const SideBar = () => {

    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
            <div className="bg-[#fff] md:h-[85vh] p-[.5em] rounded-[10px] xl:h-[80vh] sm:h-[80vh] ls:h-[80vh] md:w-[220px]  flex flex-col gap-[1em]">
                
                <div>
                    <p className="text-[#182F4F] font-[DM Sans] font-[400] text-[16px] opacity-[70%]">Menu</p>
                </div>

                <nav className="sidebar">
                    <ul className="flex flex-col gap-[1em] text-[14px]">
                        <Link to="/baxtter">
                            <li className={`h-[45px] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/baxtter") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                <Horse/>
                                Página Inicial            
                            </li>
                        </Link>

                        <Link to="/baxtter/profile">
                            <li className={`h-[45px] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/baxtter/profile") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                <Horse/>
                                Candidaturas         
                            </li>
                        </Link>

                        <Link to="/baxtter/candidate">
                            <li className={`h-[45px] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/baxtter/candidate") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                <Horse/>
                                Perfil            
                            </li>
                        </Link>

                        <Link to="/baxtter/support">
                            <li className={`h-[45px] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/baxtter/support") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                <Horse/>
                                Suporte            
                            </li>
                        </Link>

                    </ul>
                </nav>

            </div>
    )
}