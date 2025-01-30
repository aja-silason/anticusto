
type inputProps = {
    value: string | number | any,
    change: (e: any) => any;
    name: string,
    label: string,
    type?: string
}

export const Input = ({value, change, name, label, type}: inputProps) => {
    return (
        <div className="flex flex-col gap-[.5em] w-[100%]">
            <label htmlFor={name} className="text-[11pt]">{label}</label>
            <input type={type ?? "text"} placeholder="" id={name} onChange={change} value={value} name={name} className="border border-[#ccc] rounded-[5px] p-[.5em] w-[100%]" required/>
        </div>
    )
}