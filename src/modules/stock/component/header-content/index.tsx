type headerProps = {
    title: string
}
export const HeaderContent = ({title}: headerProps) => {
    return (
        <div className="bg-[#fff] w-[100%] rounded-[10px] p-[.5em] flex justify-between items-center h-[50px]">
            <div className="flex w-[100%] items-center gap-[.5em] h-[100%]">
                <span className="w-[.5%] h-[80%] bg-[#264A7D] rounded-[28px]"></span>
                <h1 className="text-[#264A7D] text-[16px]">{title}</h1>
            </div>
            <div></div>
        </div>
    )
}
