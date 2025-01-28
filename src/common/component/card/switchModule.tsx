type switchmodule = {
    onClick: VoidFunction,
    text: string,
    isActive?: boolean
}

export const SwitchModule = ({onClick, text, isActive}: switchmodule) => {
    return (
        <button onClick={isActive ? onClick : () => {}} className={`${isActive ? 'bg-[#264A7D]' : 'bg-[#ccc] italic cursor-default'} text-[#fff] w-[20%] h-[20%] flex items-center justify-center p-[3em] rounded-[.3em]`}>{text}</button>
    )
}