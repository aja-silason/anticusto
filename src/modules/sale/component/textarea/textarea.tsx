
type inputProps = {
    value: string | number | any,
    change: (e: any) => any;
    name: string,
    label: string
}

export const Textarea = ({value, change, name, label}: inputProps) => {
    return (
        <div className="flex flex-col gap-[.5em] w-[100%]">
            <label htmlFor={name} className="text-[11pt]">{label}</label>
            <textarea  id={name} onChange={change} value={value} name={name} className="border md:h-[300px] border-[#ccc] rounded-[5px] p-[.5em] w-[100%]"></textarea>
        </div>
    )
}