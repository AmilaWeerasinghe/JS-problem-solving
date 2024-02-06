const AccordianItem = ({className, children}) => {
    return (
        <li className={className}>
            {children}
        </li>
    )
}

export default AccordianItem;