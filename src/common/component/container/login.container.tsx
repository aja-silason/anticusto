import { ReactNode } from "react"

type loginContainer = {
    children: ReactNode;
}

export const LoginContainer = ({children}: loginContainer) => {
    return (
        <div className="bg-[#fff] p-[1em] rounded-[5px] w-[520px] h-[500px] flex flex-col gap-[1em]">
            {children}
        </div>
    )
} 