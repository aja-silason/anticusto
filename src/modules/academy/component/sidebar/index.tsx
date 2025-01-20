import {  AddressBook, Airplay, AlignLeft, Gear, GitFork, Info } from "@phosphor-icons/react"
import { Link, useLocation } from "react-router-dom"

import madeInAngola from "../../../../common/logo/madedInAngola.svg";

export const SideBar = () => {

    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
            <div className="bg-[#fff] md:h-[85vh] p-[.5em] rounded-[10px] xl:h-[80vh] sm:h-[80vh] ls:h-[80vh] md:w-[230px]  flex flex-col gap-[2em]">

                <div className="flex flex-col gap-[.7em]">
                    <div>
                        <p className="text-[#182F4F] font-[DM Sans] font-[400] text-[16px] opacity-[70%]">Menu</p>
                    </div>

                    <nav className="sidebar">
                        <ul className="flex flex-col gap-[1em] text-[14px]">
                            <Link to="/academy" className="flex justify-start gap-[.5em]">
                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/academy") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>
                                
                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/academy") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <Airplay className="w-[20px] h-[20px]"/>
                                    Página Inicial            
                                </li>
                            </Link>

                            <Link to="/academy/schedulemanagement" className="flex justify-start gap-[.5em]">
                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/academy/schedulemanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/academy/schedulemanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <AddressBook className="w-[20px] h-[20px]"/>
                                    Agendamento
                                </li>
                            </Link>

                            <Link to="/academy/menumanagement" className="flex justify-start gap-[.5em]">

                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/academy/menumanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/academy/menumanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <AlignLeft className="w-[20px] h-[20px]"/>
                                    Gestão de Menu            
                                </li>
                            </Link>

                            <Link to="/academy/contentmanagement" className="flex justify-start gap-[.5em]">
                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/academy/contentmanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/academy/contentmanagement") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <GitFork className="w-[20px] h-[20px]"/>
                                    Gestão de Conteudos            
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
                            <Link to="/academy/support" className="flex justify-start gap-[.5em]">

                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/academy/support") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/academy/support") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <Info className="w-[20px] h-[20px]"/>
                                    Suporte            
                                </li>
                            </Link>

                            <Link to="/academy/settings" className="flex justify-start gap-[.5em]">

                                <span className={`h-[40px] flex items-center gap-[.5em] ${isActive("/academy/settings") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} w-[.3em] ml-[-.5em] rounded-tr-[.5em] rounded-br-[.5em]`}></span>

                                <li className={`h-[40px] w-[100%] flex items-center gap-[.5em] rounded-[.5em] ${isActive("/academy/settings") ? 'bg-[#264A7D] text-[#fff] font-[500]' : 'bg-[#fff]'} p-[.5em]`}>
                                    <Gear className="w-[20px] h-[20px]"/>
                                    Configurações            
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center justify-center">
                    <img src={madeInAngola} alt="" />
                </div>
                
                

            </div>
    )
}