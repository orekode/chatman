
export const Md = ({ children, ...props }) => {
    return (
        <button className="bg-red-500 text-white px-6 py-2 whitespace-nowrap" {...props}>
            {children}
        </button>
    )
}

export const Lg = ({ children }) => {
    return (
        <button className="bg-red-500 text-white px-9 py-3 min-sw-[150px] text-xl whitespace-nowrap">
            {children}
        </button>
    )
}