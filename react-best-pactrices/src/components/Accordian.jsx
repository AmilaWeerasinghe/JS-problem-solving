const Accordian = ({children ,className}) => {
    return <ul className={className}>
        {children}
    </ul>
}

export default Accordian;