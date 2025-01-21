type ModalButtonProps = {
    text: string;
    onClick: () => void;
}

export const ModalButton = ({text, onClick}: ModalButtonProps) => {
    return (
        <button className="bg-[#264A7D] text-[#fff] text-[10pt] font-[400] p-[.5em] rounded-[3px]" onClick={onClick}>{text}</button>
    )
}