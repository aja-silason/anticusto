import { ReactNode } from "react"
import { Header } from "../header"
import { SideBar } from "../sidebar"
import { HeaderContent } from "../header-content"

type containerProps = {
    children: ReactNode,
    title: string
}
export const Container = ({children, title}: containerProps) => {
    return (
        <div className="flex flex-col gap-[.5em] bg-[#ECEEF6] md:h-[100vh] xl:h-[100vh] ls:h-[100vh]">
            <Header/>
            <div className="flex p-[.9em] gap-[1em]">
                <SideBar/>
                <div className="w-[100%] flex flex-col gap-[.5em]">
                    <HeaderContent title={title}/>
                    {children}
                </div>
            </div>
        </div>
    )
}
