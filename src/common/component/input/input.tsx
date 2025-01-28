import { Eye, EyeClosed } from "@phosphor-icons/react";
import { useState } from "react";

type inputProps = {
    value: string | number | any,
    change: (e: any) => any;
    name: string,
    label: string,
    type?: string
}

export const Input = ({value, change, name, label, type}: inputProps) => {

    const [isPassword, setIsPassword] = useState<boolean>(true);
    const [valueType, setValueType] = useState<string>("password");

    const handleChangeType = () => {
        setIsPassword(!isPassword);

        const verifyType = !isPassword ? setValueType("password") : setValueType("text")

        return verifyType;
    }

    return (
        <div className="flex flex-col gap-[.5em] w-[100%]">
            <label htmlFor={name} className="text-[11pt]">{label}</label>
            <div className="flex relative items-center">
                <input type={type ? valueType : "text"} placeholder="" id={name} onChange={change} value={value} name={name} className="border border-[#ccc] rounded-[5px] p-[.5em] w-[100%]"/>
                {
                    type && (
                        <span className="absolute right-[10px]">
                            <button onClick={() => handleChangeType()}>
                                {
                                    isPassword ? (
                                        <Eye className="w-[20px] h-[20px]"/>
                                        
                                    ) : (
                                        <EyeClosed className="w-[20px] h-[20px]"/>
                                    )
                                }
                            </button>
                        </span>
                    )
                }

            </div>
        </div>
    )
}