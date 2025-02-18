import Select from "react-select";

type selectProps = {
    label: string,
    option: any;

}

export const Selects = ({label, option}: selectProps) => {
    return (
        <div className="w-[100%]">
            <label htmlFor={option} className="text-[11pt]">{label}</label>
            <Select options={option} noOptionsMessage={() => "Nenhuma opção encontrada"} />
        </div>
    )
}
