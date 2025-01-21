
type inputProps = {
    value: string | number | any,
    change: (e: any) => any;
    name: string,
    label: string
}

export const Input = ({value, change, name, label}: inputProps) => {
    return (
        <div className="flex flex-col gap-[.5em] w-[100%]">
            <label htmlFor={name} className="text-[11pt]">{label}</label>
            <input type="text" placeholder="" id={name} onChange={change} value={value} name={name} className="border border-[#ccc] rounded-[5px] p-[.5em] w-[100%]"/>
        </div>
    )
}