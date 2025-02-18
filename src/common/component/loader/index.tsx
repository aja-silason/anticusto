type LoaderProps = {
    customStyle?: any
}

export const Loader = ({customStyle}: LoaderProps) => {
    return (
        <div className="flex justify-center items-center">
            <div className={!customStyle ? "w-4 h-4 border-2 border-blue-500 border-t-transparent border-solid rounded-full animate-spin" : `${customStyle} border-t-transparent border-solid rounded-full animate-spin`}></div>
        </div>
    )
}