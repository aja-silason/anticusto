type SubmitButtonProps = {
    text: string,
    // onClick: VoidFunction
}

export const SubmitButton = ({text}: SubmitButtonProps) => {
    return (
        <button className="bg-[#264A7D] w-[100%] text-[#fff] font-[500] p-[.5em] rounded-[3px]">{text}</button>
    )
}