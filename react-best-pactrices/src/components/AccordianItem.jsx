import { useAccordianContext } from "./Accordian";

const AccordianItem = ({id ,className , title, children}) => {
    const { openItemId, toggleItem} = useAccordianContext();

    const isOpen = openItemId === id;

    const handleClick = () => {
        toggleItem(id)
    }
    return (
        <li className={className}>
        <h3 onClick={handleClick}>{title}</h3>
        <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'}>{children}</div>
        </li>
    )
}

export default AccordianItem;