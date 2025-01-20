import { ReactNode } from "react"

type CardProps = {
    title: string,
    quantity: number,
    icon: ReactNode
}

export const Card = ({icon, title, quantity}: CardProps) => {
    return (
        <div className="bg-[#fff] flex flex-col gap-[1em] md:p-[.5em] rounded-[.5em] md:w-[50%]">
            <div className="flex gap-[.5em] items-center">
                {icon}
                <p className="text-[12pt] font-[500] text-[#264A7D]">{title}</p>
            </div>
            <div className="flex justify-end">
                <p className="text-[22pt] font-bold text-[#264A7D]">{quantity}</p>
            </div>
        </div>
    )
}