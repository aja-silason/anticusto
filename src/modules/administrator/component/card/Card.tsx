import { ReactNode } from "react"
import { useMoneyConvert } from "../../../../common/hook/useMoneyConvert"

type CardProps = {
    title: string,
    quantity: number,
    icon: ReactNode,
    value?: number
}

export const Card = ({icon, title, quantity, value}: CardProps) => {
    return (
        <div className="bg-[#fff] flex flex-col gap-[1em] md:p-[.5em] rounded-[.5em] md:w-[50%]">
            <div className="flex gap-[.5em]  justify-between">
                <div className="flex gap-[.5em] items-center">
                    {icon}
                    <p className="text-[12pt] font-[500] text-[#264A7D]">{title}: </p>
                </div>
                <p className="text-[22pt] font-bold text-[#264A7D]">{quantity}</p>
            </div>
            <div className="flex justify-end items-end">
                {
                    value && <p className="text-[10pt] font-bold text-[#264A7D]">Valor: {useMoneyConvert(value ?? 0) ?? useMoneyConvert(0)}</p>
                }
            </div>
        </div>
    )
}