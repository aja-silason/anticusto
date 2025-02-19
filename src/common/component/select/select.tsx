import Select from "react-select";

type selectProps = {
    label: string,
    option: any;
    onChange: any,
    name: string,
    value: string

}

export const Selects = ({label, option, onChange, name, value}: selectProps) => {
    return (
        <div className="w-[100%]">
            <label htmlFor={option} className="text-[11pt]">{label}</label>
            <Select options={option} noOptionsMessage={() => "Nenhuma opção encontrada"} name={name} onChange={onChange} value={option?.find((opt: any) => opt?.value === value)} />
        </div>
    )
}
