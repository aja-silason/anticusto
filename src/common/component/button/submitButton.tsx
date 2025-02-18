import { Loader } from "../loader"

type SubmitButtonProps = {
    text: string,
    isLoading?: boolean
}

export const SubmitButton = ({text, isLoading}: SubmitButtonProps) => {
    return (
        <button type="submit" className="bg-[#264A7D] w-[100%] text-[#fff] font-[500] p-[.5em] rounded-[3px]">
            {isLoading && <Loader customStyle="w-[14px] p-[.5em] h-[14px] border-2 border-white"/>}
            {!isLoading && text}
        </button>
    )
}