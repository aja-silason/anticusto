
type inputProps = {
    value: string | number | any,
    change: (e: any) => any;
    name: string
}

export const Input = ({value, change, name}: inputProps) => {
    return (
        <div>
            <input type="text" placeholder="" onChange={change} value={value} name={name}/>
        </div>
    )
}